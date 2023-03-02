import {select, selectAll} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js! | Non :p
let width = "500";
let height = "500";
let dataset = [20, 5, 25, 8, 15];
let circlesvg = select("body").append('div').attr('id', 'circleContainer').append("svg")

let c1 = circlesvg
            .attr("width", width)
            .attr("height", height)
            .append('circle')
            .attr("r", '40px')
            .attr('cx', '100px')
            .attr('cy', '50px');

let c2 = circlesvg
            .attr("width", width)
            .attr("height", height)
            .append('circle')
            .attr("r", '40px')
            .attr('cx', '150px')
            .attr('cy', '150px')
            .attr("fill", 'green');

let c3 = circlesvg
            .attr("width", width)
            .attr("height", height)
            .append('circle')
            .attr("r", '40px')
            .attr('cx', '300px')
            .attr('cy', '250px')
            .on('click', function(){
                selectAll('#circleContainer>svg')
                .style('display','block')
                .style('margin', 'auto')
            });;

let text = selectAll("circle")
            .append("text");

let dataContainer = select("body")
                    .append('div')
                    .attr("id", "dataContainer")
                    .append("svg")
                    .style('display','flex')
                    .style('align-self','flex-end')
                    .attr("width", width)
                    .attr("height", '100px')

let datasetShow = select("#dataContainer>svg")
                .selectAll('rect')
                .data("dataset")
                .join("rect")
                .attr('x', function(d,i){
                    return i*20;
                })
                .attr('width', '20px')
                .attr('height', function(d,i){
                    return dataset[i]
                })
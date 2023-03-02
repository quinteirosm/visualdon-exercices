import {select, selectAll} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js! | Non :p
let width = "500";
let height = "500";

let c1 = select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('circle')
            .attr("r", '40px')
            .attr('cx', '100px')
            .attr('cy', '50px');

let c2 = select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('circle')
            .attr("r", '40px')
            .attr('cx', '150px')
            .attr('cy', '150px')
            .attr("fill", 'green');

let c3 = select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('circle')
            .attr("r", '40px')
            .attr('cx', '300px')
            .attr('cy', '250px')
            .on('click', function(){
                selectAll("svg")
                .attr("margin", "auto");
            });;

let text = selectAll("circle")
            .append("text");
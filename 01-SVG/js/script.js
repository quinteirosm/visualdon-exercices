let rectangle = document.getElementById('rectangle');
let donut = document.querySelector('.donut');
let backgroundColor = document.getElementById('rectangle');

function changeColor(){
    if(backgroundColor.getAttribute("fill") === 'red'){
        rectangle.setAttribute('fill', 'blue');
        console.log("1");
    }else{
        rectangle.setAttribute('fill', 'red');
        console.log("2");
    }
console.log("3");
}

function changeR(){
    switch(donut.getAttribute('r')){
        case '40':
            donut.setAttribute('r', '80')
            break;
        case '80':
            donut.setAttribute('r', '40')
            break;
    }
    
}

rectangle.addEventListener("click", changeColor);
donut.addEventListener("mouseover", changeR);
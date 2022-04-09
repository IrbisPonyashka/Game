let input = document.querySelector('input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    block = document.querySelector('.block'),
    score = 0,
    time = 0,
    interval = 0,
    result;
    
btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value != ''){
        time = input.value
        input.value = '';
        score = 0;
        document.querySelector('h3').classList.remove('danger')
        clearInterval(interval)
        startGame();
        result = document.querySelector('.result')
        block.removeChild(result)
    }
})


block.addEventListener('click', (event) => {
    (event.target.classList.contains('square') || event.target.classList.contains('ball')) ? getCreateTriangle():
    (event.target.classList.contains('square') || event.target.classList.contains('triangle')) ? getCreateBall() :
    (event.target.classList.contains('ball') || event.target.classList.contains('triangle')) ? getCreateSquare() : '';
})

let getCreateSquare = () => { score++; event.target.remove();createSquare()}
let getCreateBall = () => { score++; event.target.remove();createBall()}
let getCreateTriangle = () => { score++; event.target.remove();createTriangle()}


function startGame() {
    interval = setInterval(() => decreaseTime(), 1000);
    randFigure();
} 

function decreaseTime(){
    if(time === 0) {
        endGame()
    }else {
       let currentTime = --time; 
        if(currentTime < 10){
            currentTime = '0' + currentTime;
            document.querySelector('h3').classList.add('danger')
        }
        timeOut.innerHTML = ' 00:'+ currentTime
    }
}       

function endGame() {
    block.innerHTML = `<h1 class="result">Ваш рузельтат: <span class = "span">${score}</span</h1>`
}

// круг
function createBall(){
    let ball = document.createElement('div');
    let size = getRandNum(20,60);
    let blockSize = block.getBoundingClientRect();
    let x = getRandNum(0, blockSize.width - size)
    let y = getRandNum(0, blockSize.height - size)
    
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.classList.add('ball')
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
    ball.style.borderRadius = '50%';
    ball.style.background =`rgb(${randColor()},${randColor()},${randColor()})`;
    
    block.append(ball);
}

// квадрат
function createSquare() {
    let square = document.createElement('div')
    let size = getRandNum(20,60);
    let  blockSize = block.getBoundingClientRect();
    let x = getRandNum(0, blockSize.width - size);
    let y = getRandNum(0, blockSize.height - size);
    
    
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.classList.add('square')
    square.style.top = y + 'px';
    square.style.left = x + 'px';
    square.style.background =`rgb(${randColor()},${randColor()},${randColor()})`;

    block.append(square);
}

// треугольник
function createTriangle() {
    let triangle = document.createElement('i');
    let size = getRandNum(30,70);
    let blockSize = block.getBoundingClientRect();
    let x = getRandNum(0, blockSize.width - size);
    let y = getRandNum(0, blockSize.height - size);


    triangle.classList.add('fas');
    triangle.classList.add('fa-triangle');
    triangle.classList.add('triangle');
    triangle.style.fontSize = size +'px';
    triangle.style.top = y +'px';
    triangle.style.left = x +'px';
    triangle.style.color = `rgb(${randColor()},${randColor()},${randColor()})`; 
    

    block.append(triangle);
}

let randFigure = () => {
    let num = getRandNum(1,3);
    (num == 1) ? createBall() : (num == 2) ? createTriangle() : (num == 3) ? createSquare() : '' ;
}

function getRandNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
} 
function randColor(){
    return Math.floor(Math.random() * 257);
}













        // function randFigure() {
        //     let num = getRandNum(1,3);
        //     if(num == 1){
        //         createBall();
        //     }else if(num == 2){
        //         createTriangle();
        //     }
        //     else if(num == 3){
        //         createSquare();  
        //     }
        //     return num;
        // }

        // block.addEventListener('click', (event) => {
        // if(event.target.classList.contains('ball') || event.target.classList.contains('triangle')) {
        //     getCreateSquare();
        // }else if(event.target.classList.contains('square') || event.target.classList.contains('triangle')){
        //     getCreateBall();
        // }
        // else if(event.target.classList.contains('square') && event.target.classList.contains('ball')){
        //     getCreateTriangle();
        // }
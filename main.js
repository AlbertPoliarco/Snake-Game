
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;

(function setup() {

    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(()=> {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
        }

        snake.checkCollision();
        // document.querySelector('.score').innerHTML = snake.total;     
        
        document.querySelector('.score').innerText = snake.total;
}, 250);


}());

window.addEventListener('keydown', ((evt)=> {
    // replace a,s,w,d > arrow
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
    // console.log(evt)

    // score
}));
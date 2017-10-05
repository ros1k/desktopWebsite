import React from 'react'



class TitleBar extends React.Component{


    handleClick = () =>{
        document.querySelector(".game").style.display = "none"
    }

    render(){
        return  <div className="titleBar">
            <div>
                <img onClick={this.handleClick} src="../../assets/close.png" alt=""/>
            </div>
            <div>Game</div>
        </div>
    }
}
class GameArea extends React.Component{


    componentDidMount(){
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        let ballRadius = 10;
        let x = canvas.width/2;
        let y = canvas.height-30;
        let dx ;
        let dy ;
        let paddleHeight = 10;
        let paddleWidth = 75;
        let paddleX = (canvas.width-paddleWidth)/2;
        let rightPressed = false;
        let leftPressed = false;
        let brickRowCount = 5;
        let brickColumnCount = 3;
        let brickWidth = 75;
        let brickHeight = 20;
        let brickPadding = 10;
        let brickOffsetTop = 30;
        let brickOffsetLeft = 30;
        let score = 0;
        let lives = 3;
        let level = 1;

        if(level === 1){
            dx = 3;
            dy = -3;
        }else if(level === 2 ){
            dx = 5;
            dy = -5;
        }else if (level === 3) {
            dx = 10;
            dy = -10;
        }



        let bricks = [];
        for(var c=0; c<brickColumnCount; c++) {
            bricks[c] = [];
            for(var r=0; r<brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        function keyDownHandler(e) {
            if(e.keyCode == 39) {
                rightPressed = true;
            }
            else if(e.keyCode == 37) {
                leftPressed = true;
            }
        }
        function keyUpHandler(e) {
            if(e.keyCode == 39) {
                rightPressed = false;
            }
            else if(e.keyCode == 37) {
                leftPressed = false;
            }
        }

        function collisionDetection() {
            for(c=0; c<brickColumnCount; c++) {
                for(r=0; r<brickRowCount; r++) {
                    let b = bricks[c][r];
                    if(b.status == 1) {
                        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                            dy = -dy;
                            b.status = 0;
                            score++;
                            if(score == brickRowCount*brickColumnCount) {
                                alert("YOU WIN, CONGRATS!");
                                level++;
                                requestAnimationFrame(draw);

                            }
                        }
                    }
                }
            }
        }

        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.closePath();
        }
        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.closePath();
        }
        function drawBricks() {
            for(c=0; c<brickColumnCount; c++) {
                for(r=0; r<brickRowCount; r++) {
                    if(bricks[c][r].status == 1) {
                        let brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                        let brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#000000";
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }
        function drawScore() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Score: "+score, 8, 20);
        }
        function drawLevel() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Level: "+ level, canvas.width/2-30, 20);
        }
        function drawLives() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives: "+lives, canvas.width-65, 20);
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLevel()
            drawLives();
            collisionDetection();

            if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if(y + dy < ballRadius) {
                dy = -dy;
            }
            else if(y + dy > canvas.height-ballRadius) {
                if(x > paddleX && x < paddleX + paddleWidth) {
                    dy = -dy;
                }
                else {
                    lives--;
                    if(!lives) {
                        level = 1;
                        document.location.reload();
                    }
                    else {
                        x = canvas.width/2;
                        y = canvas.height-30;
                        dx = 3;
                        dy = -3;
                        paddleX = (canvas.width-paddleWidth)/2;
                    }
                }
            }

            if(rightPressed && paddleX < canvas.width-paddleWidth) {
                paddleX += 7;
            }
            else if(leftPressed && paddleX > 0) {
                paddleX -= 7;
            }
            x += dx;
            y += dy;

            requestAnimationFrame(draw);
        }
        draw();

    }

    render(){



        return <div className="gameArea">
                    <canvas id="myCanvas" width={500} height={500}>

                    </canvas>
                </div>
    }
}
export default class Game extends React.Component{

    render(){
        return <div className="game">
                    <TitleBar/>
                    <GameArea/>

                </div>
    }
}
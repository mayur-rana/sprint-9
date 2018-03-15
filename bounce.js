var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

var c = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', start)

function start(){
    var incButton = document.getElementById("inc");
    incButton.addEventListener('click', incSpeed);

    var decButton = document.getElementById("dec");
    decButton.addEventListener('click', decSpeed);
}

var centreY = canvas.height * 0.5,
    centreX = canvas.width * 0.5,
    offset = canvas.height * 0.441,
    speed = 0.05,
    angle = 0;

    

    function bounce () {
        radius = 40;

        var y = centreY + Math.sin(angle) * offset;

        c.clearRect(0, 0, canvas.width, canvas.height);
        c.beginPath();
        c.arc(centreX, y, radius, 0, Math.PI * 2, false);
        c.fillStyle = 'green';
        c.fill();

        angle += speed;

        requestAnimationFrame(bounce);
    }

    bounce();

    function incSpeed (evt){
        if(speed < 0.15){
            speed += 0.005;
            console.log("inc speed is now " + speed);
        }else{
            console.log("you've maxed out");
        }
        
    }

    function decSpeed (evt){
        if(speed > 0.01){
            speed -= 0.005;
            console.log("dec speed is now " + speed);
    }else{
        console.log("Min speed reached!")
    }
        
    }
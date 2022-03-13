var character = document.getElementById("character");
let projectile = document.getElementById("projectile");
let move = document.getElementsByClassName("move");
let blocks = document.getElementsByClassName('blocks');
let redSquare = document.getElementById('red');
let greenSquare = document.getElementById('green');
let blueSquare = document.getElementById('blue');
let moveBy = 15
min = 1 //min for both width and height
maxLeft = 660 // max width of squares
maxTop = 250 // max height of squares



// put RGB squares randomly on page
window.addEventListener('load', () => {
    console.log('page is fully loaded!')
    redSquare.style.position = 'absolute'
    redSquare.style.left = (Math.floor( Math.random() * maxLeft) + min + 'px')
    redSquare.style.top = (Math.floor( Math.random() * maxTop) + min + 'px' );
    greenSquare.style.position = 'absolute'
    greenSquare.style.left = (Math.floor( Math.random() * maxLeft) + min + 'px')
    greenSquare.style.top = (Math.floor( Math.random() * maxTop) + min + 'px' );
    blueSquare.style.position = 'absolute'
    blueSquare.style.left = (Math.floor( Math.random() * maxLeft) + min + 'px')
    blueSquare.style.top = (Math.floor( Math.random() * maxTop) + min + 'px' );
});

// Move triangle left and right
window.addEventListener('load', () => {
    character.style.position = 'absolute';
    character.style.left = 0;
    character.style.top = 475;
});

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + moveBy + 'px';
    }
})
var characterColors = ['25px solid red', '25px solid green', '25px solid blue']
var projectileColors = ['red', 'green', 'blue']
var colorIndex = 0;

//change color of character and 
function changeCharacterColor(e) {
    if (colorIndex >= characterColors.length) {
        colorIndex = 0
    }
        switch(e.key){
            case 'ArrowUp':
                character.style.borderBottom = characterColors[colorIndex];
                projectile.style.backgroundColor = projectileColors[colorIndex];
                colorIndex++;
                console.log(projectile.style.backgroundColor)
                break
            case 'ArrowDown':
                character.style.borderBottom = characterColors[colorIndex];
                projectile.style.backgroundColor = projectileColors[colorIndex];
                if(colorIndex <= 0) colorIndex = characterColors.length;
                colorIndex--;
                console.log(projectile.style.backgroundColor)
                break
            }
}
document.addEventListener('keydown', changeCharacterColor)

// move projectile left and right
window.addEventListener('load', () => {
    projectile.style.position = 'absolute';
    projectile.style.left = 12;
    projectile.style.top = 480;
});

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            projectile.style.left = parseInt(projectile.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            projectile.style.left = parseInt(projectile.style.left) + moveBy + 'px';
    }
})


// Projectile moves when spacebar pressed

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        projectile.style.display = 'block';
        function shoot() {
            if(projectile.classList == 'animate'){return}
            projectile.classList.add('animate');
        } 
    }else{
    
    }
})

// blocks appear randomly on page



// check if projectile hit block and it is the right color


/* use this for projectile
setTimeout(function(){
    projectile.style.display = 'none';
},500);
*/

/* function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}*/
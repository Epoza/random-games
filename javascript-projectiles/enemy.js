export default class Enemy{

    constructor(x, y, color, health, speedY){
        //this.x = x;
        this.x = Math.floor(Math.random() * x) + 1;
        this.y = y;
        this.color = color;
        this.health = Math.floor(Math.random() * health) + 1;
        this.speedY = speedY
        this.width = 50;
        this.height = 50;
        
    }
    draw(ctx){

        const open = document.getElementById('open');
        const modalContainer = document.getElementById('modal-container');
        const closeButton = document.getElementById('close-button');
        let gameover = false

        // Show the modal when game is over
        open.addEventListener('click', () => {
            modalContainer.classList.add('show')
        })

        // close the modal when clicked
        closeButton.addEventListener('click', () => {
            modalContainer.classList.remove('show')
        })

        ctx.fillStyle = this.color;
        if(this.health > 1){
            ctx.strokeStyle = 'white'
        }else {
            ctx.strokeStyle = this.color
        }
        
        if (this.y <= 600) {
            this.y += this.speedY
        }else{
            this.speedY = 0
            gameover = true
        }

        if(gameover === true){
            gameover = false
            // Show the modal when game is over
            modalContainer.classList.add('show')

            // close the modal when clicked
            closeButton.addEventListener('click', () => {
                location.reload()
                modalContainer.classList.remove('show')
            })
        }


        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        //Draw Text
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText(this.health, this.x +this.width/3.5, this.y+this.height/1.5)
    }

    takeDamage(damage){
        this.health -= damage
    }
    
}

//code for enemy touching bottom
// if(this.y <= 0) {
//     gameover
// }
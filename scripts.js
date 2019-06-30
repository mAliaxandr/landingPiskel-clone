let animationWrap = document.querySelector('.piskel-animation-item');
let createSprite = document.querySelector('.create-sprite');
let arr = ["url('img/sk2.png')","url('img/sk3.png')","url('img/sk4.png')"]
let counter = 0;
setInterval(() => {
    animationWrap.style.backgroundImage = arr[counter];
    createSprite.classList.toggle('border');
    counter = counter + 1;
    if (counter === 3) {
        counter = 0;
    }   
},400)
    
'use strict'

window.onload = function() {
    const bg_paralax = document.querySelectorAll('.bg-paralax-sky');
    const main_paralax = document.querySelector('.main-paralax')

    if (main_paralax){
        const bg_coleff = 15;
        const speed = 0.1;
    
        let positionX = 0;
        let positionY = 0;
        let coordXprocent = 0;
        let coordYprocent = 0;
    
        function setMouseParalaxStyle(){
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
        
            positionX += distX * speed;
            positionY += distY * speed;

            for (let i = 0; i < bg_paralax.length; i += 1){
                const bg_paralax_elem = bg_paralax[i];
                console.log(bg_paralax_elem);
                bg_paralax_elem.style.backgroundPosition = `bottom ${50 - ((positionY / bg_coleff) * 10)}% right ${50 - (positionX / bg_coleff)}%`;
            }
        
            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle();
    
        main_paralax.addEventListener('mousemove', function (e){
            const paralaxWidth = main_paralax.offsetWidth;
            const paralaxHeight = main_paralax.offsetHeight;
            
            const coordX = e.pageX - paralaxWidth / 2;
            const coordY = e.pageY - paralaxHeight / 2;
        
            coordXprocent = coordX / paralaxWidth * 100;
            coordYprocent = coordY / paralaxHeight * 100;
        })
    }
}

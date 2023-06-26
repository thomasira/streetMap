window.addEventListener('DOMContentLoaded',function(){

    const elMap = document.querySelector('[data-js-map]'),
        elsCar = document.querySelectorAll('[data-js-control]'),
        elSelect = document.querySelector('select'),
        aCars = [];

    let car;
    
    for (let i = 0; i < elsCar.length; i++) {
       aCars[i] = new Control(elsCar[i], 50, 20, elsCar[i].dataset.jsControl) 
    }

    car = aCars[0];

    elSelect.addEventListener('click', function(e){
        for (let i = 0; i < aCars.length; i++) {
            if(aCars[i]._color == elSelect.value) car = aCars[i];
        }
})

    window.addEventListener('keydown', function(e){


        if(e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') car.isActive(true);

        if(e.key == 'ArrowUp' && car._el.offsetTop >= 0) car.up();
        if(e.key == 'ArrowDown' && car._el.offsetTop <= (elMap.clientHeight-car._el.offsetHeight)) car.down();
        if(e.key == 'ArrowLeft' && car._el.offsetLeft >= 0) car.left();
        if(e.key == 'ArrowRight' && car._el.offsetLeft <= (elMap.clientWidth-car._el.offsetWidth)) car.right();
    })
    window.addEventListener('keyup', function(e){

        if(e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') car.isActive(false);
    })

})
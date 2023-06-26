
/**
 * will tranfrom any div into a moveable object, can insert image of choice. color is optional
 * (element, size in px, speed in px/arrowdown, color(red, blue or yellow))
 * you can adjust isActive() properties. will trigger when active.
 */
class Control{

    constructor(el, size, speed, color){
        this._el = el;
        this._size = size;
        this._speed = speed;
        this._color = color;
        this._el.style.width = `${this._size}px`;
        if(color) this.applyColor();
    } 
    applyColor(){
        if(this._color == 'red') this._el.style.filter = 'brightness(2) hue-rotate(0deg)';
        else if(this._color == 'yellow'){
            this._el.style.filter = 'brightness(2) hue-rotate(40deg)';
            this._el.style.top = `${this._size}px`;
        }  
        else if(this._color == 'blue'){
            this._el.style.filter = 'brightness(2) hue-rotate(180deg)';
            this._el.style.top = `${this._size*2}px`;
        } 
    }
    up(){
        this._el.style.top = `${this._el.offsetTop - this._speed}px`;
        this._el.style.transform = `rotate(90deg)`;
        this._el.firstElementChild.style.boxShadow = `2px -2px 5px rgba(27, 27, 27, 0.9)`;
    }
    down(){
        this._el.style.top = `${this._el.offsetTop + this._speed}px`;
        this._el.style.transform = `rotate(270deg)`;
        this._el.firstElementChild.style.boxShadow = `-2px 2px 5px rgba(27, 27, 27, 0.9)`;
    }
    left(){
        this._el.style.left = `${this._el.offsetLeft - this._speed}px`;
        this._el.style.transform = `rotate(360deg)`;
        this._el.firstElementChild.style.boxShadow = `2px 2px 5px rgba(27, 27, 27, 0.9)`;
    }
    right(){
        this._el.style.left = `${this._el.offsetLeft + this._speed}px`;
        this._el.style.transform = `rotate(180deg)`;
        this._el.firstElementChild.style.boxShadow = `-2px -2px 5px rgba(27, 27, 27, 0.9)`;
    }
    isActive(bool){
        if(bool){
            this._el.style.transitionDuration = '.5s';
            this._el.style.transitionProperty = 'transform';
        } 
    }

}


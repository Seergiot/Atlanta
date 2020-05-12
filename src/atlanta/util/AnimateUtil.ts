export default class AnimateUtil{

    static animateCSS(element:any, animationName:string, callback:any) {
        const node = ((typeof element === 'string') ? document.querySelector(element) : element);

        if( typeof node === undefined || node === null)
            return;

        node.classList.add('animated', animationName)
    
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)
    
            if (typeof callback === 'function') callback()
        }
    
        node.addEventListener('animationend', handleAnimationEnd)
    }

}
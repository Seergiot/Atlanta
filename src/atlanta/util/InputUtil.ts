import AnimateUtil from "./AnimateUtil";

export default class InputUtil
{
    static checkInput(input): boolean{
        return !input || input.value.length === 0;
    }

    static inputError(input){
        AnimateUtil.animateCSS(input, 'shake', null);
    }
}
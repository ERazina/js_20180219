import {Message} from '../message/message';
import template from './chat.pug';


export class Chat {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }
    insertMessage(text){
        let parent = document.querySelector('.chat');
        parent.appendChild(text);
    }

    render() {
        this.el.innerHTML = template();
    }


}



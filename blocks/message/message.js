import template from './message.pug';

export class Message {


    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }


    render() {

        this.el.innerHTML = template();

    }


}

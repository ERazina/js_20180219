import template from './textarea.pug';

export class Textarea {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }

    render() {

        this.el.innerHTML = template();

    }

}



(function () {
    'use strict';

    export class Message {

        constructor(el, data) {
            this.el = el;
            this.data = data;
            this.render();

        }

        render() {

            this.el.innerHTML = `
                <div class="message"></div>`;

        }

    }


})();


(function () {
    'use strict';

    export class Textarea {

        constructor(el, data) {
            this.el = el;
            this.data = data;
            this.render();

        }

        render() {

            this.el.innerHTML = `
                <form class="textarea pure-form">
                    <fieldset class="pure-group">
                        <input type="text" class="textarea__title pure-input-1-2" placeholder="Title">
                        <textarea class="textarea__input pure-input-1-2" placeholder="Add your message here..."></textarea>
                    </fieldset>
                    <button type="submit" class="textarea__button button-success pure-button">Publish</button>
                </form>
        `;

        }

    }


})();


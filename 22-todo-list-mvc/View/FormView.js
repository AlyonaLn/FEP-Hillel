class FormView {
    static DONE_CLASS = 'done';
    static TODO_ITEM_SELECTOR = 'todoItem';

    constructor(options) {
        this.options = options;
        this.$rootEl = this.initViev();
    }

    initViev(){
        return $(`
             <form id="todoForm">
            <input class="message-input" type="text" placeholder="Введите сообщение" />
            <button class="add-button">Отправить</button>
            </form>
        `)
        .on('click', '.add-butto', this.onRemoveBtnClick.bind(this));
    }

    onRemoveBtnClick(e) {
        const id = this.getTodoElId(e.target);

        this.options.onSave(id);
    }

    appendTo($container) {
        $container.appendTo(this.$rootEl);
    }
   


    getTodoElId(el) {
        return el.closest(ListView.TODO_ITEM_SELECTOR).dataset.id
    }

};

export default FormView;
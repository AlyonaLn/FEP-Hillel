class ListView {
    static DONE_CLASS = 'done';
    static TODO_ITEM_SELECTOR = 'todoItem';

    constructor(options) {
        this.options = options;
        this.$rootEl = this.initViev();
    }

    initViev(){
        return $(`<ul></ul>`)
        .on('click', '.removeBtn', this.onRemoveBtnClick.bind(this));
    }

    onRemoveBtnClick(e) {
        const id = this.getTodoElId(e.target);

        this.options.onDelete(id);
    }

    appendTo($container) {
        $container.appendTo(this.$rootEl);
    }
   

    renderList(list) {
        const html = list.map(this.generateTodoHTML).join('');

        this.$rootEl.html(html);
    }


    generateTodoHTML(todo) {
        const done = todo.status ? ListView.DONE_CLASS : '';
    
        return `
          <li
              data-id="${todo.id}"
              data-status="${todo.status}"
              class="todoItem ${done}"
          >
            ${todo.title}
            <button class="removeBtn">Delete</button>
          </li>
        `
    }

    getTodoElId(el) {
        return el.closest(ListView.TODO_ITEM_SELECTOR).dataset.id
    }

};

export default ListView;
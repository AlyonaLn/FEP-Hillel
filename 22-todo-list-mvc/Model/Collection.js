import TodoApi from "../TodoApi.js";

class Collection {
    #list =[];

    fetch() {
        return TodoApi
        .getList()
        .then((list) => this.setList(list));

    }

    delete(id) {
        return TodoApi
        .delete(id)
        .then(() => {
            const list = this.#list.filter(item => item.id !== id);
            this.setList(list);
        });

    }

    save(){
        return TodoApi
            .create({ status: false, title: input.value })
            .then((todo) => {
                renderTodo(todo);
                clear();
            })
            .catch(handleError);
    }

    renderTodo(todo) {
        const html = generateTodoHTML(todo);

        list.insertAdjacentHTML('beforeend', html);
    }

    generateTodoHTML(todo) {
        const done = todo.status ? DONE_CLASS : '';

        return todoTemplateHTML
            .replace('{{id}}', todo.id)
            .replace('{{status}}', todo.status)
            .replace('{{title}}', todo.title)
            .replace('{{done}}', done);
    }

    clear() {
        input.value = '';
    }

    handleError(e) {
        alert(e.message);
    }

    setList(list){
         this.#list = list;
    }

    getList(){
        return this.#list;
   }
}

export default Collection;
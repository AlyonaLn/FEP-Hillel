import Collection from "../Model/Collection.js";
import ListView from "../View/ListView.js";
import FormView from "../View/FormView.js";

class Controller {
    constructor($container) {
        this.$container = $container;

        this.collection = new Collection();
        this.formView = new FormView({
            onSave: id =>  this.collection.save().then(() => this.renderList()),
        });
        this.listView = new ListView({
            onDelete: id =>  this.collection.delete(id).then(() => this.renderList()),
        });
        

        this.listView.appendTo(this.$container);
        this.collection.fetch().then(()=>this.renderList());

    }
    renderList(){
        this.listView.renderList(this.collection.getList());

    }
}


export default Controller;
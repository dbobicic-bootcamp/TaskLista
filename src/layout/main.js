import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, addToDo ,deleteToDo} from "../utilities/todo-service";
import { Login } from "../components/login";

class Main {
    constructor() {

        let inputForm = new InputForm();
        let loginForm = new Login();
        let taskList = new TaskList();

        this.node = document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(loginForm.getNode());
        this.node.appendChild(taskList.getNode());

        inputForm.setBtnAddOnClick( () =>{
            let text = inputForm.txtTitle.value;
            text = text.trim();

            if (text == '') return;

            addToDo(loginForm.username, text).then(data => {
                if (data.success == 'true') {
                    let task = new Task(text);
                    task.setBtnDeleteClickEvent(() => {
                        deleteToDo(loginForm.username, task.title).then(data => console.log(data));
                        task.deleteItem();
                    });
                    taskList.addTask(task);
                }
            })

        });
        loginForm.btnAddClickEventListener(() => {
            taskList.emptyList();
            getToDo(loginForm.username).then(data => {
                let items = data.items;
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(() => {
                        deleteToDo(loginForm.username, task.title).then(data => console.log(data));
                        task.deleteItem();
                    })
                    taskList.addTask(task);
                })
            })
        })

    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}
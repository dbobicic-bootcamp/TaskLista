export class Login {
    constructor() {
        this.node = document.createElement('div');

        this.txtUsername = document.createElement('input');
        this.txtUsername.type = 'text';
        this.txtUsername.placeholder = this.txtUsername.name = 'username';

        this.btnLogin = document.createElement('input');
        this.btnLogin.type = 'submit';
        this.btnLogin.value='LogIn';

        this.node.appendChild(this.txtUsername);
        this.node.appendChild(this.btnLogin);
        this.username='';

        this.btnLogin.addEventListener('click',()=>{
            this.username=this.txtUsername.value;
        })

    }
    getNode(){
        return this.node;
    }
    btnAddClickEventListener(onclick){
        this.btnLogin.addEventListener('click',onclick);
    }
}
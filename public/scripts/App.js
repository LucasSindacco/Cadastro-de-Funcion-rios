class registerEmployeer {
    constructor() {
        this.arrayEmployeer = [];
    }
    register() {
        const employeersProperties = this.getValueInput();
        if (this.checkedInputsValue(employeersProperties)) {
            this.toAddValuesInArray(employeersProperties);
            this.toAddTable();
            this.clearInputs();
        }
    }

    getValueInput() {
        const employeers = {};
        employeers.name = document.querySelector('#name').value;
        employeers.age = document.querySelector('#age').value;
        employeers.company = document.querySelector('#company').value;
        employeers.wage = document.querySelector('#wage').value;
        return employeers;
    }
    toAddValuesInArray(employeersProperties) {
        //  (employeersProperties) Access as properties of our object
        this.arrayEmployeer.push(employeersProperties);
    }
    checkedInputsValue(employeersProperties) {
        // Checked Inputs 
        if (employeersProperties.name === "") {
            window.alert('Preencha o nome');
            return false;
        }
        if (employeersProperties.age === "") {
            window.alert('Preencha a idade');
            return false;
        }
        if (employeersProperties.company === "") {
            window.alert('Preencha a empresa');
            return false;
        }
        if (employeersProperties.wage === "") {
            window.alert('Preencha o salário');
            return false;
        } else {
            return true;
        }
    }
    toAddTable(td_Name, td_Age, td_Company, td_Wage) {
        const formatter = new Intl.NumberFormat('pt-BR');
        const tBody = document.querySelector('tbody');
        tBody.textContent = "";
        this.arrayEmployeer.forEach((array) => {
            const newLines = tBody.insertRow();
            td_Name = newLines.insertCell();
            td_Age = newLines.insertCell();
            td_Company = newLines.insertCell();
            td_Wage = newLines.insertCell();
            // Insert values in table
            td_Name.textContent = array.name;
            td_Age.textContent = array.age;
            td_Company.textContent = array.company;
            td_Wage.textContent = `R$: ${formatter.format(array.wage)}`;
        });
    }
    clearInputs() {
        document.querySelector('#name').value = "";
        document.querySelector('#age').value = "";
        document.querySelector('#company').value = "";
        document.querySelector('#wage').value = "";
    }
}

// Actions 
const Actions = () => {
    const buttonRegister = document.querySelector('#register');
    buttonRegister.addEventListener('click', () => {
        objRegisterEmployeer.register();
    });

    const buttonClear = document.querySelector('#clear');
    buttonClear.addEventListener('click', () => {
        objRegisterEmployeer.clearInputs();
    });
}

Actions();
const objRegisterEmployeer = new registerEmployeer();
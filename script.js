const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

//Validate vai apenas validar se é verdadeira ou falsa o input
function validateTask(taskText) {
    if (taskText !== '') {
        return true;   
    } else {
        return false;
    }
}

function addTask() {
    const taskText = taskInput.value.trim();
    validateTask(taskText);

    if (validateTask(taskText)) {
        const taskId = crypto.randomUUID();
        const listItem = document.createElement('li');
        //elemento/objeto.Metodo(atributo, variável com o dado);
        listItem.setAttribute('data-task-id', taskId);
        
        listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
        <button onclick="toggleComplete(this)">Feito</button>
        <button class="remove-btn" onclick="removeTask(this)">
        <span class="material-symbols-outlined">delete</span>
        </button>
        
        `;
        /*
        por enquanto não vou usar esse trecho do código, fica aí.
        <button class="remove-btn" onclick="removeTask(this)">Remover</button>
        </div>
        */
        /*
        Metodo DOM para fazer aparecer minha nova tarefa e ordenar da última para a primeira
        E que também adiciona a li dentro da ul taskList
        */
       taskList.appendChild(listItem);
       cleanTask(taskInput);
    } else { // não precisava desse else mas quis fazer uma graça
        alert("Por favor, digite uma tarefa.");
    }

}

//Função responsavel pela limpeza do campo de input
function cleanTask(taskInput) {
    taskInput.value = '';  
}


function removeTask(button) {
    //const listItem = button.parentNode.parentNode;
    const listItem = button.closest('li');
    const taskIdToRemove = listItem.getAttribute('data-task-id');
    taskList.removeChild(listItem);
}

function toggleComplete(button) {
    //const listItem = button.parentNode.parentNode;
    const listItem = button.closest('li');
    const taskIdToToggle = listItem.getAttribute('data-task-id');
    listItem.querySelector('span').classList.toggle('completed');
    button.textContent = listItem.querySelector('span').classList.contains('completed') ? 'Desfazer' : 'Feito';
    
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
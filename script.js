const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button onclick="toggleComplete(this)">Feito</button>
                <button class="remove-btn" onclick="removeTask(this)">Remover</button>
            </div>
        `;
        /*
        Metodo DOM para fazer aparecer minha nova tarefa e ordenar da última para a primeira
        E que também adiciona a li dentro da ul taskList
        */
        taskList.appendChild(listItem);
        taskInput.value = '';
    } 
}

function removeTask(button) {
    //plaicar UUID aqui nessa porra
    const listItem = button.parentNode.parentNode;
    taskList.removeChild(listItem);
}

function toggleComplete(button) {
    const listItem = button.parentNode.parentNode;
    listItem.querySelector('span').classList.toggle('completed');
    button.textContent = listItem.querySelector('span').classList.contains('completed') ? 'Desfazer' : 'Feito';
    
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
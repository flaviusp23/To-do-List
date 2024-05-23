const inputBox = document.querySelector('.input-box');
const dayContainers = document.querySelectorAll('.day-container');
const clearButton = document.getElementById('clearButton');
const allButton = document.getElementById('allButton');
const activeButton = document.getElementById('activeButton');
const completedButton = document.getElementById('completedButton');
const clearCompletedButton = document.getElementById('clearcompletedButton');

clearButton.addEventListener('click', clearLocalStorage);
allButton.addEventListener('click', showAllTasks);
activeButton.addEventListener('click', showActiveTasks);
completedButton.addEventListener('click', showCompletedTasks);
clearCompletedButton.addEventListener('click', clearCompletedTasks);


function addTask() {
    const selectedDay = document.querySelector('.selected-day');
    if (!selectedDay) {
        alert('Please select a day!');
        return;
    }

    const listContainer = selectedDay.querySelector('.list-container');

    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        let taskText = document.createTextNode(inputBox.value);
        li.append(taskText);
        let editButtonUnicode = document.createTextNode('\u270E');
        let editButton = document.createElement('span');
        editButton.classList.add('edit-button');
        editButton.append(editButtonUnicode);
        li.append(editButton);
        let deleteButtonUnicode = document.createTextNode('\u00d7');
        let deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-button');
        deleteButton.append(deleteButtonUnicode);
        li.append(deleteButton);
        listContainer.append(li);
    }
    inputBox.value = '';
    saveData();
}


dayContainers.forEach(container => {
    container.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            if (e.target.classList.contains('delete-button')) {
                e.target.parentElement.remove();
                saveData();
            } else if (e.target.classList.contains('edit-button')) {
                let liElement = e.target.parentElement;
                let taskTextNode = liElement.childNodes[0];
                let newText = prompt("Edit your task:", taskTextNode.textContent.trim());
                if (newText !== null && newText.trim() !== '') {
                    taskTextNode.textContent = newText.trim();
                    saveData();
                }
            }
        } else {
            dayContainers.forEach(c => c.classList.remove('selected-day'));
            container.classList.add('selected-day');
        }
    }, false);
});


function saveData() {
    dayContainers.forEach(container => {
        const dayId = container.id;
        const listContainer = container.querySelector('.list-container');
        localStorage.setItem(dayId, listContainer.innerHTML);
    });
}

function showTask() {
    dayContainers.forEach(container => {
        const dayId = container.id;
        const listContainer = container.querySelector('.list-container');
        listContainer.innerHTML = localStorage.getItem(dayId);
    });
}

showTask();

function showTodayDate() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const todayDateElement = document.getElementById('todayDate');
    todayDateElement.textContent = "Today - " + today.toLocaleDateString('en-US', options);
}

showTodayDate();

function clearLocalStorage() {
    localStorage.clear();
    dayContainers.forEach(container => {
        const listContainer = container.querySelector('.list-container');
        listContainer.innerHTML = '';
    });
}

inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (inputBox.value.trim() !== '') {
            addTask();
        } else {
            alert('You must write something!');
        }
    }
});

function showAllTasks() {
    dayContainers.forEach(container => {
        const listContainer = container.querySelector('.list-container');
        listContainer.innerHTML = localStorage.getItem(container.id) || '';
    });
}

function showActiveTasks() {
    showAllTasks()
    dayContainers.forEach(container => {
        const listContainer = container.querySelector('.list-container');
        const items = listContainer.querySelectorAll('li:not(.checked)');
        listContainer.innerHTML = '';
        items.forEach(item => {
            listContainer.append(item);
        });
    });
}

function showCompletedTasks() {
    showAllTasks()
    dayContainers.forEach(container => {
        const listContainer = container.querySelector('.list-container');
        const items = listContainer.querySelectorAll('li.checked');
        listContainer.innerHTML = '';
        items.forEach(item => {
            listContainer.append(item);
        });
    });
}

function clearCompletedTasks() {
    let tasksRemoved = false;
    dayContainers.forEach(container => {
        const listContainer = container.querySelector('.list-container');
        const completedItems = listContainer.querySelectorAll('li.checked');
        if (completedItems.length > 0) {
            tasksRemoved = true;
            completedItems.forEach(item => {
                item.remove();
            });
            saveData();
        }
    });
    if (!tasksRemoved) {
        alert("There are no completed tasks to clear.");
    }
}

function setColumnHeadings() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    for (let i = 0; i < dayContainers.length; i++) {
        const dayElement = dayContainers[i];
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        const dayId = dayElement.id;
        const dayHeading = dayElement.querySelector('h3');
        dayHeading.textContent = day.toLocaleDateString('en-US', options);
    }
}


setColumnHeadings();

# To-Do List Application

This project is a web-based To-Do List application that helps you organize your tasks for each day of the week. You can add, edit, delete, and mark tasks as complete or incomplete. The application also allows you to view tasks by their status (all, active, or completed) and clear tasks as needed.

## Features

- **Add Tasks**: Add new tasks to your to-do list for each day.
- **Edit Tasks**: Edit the text of existing tasks.
- **Delete Tasks**: Remove tasks from your to-do list.
- **Mark Tasks as Complete**: Mark tasks as completed or uncompleted by clicking on them.
- **Filter Tasks**: View all tasks, only active tasks, or only completed tasks.
- **Clear Tasks**: Clear all tasks or only completed tasks.
- **Local Storage**: Tasks are saved in the browser's local storage, so they persist across sessions.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Getting Started

### Prerequisites

To run this project, you need a web browser that supports HTML, CSS, and JavaScript.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/todo-list.git
    ```
2. Navigate to the project directory:
    ```sh
    cd todo-list
    ```

### Usage

1. Open the `index.html` file in your web browser:
    ```sh
    open index.html
    ```

2. You can now start using the To-Do List application.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the application.
- `style.css`: The CSS file that contains styles for the application.
- `script.js`: The JavaScript file that contains the functionality of the application.
- `Images/`: The folder containing image assets used in the application.

## Functionality

### HTML Structure

- The main container holds the to-do list application.
- Each day of the week has its own container where tasks can be added.
- Buttons are provided to filter tasks and clear tasks.

### CSS Styles

- Responsive design with a clean, modern look.
- Styles for buttons, task items, and the overall layout.

### JavaScript

- `addTask()`: Adds a new task to the selected day's list.
- `saveData()`: Saves the current state of tasks to local storage.
- `showTask()`: Loads tasks from local storage when the application starts.
- `clearLocalStorage()`: Clears all tasks from local storage.
- `showAllTasks()`, `showActiveTasks()`, `showCompletedTasks()`: Functions to filter tasks based on their status.
- Event listeners for buttons to handle user interactions.

# To-Do List
A simple To-Do List application built using React and React Native that allows users to manage tasks efficiently. This app lets you create tasks, edit them, assign tags, delete tasks, and move tasks between different states such as "To-Do", "In Progress", and "Completed".

## Features
- Task Management: Add, edit, delete tasks
- Status Categories: Organize tasks into three main categories:
    - To-Do (Tasks that need to be done)
    - In Progress (Tasks that are currently being worked on)
    - Completed (Tasks that have been finished)
- Task Editing: Edit task titles
- Tagging: Assign different tags (e.g., Work, Personal, Family) to each task
- Persistent Storage: Tasks are saved to localStorage to persist between sessions
- Interactive UI: Simple and intuitive user interface with icons for task status changes.

## Technologies Used
- React: JavaScript library for building user interfaces
- React Hooks: State management using useState and useEffect hooks
- localStorage: For saving tasks data locally in the browser
- CSS: Custom styling for layout and task appearance

## Usage
1. Add a task:
    - Type the task in the input field and press "Add".
    - Choose a status for the task (To-Do, In Progress, or Completed).
    - Assign tags such as "Work", "Personal", or "Family".
2. Edit a task:
    - Click on the pencil icon next to any task to change its title.
3. Move a task:
    - Use the 📌 icon to move a task back to the "To-Do" category.
    - Use the ⚙️ icon to move a task to the "In Progress" category.
    - Use the ✔️ icon to mark a task as "Completed".
4. Delete a task:
    - Use the ❌ icon to delete a task.


# To-Do App

This is a simple To-Do application built with Angular that allows users to add, delete, and mark tasks as completed.

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Delete Tasks**: Users can delete tasks from the list.
- **Mark as Completed**: Users can mark tasks as completed, which will be displayed with a line-through style.
- **Data Sharing**: Data is shared between components using `@Input` and `@Output`.

## Components

- **ToDoWrapperComponent**: The parent component that manages the list of tasks.
- **ToDoFormComponent**: Handles the input for adding new tasks.
- **ToDoListComponent**: Displays the list of tasks and handles task deletion and completion.

## Install Dependencies:

To start a local development server, run:

```bash
npm install
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Run the Development Server:

```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

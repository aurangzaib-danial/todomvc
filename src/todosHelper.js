export function todosReducer(state, action) {
  switch (action.type) {
    case "create": {
      return [...state, action.todo];
    }
    case "updateStatus": {
      const newTodos = state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return newTodos;
    }
    case "destroy": {
      return state.filter(todo => todo.id !== action.id);
    }
    case "clearCompleted": {
      return state.filter(todo => !todo.isCompleted);
    }
    case "markAllComplete": {
      return state.map(t => {
        return {...t, isCompleted: true};
      });
    }
    case "markAllActive": {
      return state.map(t => {
        return {...t, isCompleted: false};
      });
    }
  }
}

export function activeCount(todos) {
  return todos.reduce((acc, todo) => todo.isCompleted ? acc : acc + 1, 0);
}

export function someCompleted(todos) {
  return todos.some(todo => todo.isCompleted);
}

export function filterTodos(todos, filter) {
  switch(filter) {
    case "All": return todos;
    case "Active": return todos.filter(t => !t.isCompleted);
    case "Completed": return todos.filter(t => t.isCompleted);
  }
}
import {
  ADD_TODO,
  COMPLETE_TODO,
  IS_EDITING,
  SAVE_NEW_TODO,
  DELETE_TODO,
  HIDE_COMPLETED,
} from '../types/index';

let prevTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
const initialState = [...prevTodos];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const updatedList = [...state, 
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          done: action.payload.done,
          isEditing: action.payload.isEditing,
        }
      ]
      localStorage.setItem('todos', JSON.stringify(updatedList));
      return updatedList;
      
    case COMPLETE_TODO:
      const completedTodo = state.indexOf(action.payload);
      const toggled = [...state];
      if (toggled[completedTodo] && toggled[completedTodo].done) {
        toggled[completedTodo].done = false;
      } else if (toggled[completedTodo] && !toggled[completedTodo].done) {
        toggled[completedTodo].done = true;
      }
      localStorage.setItem('todos', JSON.stringify(toggled));
      return toggled;

    case IS_EDITING:
      const toEdit = state.indexOf(action.payload);
      const edited = [...state];
      edited[toEdit].isEditing = true;
      localStorage.setItem('todos', JSON.stringify(edited));
      return edited;

    case SAVE_NEW_TODO:
      const toSave = state.findIndex(obj => obj.id === action.payload.id);
      const saved = [...state];
      saved[toSave] = action.payload;
      localStorage.setItem('todos', JSON.stringify(saved));
      return saved;
      
    case DELETE_TODO:
      const toRemove = state.indexOf(action.payload)
      let updated = [...state];
      updated.splice(toRemove, 1)
      localStorage.setItem('todos', JSON.stringify(updated));
      return updated;
    
    default: 
      return state;
  }
}

export const hideCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case HIDE_COMPLETED:
      return action.bool;

    default:
      return state;
  }
}
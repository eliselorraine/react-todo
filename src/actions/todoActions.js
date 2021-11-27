export const addTodo = payload => ({
  type: 'ADD_TODO',
  payload
});

export const completeTodo = payload => ({
  type: 'COMPLETE_TODO',
  payload
});

export const editTodo = payload => ({
  type: 'IS_EDITING',
  payload
});
  
export const deleteTodo = payload => ({
  type: 'DELETE_TODO',
  payload
});

export const saveTodo = payload => ({
  type: 'SAVE_NEW_TODO',
  payload,
})

export const hideCompleted = bool => ({
  type: 'HIDE_COMPLETED',
  bool,
})

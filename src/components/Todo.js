import React, { useState } from 'react';
import '../styles/Todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, saveTodo, completeTodo } from '../actions/todoActions';

const Todo = ({ obj }) => {
  const dispatch = useDispatch();
  const isHidden = useSelector(state => state.isHidden);
  const [newName, setNewName] = useState(obj.name);
  const [newDescription, setNewDescription] = useState(obj.description);
  
  const edit = (object) => {
    dispatch(editTodo(object));
    return;
  }

  const finishTodo = (object) => {
    dispatch(completeTodo(object));
    return;
  }

  const remove = (object) => {
    dispatch(deleteTodo(object));
    return;
  } 

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    return;
  }

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
    return;
  }

  const save = (object) => {
    const updatedTodo = {
      id: object.id,
      name: newName,
      description: newDescription,
      done: object.done,
      isEditing: false,
    }
    dispatch(saveTodo(updatedTodo));
    return updatedTodo;
  }

if (!obj.isEditing) {
  return (
    <div
    className={!obj.done ? 'todo__container' : 'todo__container done'}>
      <div onClick={() => finishTodo(obj)} 
           className="todo__container--text"
           hidden={obj.done && isHidden ? true : false}>
        <p className="todo__p--name">{obj.name}</p>
        {obj.description ? <p className="todo__p--description">{obj.description}</p> : ''}
      </div>
      <div hidden={obj.done && isHidden ? true : false} 
           className="todo__container--buttons">
        <button onClick={() => edit(obj)} className="todo__btn todo__btn--edit">Edit</button>
        <button onClick={() => remove(obj)} className="todo__btn todo__btn--remove" hidden={!obj.done ? true : false}>Remove</button>
      </div>
    </div>
  )
} else if (obj.isEditing) {
  return (
    <li className="todo__container">
      <input className="todo__edit todo__edit--name" type="text" onChange={handleNameChange} value={newName}></input>
      <input className="todo__edit todo__edit--description" type="text" onChange={handleDescriptionChange} value={newDescription}></input>
      <div className="todo__container--buttons">
      <button onClick={() => save(obj)} className="todo__btn todo__btn--save">Save</button>
      </div>
    </li>
  )
}
}

export default Todo;
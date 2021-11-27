import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import '../styles/Form.css'

const Form = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  
  const randomNumber = () => {
    return Math.floor(Math.random() * 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newTodo = {
        id: randomNumber(),
        name: name,
        description: description,
        done: false,
        isEditing: false
      }
      dispatch(addTodo(newTodo))
      setName('');
      setDescription('');
      return newTodo;
    }
    return;
  }

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label form__label--name"
          htmlFor="form__input--name">Add a new task:
          <p className="form__label--required" hidden={name ? true : false}>required</p>
        </label>
        <input className="form__input form__input--name"
          id="form__input--name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Add a new task..."
        />
        <label className="form__label form__label--description"
          htmlFor="form__input--description">Add a description:
        </label>
        <input className="form__input form__input--description"
          id="form__input--description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Add a description..."
        />
        <button className="form__button--submit"
          type="submit"
          onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default Form;

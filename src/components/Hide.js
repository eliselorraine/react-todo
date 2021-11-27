import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideCompleted } from '../actions/todoActions';
import '../styles/Hide.css';

const Hide = () => {
  const dispatch = useDispatch();
  const isHidden = useSelector(state => state.isHidden);
  
  const handleHide = () => {
    dispatch(hideCompleted(true));
  }

  const handleShow = () => {
    dispatch(hideCompleted(false));
  }

  if (!isHidden) {
    return (
      <div className="hide__container">
        <button 
          onClick={handleHide}
          className="hide__button hide__button--hide">
          Hide completed tasks</button>
      </div>
    )
  }
  return (
      <div className="hide__container">
        <button 
        onClick={handleShow}
        className="hide__button hide__button--show">
        Show completed tasks</button>
      </div>
  )

}

export default Hide;
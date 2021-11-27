import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo'
import Hide from './Hide'
import '../styles/List.css'

const List = () => {
  const list = useSelector(state => state.list);

  if (list.length) {
    return (
      <div className="list__container">
        <Hide />
        <ul className="list__ul">
          {list.map((obj) => {
            return (
              <li className={!obj.done ? '' : 'done'} key={obj.id}>
                <Todo obj={obj} />
              </li>
            )
          })
          }
        </ul>
      </div>
    )
  }
  return null;
}


export default List;
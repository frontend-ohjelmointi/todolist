import './TodoInput.css';
import React, { useState } from 'react';
import { ToDo } from './types';

interface Props {
  onValue: (todo: ToDo) => void;
}

function TodoInput({ onValue }: Props) {
  const [todo, setTodo] = useState({ date: "", desc: "" });

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => setTodo({ ...todo, [event.target.name]: event.target.value });

  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onValue(todo);
  }

  return (
    <form onSubmit={add}>
      <fieldset>
        <legend>Add todo:</legend>
        <label htmlFor='desc'>Description:</label>
        <input id='desc' type="text" required name="desc" value={todo.desc} onChange={inputChanged} />
        <label htmlFor='date'>Date:</label>
        <input id='date' type="date" required name="date" value={todo.date} onChange={inputChanged} />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
};

export default TodoInput;
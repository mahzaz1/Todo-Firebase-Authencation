import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Store/Slices/TodoSlice'; 
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';

function AddTodo() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (todoText.trim()) {
     
      dispatch(addTodo({ name: todoText }));
      setTodoText(''); 
      navigate('/'); 
    }
  };

  return (
    <div className='my-todo-list'>
      <h1>Add Your Todo</h1>
      <Input
        value={todoText}
        setValue={setTodoText}
        handlefunction={handleAddTodo}
        button={"Add"}
        placeholder={"Add your text here..."}
      />
    
    </div>
  );
}

export default AddTodo;

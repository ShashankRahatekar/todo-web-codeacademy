import React, {useState, useEffect} from 'react';
import './App.css';
import Home from '../components/Home';
import Weather from '../components/Weather';
import CreateTodo from "../components/CreateTodo";
import NavigationButon from '../components/Navigation';
import ListTodo from '../components/ListTodo';
import Quote from '../components/Quote';
import { fetchQuote } from '../data/data';

function App() {
  const [quotes, setQuote] = useState({message: '', author: ''})
  const [todos, setTodos] = useState([
    { 
      id: 1,
      title: 'Test Todo',
      status: 'active'
    }
  ])
  const [imageIndex, setImageIndex] = useState(0);

  const addTodo = (todo) => {
    setTodos(prevTodos => {
      return [...prevTodos, todo];
    })
  }

  const onClickDone = (id) => {
    // alert('Done ' + id);
    setTodos(prevTodos => prevTodos.map(todo => {
      if( todo.id === id ) {
        return {...todo, status: 'active' === todo.status? 'disabled': 'active'}
      }
      return todo;
    }))
  }

  const onClickRemove = (id) => {
    // alert('Remove ' + id);
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    fetchQuote().then((data) => {
      setQuote({
        message: data.contents.quotes[0].quote,
        author: data.contents.quotes[0].author
      })
    })
  }, [])

  const onClickSlide = () => {
    setImageIndex((Math.floor(Math.random() * 5)));
  }

  return (
    <div className="App">
      <Home imageIndex={imageIndex} />
      <Weather />
      <NavigationButon onClickSlide={onClickSlide} className='left-wallpaper-control wallpaper-control' label='Switch to previous wallpaper' sign='<' />
      <NavigationButon onClickSlide={onClickSlide} className='right-wallpaper-control wallpaper-control' label='Switch to next wallpaper' sign='>' />
      <main>
        <CreateTodo onSubmit={addTodo} currentIndex={todos.length} />
        <ListTodo todos={todos} onClickDone={(id) => onClickDone(id)} onClickRemove={(id) => onClickRemove(id)} />
		  </main>

      <Quote message={quotes.message} author={quotes.author} />
    </div>
  );
}

export default App;

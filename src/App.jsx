import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './actor'
import Singer from './Singer'
import Bookstore from './Bookstore'
import Book from './Book'

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150},
  ]

  const singers = [
    { id: 1, name: 'Dr. Mahfuzur', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 },
  ]


  return (
    <>
      <h1>Vite + React</h1>

      {/* bookstore part  */}

      <Bookstore books={books}></Bookstore>

      {/* actor part  */}

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* singer part */}

      {
        singers.map(singer => <Singer singer = {singer}></Singer>)
      }

      {/* <Todo task="learn React" */}
      {/* isDone={true}></Todo> */}
      {/* <Todo task="learn Angular" */}
      {/* isDone={false}></Todo> */}
      {/* <Todo task="learn Vue" */}
      {/* isDone={true}></Todo> */}

      {/* <Device name="laptop" price="55k"></Device>
      <Device name="mobile" price="25k"></Device>
      <Device name="watch" price="2k"></Device>
      <Person></Person>
      <Student grade="7" score="120"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return (
    <h5>This device name is {props.name} and price is {props.price}</h5>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 20 }
  return (
    <h3>My name is {person.name}. My age is {person.age}. My total asset {age + money}</h3>
  )
}

function Student({ grade = 1, score = 40 }) {
  // console.log({ grade, score });
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo</h5>
      <p>coding</p>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';

const App = () => {
    const [result, setResult] = useState('');
    const handleClick = (e) => {
        setResult(result + e.target.name);

    }
    const clear = () => {
        setResult('');
    }
    const backspace = () => {
        setResult(result.slice(0, -1)); //or result.length - 1
    }
    const calculate = () => {
        try{
            setResult(eval(result));
        }catch(e){
            setResult('Error!');
        }
        
    }
  return (
    <>
    <Router>
      <div>
        <nav>      
            <Link to="/" className='ref'>Home</Link>
            <Link to="/about"  className='ref'>About</Link>        
            <Link to="/contact"  className='ref'>Contact</Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
        <div className='container'>
            <form>
                <input type='text' value={result}></input>
            </form>
            <div className='keypad'>
                <button onClick={clear} id='clear'>Clear</button>
                <button onClick={backspace} id='backspace'>C</button>
                <button className='btn-primary' name='/' onClick={handleClick}>&divide;</button>
                <button name='7' onClick={handleClick}>7</button>
                <button name='8' onClick={handleClick}>8</button>
                <button name='9' onClick={handleClick}>9</button>
                <button className='btn-primary' name='*' onClick={handleClick}>&times;</button>
                <button name='4' onClick={handleClick}>4</button>
                <button name='5' onClick={handleClick}>5</button>
                <button name='6' onClick={handleClick}>6</button>
                <button className='btn-primary' name='-' onClick={handleClick}>&ndash;</button>
                <button name='1' onClick={handleClick}>1</button>
                <button name='2' onClick={handleClick}>2</button>
                <button name='3' onClick={handleClick}>3</button>
                <button className='btn-primary' name='+' onClick={handleClick}>+</button>
                <button name='0' onClick={handleClick}>0</button>
                <button name='.' onClick={handleClick}>.</button>
                <button className='btn-primary' onClick={calculate} id='result'>=</button>
            </div>
        </div>
    </>
  )
}

export default App
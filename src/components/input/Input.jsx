import React from 'react'
import searchImg from './../../assets/search-logo.png'
import styled from './input.module.css'

function Input(probs) {
  return (
    <div className={styled.container}>
        <input type="text" placeholder='Enter your city' name='input' ref={probs.link}/>
        <button onClick={probs.click}><img src={searchImg}/></button>
    </div>
  )
}

export default Input
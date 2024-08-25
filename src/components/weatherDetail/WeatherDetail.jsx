import React from 'react'
import styled from './weatherDetail.module.css'


function WeatherDetail(probs) {
  return (
    <div className={styled.container}>
        <img src={probs.imgSrc}/>
        <span>{probs.temp}</span>
    </div>
  )
}

export default WeatherDetail
// DO NOT DELETE

// import * as React from 'react'
import './App.css'
import React, { useState } from 'react';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl ,setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  
  const changeImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(
      (result) => {
        setDogUrl(result.message);
      },
      (error) => {
      }
    )
  };

  return (
    <div>
      <header>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} />
      <button type="button" onClick={changeImage}>更新</button>
    </div>
  )
}

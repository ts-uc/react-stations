// DO NOT DELETE

import React, { useState } from 'react'
import { DogImage } from './DogImage.js'


export const Description = () => {
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

    return(
        <div class="content1">
        <div class="explanation">
          <p>犬の画像を表示するサイトです</p>
        </div>
        <DogImage url={dogUrl} />
        <div class="image_button">
          <div>
            <button type="button" class="reloadbutton" onClick={changeImage}>更新</button>
          </div>
        </div>
      </div>
    );
}

// DO NOT DELETE

import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect.js'
import { DogImage } from './DogImage.js'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [dogUrls, setDogUrls] = useState({})
  const [selectedBreed, setSelectedBreed] = useState('')

  const handleChange = event => {
    setSelectedBreed(event.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success') {
          setBreeds(result.message)
        }
      })
  }, [])

  const changeImage = () => {
    if (selectedBreed != '') {
      fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12')
        .then(res => res.json())
        .then(result => {
          if (result.status === 'success') {
            setDogUrls(result.message)
          }
        })
    }
  }

  const dogImages = Object.values(dogUrls).map(src => (
    <div class="dogimage">
      <DogImage url={src} />
    </div>
  ))

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        handleChange={handleChange}
      />
      <button type="button" class="reloadbutton" onClick={changeImage}>
        表示
      </button>
      <div class="dogimagecontainer">{dogImages}</div>
    </>
  )
}

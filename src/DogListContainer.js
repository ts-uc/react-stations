// DO NOT DELETE

import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect.js'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
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
  return (
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      handleChange={handleChange}
    />
  )
}

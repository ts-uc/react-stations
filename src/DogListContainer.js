// DO NOT DELETE

import React, { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success') {
          setBreeds(result.message)
        }
      })
  }, [])
  return ''
}

// DO NOT DELETE

import React, { useState } from 'react'

export const BreedsSelect = props => {
  const breeds = props.breeds
  const selectedBreed = props.selectedBreed
  const handleChange = props.handleChange
  const breedsItems = Object.keys(breeds).map(breeds => (
    <option value={breeds}>{breeds}</option>
  ))
  return (
    <>
      <label for="breed-select">Breeds list:</label>

      <select value={selectedBreed} onChange={handleChange}>
        <option value="">Select</option>
        {breedsItems}
      </select>
    </>
  )
}

// DO NOT DELETE

// import * as React from 'react'
import './App.css'
import * as React from 'react'
import { Header } from './Header.js'
import { Description } from './Description.js'
import { DogListContainer } from './DogListContainer.js'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <body>
      <Header />
      <Description />
      <hr />
      <DogListContainer />
    </body>
  )
}

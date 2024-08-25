import React from 'react'
import Card from '../card/card'
function Home() {
  return (
    <div>
      <h1 className='text-center text-4xl m-8 font-extrabold'>Home page</h1>
      <Card text={'Home Card'} heading='Card 1'/>
    </div>
  )
}

export default Home

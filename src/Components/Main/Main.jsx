import React from 'react'
import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'

const Main = () => {
  return (
    <div className='flex min-h-[100vh] justify-start items-center'>
        <ImageContainer />
        <TextContainer />
    </div>
  )
}

export default Main
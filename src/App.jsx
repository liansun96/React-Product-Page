import React from 'react'
import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'
import CountingProvider from './store/CountingProvider'


const App = () => {
  return (
    <CountingProvider>
      <div className='w-[80%] mx-auto min-h-[100vh]'>
        <Nav/>
        <Main/>
     </div>
    </CountingProvider>
  )
}

export default App
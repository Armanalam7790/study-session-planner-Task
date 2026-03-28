import React from 'react'
import SeassionForm from './components/SeassionForm'
import SeassionList from './components/SeassionList'
import SeassionCard from './components/SeassionCard'

const App = () => {
  
  return (
    <div className='h-screen w-screen bg-[#262624] flex  gap-40 justify-center' >

        <div>
          <SeassionForm />
        </div>

        <div>
      <SeassionList />
     
        </div>
    </div>
  )
}

export default App
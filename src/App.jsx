import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FakeStoreCard from './component/FakeStoreCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <Routes>
      {/* props used to pass values  */}
      <Route path='/u' element={<FakeStoreCard/>} />
     </Routes>
    </>
  )
}

export default App

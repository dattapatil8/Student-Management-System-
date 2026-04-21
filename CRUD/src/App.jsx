import { Routes,Route,Link } from 'react-router'
import { DisplayData } from './DisplayData'
import { AddNewData } from './AddNewData'

function App() {
 

  return (
    <>
     <div className='text-2xl text-center'>
     <Link className="" to='/'>Display data</Link>
     <Link className="pl-8" to='/add'>Adding data</Link>
     </div>
     
      <Routes>
        <Route path='/'element={<DisplayData/>}/>
        <Route path='/add'element={<AddNewData/>}/>
      </Routes>
    
    </>
  )
}

export default App

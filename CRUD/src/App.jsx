import { Routes,Route,Link } from 'react-router'
import { DisplayData } from './DisplayData'
import { AddNewData } from './AddNewData'
import { EditData } from './EditData'

function App() {
 

  return (
    <>
     <div className='text-2xl text-center mt-15 flex'>
      <div className="bg-amber-600  w-50 h-10 rounded-2xl hover:bg-amber-800 cursor-pointer ml-100">
     <Link  to='/'>Display data</Link>
     </div>
     <div className="bg-amber-600  w-50 h-10 rounded-2xl hover:bg-amber-800 cursor-pointer ml-14">
     <Link  to='/add'>Adding data</Link>
     </div>
     </div>
     
      <Routes>
        <Route path='/'element={<DisplayData/>}/>
        <Route path='/add'element={<AddNewData/>}/>
        <Route path='/edit/:id'element={<EditData />}/>
      </Routes>
    
    </>
  )
}

export default App

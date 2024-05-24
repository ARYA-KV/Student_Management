
import { Routes,Route} from 'react-router-dom'
import './App.css'
import Add from './components/Add'
import View from './components/View'
import Landing from './components/Landing'
import Header from './components/Header'

function App() {
  

  return (
    <>
    <Header />

     
      <Routes>
        <Route element={<Landing />} path='/' />  {/*1st page  */}
        <Route element={<Add />} path='/Add' />

        <Route element={<View />} path='/View' />



      </Routes>
      </>
  )
}

export default App

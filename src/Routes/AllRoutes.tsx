import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbaord from "../pages/Dashboard"
import Draggable from "../pages/Draggable"
import Forms from "../pages/Forms"


const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Dashbaord/>}/>
            <Route path='/draggable' element= {<Draggable/>} />
            <Route path='/forms' element= {<Forms/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
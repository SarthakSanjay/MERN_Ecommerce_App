import { Route, Routes } from "react-router-dom"
import '../src/App.css'
import Add from "./Add"
import All from "./All"


const Products = () => {
  return (
    <div className="products">
    
   
    <Routes>
    <Route path="/all" element={<All />} />
        <Route path="/addProducts" element={<Add />} />
      </Routes>
    </div>
  )
}

export default Products
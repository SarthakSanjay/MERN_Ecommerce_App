import ProductItems from "./ProductItems"
import '../src/App.css'
const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
const All = () => {
  return (
    <>
     {arr.map((items)=>{
        return <ProductItems /> 
    })}
    </>
    
  )
}

export default All
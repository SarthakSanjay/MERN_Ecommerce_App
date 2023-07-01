import ProductItems from "./ProductItems"
const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
const All = () => {
  return (
    <div>
     {arr.map((items)=>{
        return <ProductItems /> 
    })}
    </div>
    
  )
}

export default All
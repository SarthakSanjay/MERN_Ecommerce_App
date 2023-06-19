import ProductItems from "./ProductItems"
const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]

const Products = () => {
  return (
    <div className="products">
    
    {arr.map((items)=>{
        return <ProductItems /> 
    })}
    </div>
  )
}

export default Products
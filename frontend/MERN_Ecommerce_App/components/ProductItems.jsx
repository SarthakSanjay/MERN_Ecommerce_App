
const ProductItems = (props) => {
  let {productName, price, companyName,rating,image} = props

  let productStyle = {
    display:'flex',
    'flex-direction':'column',
    height:'300px',
    width:'170px',

  }
  return (
    <div className="pro-items" style={productStyle}>
    <img src={image} />
    <div className="pro-details">
    <p>{productName}</p>
    <p>{price}</p>
    <p>{companyName}</p>
    <p>{rating}</p>

    </div>
    </div>
  )
}

export default ProductItems
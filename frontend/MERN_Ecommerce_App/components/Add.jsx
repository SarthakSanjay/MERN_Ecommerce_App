import { useState } from "react";
const Add = () => {
  const [product,setProduct] = useState({
    productName:"",
    price:"",
    companyName:"",
    rating:"",
    image:""
  })
  let name , value ;

  const handleFormInput = (e) =>{
    name = e.target.name
    value = e.target.value
    setProduct({...product,[name]:value})
  }

  const postProduct = async(e) =>{
    e.preventDefault()
    const {productName,price,companyName,rating,image} = product
    const res = await fetch('http://localhost:3000/product/newProduct',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        productName,price,companyName,rating,image
      })
    })
    const data = await res.json()

  }


  let formStyle = {

    height: '100%',
    width: '100%',
    color: '#ec4c56',
    display: 'flex',
    'flexDirection': 'column',
    // padding:'200px 300px',
    justifyContent: 'center',
    alignItems: 'center',
    'backgroundColor': "#242933"
  }
  let divStyle = {
    display: 'flex',
    width: "400px",
    justifyContent: 'space-between'
    , margin: '4px 0px'
  }
  let inputStyle = {
    backgroundColor: "#596172",
    border: 'none',
    outline: 'none',
    width: '200px',
    height: '30px'
  }
  let btnStyle = { height: '30px', 
  width: '150px',
   backgroundColor: '#ec4c56',
    color: "#000",
     border: 'none',
      fontSize: "24px",
       margin: '10px auto',
        borderRadius: '10px',
         cursor: 'pointer'
         }
  // const innerForm
  return (

    <form method="POST" style={formStyle}>
      <div style={divStyle}>
        <label>Product name </label>
        <input style={inputStyle} name="productName" value={product.productName} onChange={handleFormInput}/>
      </div>
      <div style={divStyle}>
        <label>Price</label>
        <input style={inputStyle} name="price" value={product.price} onChange={handleFormInput} />

      </div>
      <div style={divStyle}>
        <label>Company Name </label>
        <input style={inputStyle} name="companyName" value={product.companyName} onChange={handleFormInput}/>

      </div>
      <div style={divStyle}>
        <label>Rating</label>
        <input style={inputStyle} name="rating"value={product.rating} onChange={handleFormInput} />

      </div>
      <div style={divStyle}>
        <label>Image URL</label>
        <input style={inputStyle} name="image" value={product.image} onChange={handleFormInput}/>

      </div>

      <input type="submit" value="Add product" style={btnStyle} onClick={postProduct} />
    </form>
  )
}

export default Add
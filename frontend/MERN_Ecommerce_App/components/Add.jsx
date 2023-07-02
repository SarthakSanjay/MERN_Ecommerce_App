
const Add = () => {
  let formStyle = {
    
    height: '100%',
    width: '100%',
    color:'#ec4c56',
    display:'flex',
    'flex-direction':'column',
    // padding:'200px 300px',
    justifyContent:'center',
    alignItems:'center',
    'background-color':"#242933"
  }

  return (
    
    <form style={formStyle}>
    <div style={{display:'flex', width:"400px",justifyContent:'space-between',margin:'4px 0px'}}>
        <label>Product name </label>
        <input  style={{backgroundColor:"#596172" , border:'none',outline:'none',width:'200px',height:'30px'}} />
    </div>
    <div style={{display:'flex', width:"400px",justifyContent:'space-between',margin:'4px 0px'}}>
        <label>Price</label>
         <input  style={{backgroundColor:"#596172" , border:'none',outline:'none',width:'200px',height:'30px'}} />

    </div>
    <div style={{display:'flex', width:"400px",justifyContent:'space-between',margin:'4px 0px'}}>
        <label>Company Name </label>
         <input  style={{backgroundColor:"#596172" , border:'none',outline:'none',width:'200px',height:'30px'}} />

    </div>
    <div style={{display:'flex', width:"400px",justifyContent:'space-between',margin:'4px 0px'}}>
        <label>Rating</label>
         <input  style={{backgroundColor:"#596172" , border:'none',outline:'none',width:'200px',height:'30px'}} />

    </div>

        <input type="submit" value="Add product" style={{height:'30px' , width:'150px' ,backgroundColor:'#ec4c56' ,color:"#000", border:'none', fontSize:"24px" , margin:'10px auto',borderRadius:'10px',cursor:'pointer'}} />
    </form>
  )
}

export default Add
import React, { useState, useEffect } from 'react';
import ProductItems from './ProductItems';
import '../src/App.css';
// import { log } from 'console';

const All = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchData = async () => {
      
         await fetch('http://localhost:3000/product')
         .then((response) => response.json()) // Parse the JSON response manually
         .then((data) => {
         setData(data.data);
         setLoading(false);
         console.log(data.data)
         })
       .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
    }
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data.map((product) => {
        console.log(product)
        let {_id,productName , price, companyName , rating,image} = product
        return <ProductItems
        key={_id}
        productName={productName}
        price={price}
        companyName={companyName}
        rating={rating}
        image={image}

        />
       })}
    </>
  );
};

export default All;

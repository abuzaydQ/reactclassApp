import React from 'react'

function Product() { 
    
    
    let products = [{
    id: 1,
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/650244/1.jpg?9148",
    product:"Shoe",
    price:25,
   },
{
   id:2,
   img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/233407/1.jpg?7491",
   product:"clipper",
   price:65,
},
   {
       id:3,
       img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/006717/1.jpg?8465",
       product: "home theater",
       price:150,

}
]


  return (
    <div>Product
        <h3>Welcome to our store</h3>
        {
            products.map((value, index) => {
                const {img, product, price } = value;
                return(
                    <Items key={index} img={img} product={product} price={price}/>
                )
            })
        }

    </div>
  )
}
    function Items (props) {
        const {img, product, price} = props

        return(
            <>
               <p><img src={img} alt="" style={{ width:"100px", height:"100px"}} ></img></p>
               <p>{product}</p>
               <p>${price}</p> 
            </>
        )

    }

export default Product
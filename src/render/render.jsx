function Render(){
    const products = [
    { id: 1, name: "Nike Shoes", price: 2999 },
    { id: 2, name: "Adidas T-Shirt", price: 1499 },
    { id: 3, name: "Puma Jacket", price: 3499 },
    { id: 4, name: "Reebok Shorts", price: 999 },
    { id: 5, name: "Under Armour Cap", price: 799 },
    { id: 6, name: "New Balance Socks", price: 499 },
    { id: 7, name: "Asics Running Shoes", price: 3999 },
    { id: 8, name: "Fila Backpack", price: 1999 },
    { id: 9, name: "Skechers Sandals", price: 1299 },
    { id: 10, name: "Converse Sneakers", price: 2499 },
    { id: 11, name: "Converse Sneakers", price: 2499 },
    { id: 12, name: "Converse Sneakers", price: 2499 },
    { id: 13, name: "Converse Sneakers", price: 2499 },
    { id: 14, name: "Converse Sneakers", price: 2499 },
    { id: 15, name: "Converse Sneakers", price: 2499 },
    { id: 16, name: "Converse Sneakers", price: 2499 }
  ];
    return(
        <div>
            <ol>
                {
                    products.map((product)=>(
                        <li key={product.id}>{product.name},{product.price}</li>
                    ))
                }
            </ol>
            {

                products.map((product)=>(
                     <div  key={product.id}style={{
                "border":"3px solid black",
                "height":"200px",
                "width":"300px",
                "borderRadius":"10px",
                "marginLeft":"30px",
                "background":"red",
                "marginBottom":"20px"
            }}>
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <button>Add to cart</button>
                <button>BUY</button>
                </div>
                ))
            }

            <table border="1">
                <tr>
                    <th>Prodct id</th>
                    <th>Prodct Name</th>
                    <th>Price</th>
                    <th>Add to cart</th>
                </tr>

                {
                    products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button>Add to cart</button></td>
                        </tr>
                    ))
                }
                
            </table>
            
        </div>
    );
}

export default Render;
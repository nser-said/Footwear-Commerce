
import ProductItem from "../components/ProductItem";
const Productlist = ({productList}) => {


    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
           
            
{productList.map((product) => (
  <div key={product.id}>
    <ProductItem  product={product} />

  </div>
    
  
))}

        
            

   
        </div>
    );
}

export default Productlist;



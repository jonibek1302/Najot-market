import useProducts from "../Hooks/useProducts";
import PlaceholderCars from "./PlaceholderCars";
import ProductList from "./ProductList";
import useDebounce from './../Hooks/useDeobunce';



const Products = () => {
  const [products, loading] = useProducts();


const logger = useDebounce(function (e){
 const searchValue = e.target.value;
  console.log(searchValue);
},300);
  return (
    <div className="container">

      <div className=" mt-3 mb-3">
        <form className="d-flex w-100 " role="search">
          <input
          onChange={logger}
            className="form-control me-2 w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
         
        </form>
      </div>

      {loading ? <PlaceholderCars />  :<ProductList products={products} />}
    </div>
  );
};

export default Products;

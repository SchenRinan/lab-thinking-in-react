import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);
    const searchItem = event => {
        const copyArray = [...jsonData];
        let filteredArray;
        filteredArray = copyArray.filter(item => item.name.includes(event.target.value));
        setProducts(filteredArray);
    }
    const ifAvailable = event => {
        const copyArray = [...jsonData];
        let filteredArray;
        if(event.target.checked){
            filteredArray = copyArray.filter(item => item.inStock);
        }
        else{filteredArray = copyArray;}
        setProducts(filteredArray);
    }
    return (
        <main>
            <h1>Iron Store</h1>
            <SearchBar products={ products } searchItem = { searchItem } ifAvailable = { ifAvailable }/>
            <ProductTable products={ products }/>
        </main>
    );
}
 
export default ProductsPage;
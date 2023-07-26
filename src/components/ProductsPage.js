import { useState } from 'react';

import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);
    const [checkStock, setstock] = useState(false);
    const [rememberInput, setInput] = useState('')

    const searchItem = event => {
        const copyArray = [...jsonData];
        setInput(event.target.value.toLowerCase());
        checkStock ?
        setProducts(copyArray.filter(item => item.name.toLowerCase().includes(event.target.value) && item.inStock))
            :
        setProducts(copyArray.filter(item => item.name.toLowerCase().includes(event.target.value)));
    }

    const ifAvailable = event => {
        const copyArray = [...jsonData];
        let filteredArray;

        if(event.target.checked){
            setstock(true);
            filteredArray = copyArray.filter(item => item.name.toLowerCase().includes(rememberInput) && item.inStock);
        }
        else{
            setstock(false);
            filteredArray = copyArray.filter(item => item.name.toLowerCase().includes(rememberInput));
        }
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


const SearchBar = props => {

    return ( 
        <header>
            <input type="search" name="findProduct" id="" onChange={ props.searchItem } />
            <input type="checkbox" name="inStock" id="" onChange={ props.ifAvailable }/>
            <span>Only show products in stock</span>
        </header>
    );
}
 
export default SearchBar;
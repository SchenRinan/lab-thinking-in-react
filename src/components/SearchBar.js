const SearchBar = props => {

    return ( 
        <header>
            <label htmlFor="searchfield">Search</label>
            <input type="search" name="findProduct" id="searchfield" onChange={ props.searchItem } />
            <div>
                <input type="checkbox" name="inStock" id="" onChange={ props.ifAvailable }/>
                <span>Only show products in stock</span>
            </div>
        </header>
    );
}
 
export default SearchBar;
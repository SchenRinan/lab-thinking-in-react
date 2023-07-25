import ProductRow from './ProductRow';

const ProductTable = props => {
    return ( 
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { props.products.map(item => <ProductRow key = {item.id} singleItem = {item} /> )} 
                </tbody>
            </table>
        </main>
    );
}
 
export default ProductTable;
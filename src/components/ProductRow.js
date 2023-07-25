const ProductRow = props => {
    return ( 
        <tr>
            <td>{ props.singleItem.inStock ? <em>{props.singleItem.name}</em> : props.singleItem.name }</td> {/* temporary fix */}
            <td>{ props.singleItem.price }</td>
        </tr>
    );
}
 
export default ProductRow;
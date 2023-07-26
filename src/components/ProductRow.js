const ProductRow = props => {
    return ( 
        <tr>
            { props.singleItem.inStock ? <th>{props.singleItem.name}</th> : <td> {props.singleItem.name} </td> } {/* temporary fix */}
            <td>{ props.singleItem.price }</td>
        </tr>
    );
}
 
export default ProductRow;
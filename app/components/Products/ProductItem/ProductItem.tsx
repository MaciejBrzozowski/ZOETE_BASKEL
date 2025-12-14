export default function ProductItem(props: any) {
  return (
    <tr className="table_row">
      <td>
        <img className="product_image" src={props.image} alt="product picture" />
      </td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
    </tr>
  );
}

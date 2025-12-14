export default function ProductItem(props: any) {
  return (
    <tr className="table_row">
      <td>
        <img className="product_image" src="./public/kruszonka.png" alt="Niby Szarlotka" />
      </td>
      <td>Polish Apple Pie (Szarlotka)</td>
      <td>Traditional Polish apple pie with cinnamon and a buttery crust.</td>
      <td>{props.price}</td>
    </tr>
  );
}

const generateTableRow = function (rowData) {
  const prices = []
  rowData.prices.forEach(price => {
    prices.push(`<li>${price}</li>`)
  })

  return `<tr class="table_row">
          <td>
            <img
              class="product_image"
              src="${rowData.image}"
              alt="${rowData.description}"
            />
          </td>
          <td>${rowData.name}</td>
          <td>
            <ul>
            ${prices.join('\n')}
            </ul>
          </td>
        </tr>`
}

axios
  .get(
    'https://raw.githubusercontent.com/ZoeteBaksel/-ZOETE_BAKSEL_CONFIG-/refs/heads/master/products.json'
  )
  .then(function (response) {
    if (response.status == 200) {
      const tableProducts = []
      const products = response.data.products
      products.forEach(product => {
        tableProducts.push(generateTableRow(product))
        document.getElementById('products_table_main').innerHTML =
          tableProducts.join('\n')
      })
    } else {
      document.getElementById('products_table_main').innerHTML =
        'Er is een fout opgetreden. Probeer de pagina opnieuw te laden.'
    }
  })

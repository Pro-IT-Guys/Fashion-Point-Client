export function getProductCountByCategory(products, categoryName) {
  try {
    return products.filter(product => product.category === categoryName).length
  } catch (error) {
    console.log(error)
  }
}

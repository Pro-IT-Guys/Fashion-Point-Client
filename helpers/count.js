export const getProductCountByCategory = (products, categoryName) => {
  try {
    return products.filter(product => product.category === categoryName).length
  } catch (error) {
    console.log(error)
  }
}

export const getOrderCountByCategory = (orders, categoryName) => {
  return orders.reduce((count, order) => {
    const orderItemCount = order.orderItems.filter(
      item => item.product.category === categoryName
    ).length
    return count + orderItemCount
  }, 0)
}

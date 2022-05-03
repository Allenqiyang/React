function formatPrice(price) {
  if(typeof price !== 'number') {
    price = parseFloat(price) || 0;
  }

  return "￥" + price.toFixed(2)
}
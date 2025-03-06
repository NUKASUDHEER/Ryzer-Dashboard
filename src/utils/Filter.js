const filterProducts = (productlist, filters) => { 
    return productlist.filter(product => { 
        const maxPrice =
          filters.maxPrice === "80000+" ? Infinity : Number(filters.maxPrice);
        const inPriceRange =
          product.price >= filters.minPrice && product.price <= maxPrice;
        const matchesQuery = filters.query
            ? product.name.toLowerCase().includes(filters.query.toLowerCase())
            : true;
        if (filters.status.available && filters.status.soldOut) {
            return inPriceRange && matchesQuery
        }
        const isAvailable = filters.status.available ? product.stock > 0 : true;
        const isSoldOut = filters.status.soldOut ? product.stock === 0 : true;
        return inPriceRange && isAvailable && isSoldOut && matchesQuery;
    })
}

const filterProductsBySeachQuery = (products, sQuery) => {
  if (!sQuery.trim()) return products;
  return products.filter((product) => {
    const query = sQuery.toLowerCase();
    return Object.values(product).some(value=> String(value).toLowerCase().includes(query))
  });
};


export { filterProducts ,filterProductsBySeachQuery};
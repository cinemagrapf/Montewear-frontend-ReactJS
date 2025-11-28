export const products = [
  ...Array.from({ length: 200 }, (_, index) => {
    const i = index + 1;

    const categories = ['Men', 'Women', 'Kid'];
    const brands = ['Stussy', 'Supreme', 'Acronym', 'Nike', 'Gap', 'Levis', 'Uniqlo'];
    const materials = ['cotton', 'polyester', 'wool', 'silk', 'denim', 'linen', 'leather'];
    const styles = [
      'streetwear',
      'techwear',
      'casual',
      'steampunk',
      'formal',
      'sporty',
      'vintage',
      'minimalist',
    ];
    const colors = ['black', 'white', 'gray', 'blue', 'red', 'green', 'yellow', 'pink', 'beige'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const price = Number((20 + ((i * 1.73) % 200)).toFixed(2));

    // Every 5rd product has oldPrice
    let oldPrice;
    if (i % 4 === 0) {
      const increasePercent = 25 + 1.2 * 20;
      oldPrice = Number((price * (1 + increasePercent / 100)).toFixed(2));
    }

    return {
      id: i.toString().padStart(3, '0'),
      img: 'https://placehold.co/250x250',
      productName: `Product ${i}`,
      price,

      ...(oldPrice ? { oldPrice } : {}), // only add oldPrice if defined

      sizes: [sizes[i % 6], sizes[(i + 2) % 6], sizes[(i + 4) % 6]],
      colors: [colors[i % 9], colors[(i * 2) % 9]],
      category: categories[i % 3],
      brand: brands[i % 7],
      material: materials[i % 7],
      style: styles[i % 8],
    };
  }),
];

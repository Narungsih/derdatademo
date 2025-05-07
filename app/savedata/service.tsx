export const ProductService = {
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Dataset 1',
        description: 'Dataset Description',
      },
    ];
  },
  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};

export const ProductService = {
  getDataSets() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Dataset 1',
        description: 'Dataset Description',
      },
      {
        id: '1001',
        code: 'f230fh0g4',
        name: 'Dataset 2',
        description: 'Dataset Description',
      },
      {
        id: '1002',
        code: 'f230fh0g5',
        name: 'Dataset 3',
        description: 'Dataset Description',
      },
      {
        id: '1003',
        code: 'f230fh0g6',
        name: 'Dataset 4',
        description: 'Dataset Description',
      },
      {
        id: '1004',
        code: 'f230fh0g7',
        name: 'Dataset 5',
        description: 'Dataset Description',
      },
    ];
  },
  getDataSetsMin() {
    return Promise.resolve(this.getDataSets().slice(0, 5));
  },
};

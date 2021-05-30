export interface IproductList {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  price: number;
  listPrice: number;
  installments: {
    quantity: number,
    value: number,
  }[]
}

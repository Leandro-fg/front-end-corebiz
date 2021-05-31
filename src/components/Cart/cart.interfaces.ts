export interface ICart {
  open: boolean;
  setOpen: Function;
}
export interface IproductListCart {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  price: number;
  listPrice: number;
  quantity: number;
  installments: {
    quantity: number,
    value: number,
  }[]
}

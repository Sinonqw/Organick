export interface IProduct {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
  itemVariants?: any
  description?: string;
}

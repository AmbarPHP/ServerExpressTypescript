export interface IProductCategory{
  
    id: string;
    name: string;
    subcategories: Subcategory[];
   
}
export interface Subcategory{
    id:number;
    name:string;
}
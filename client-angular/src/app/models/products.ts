export class ProductsModel {

    constructor(
        public id: number,
        public name: string,
        public price: number,
        public brand: string,
        public model: string,
        public image: string,
        public details: any,
        public createdAt: string,
        public updatedAt: string,
        public deletedAt: null,
        public categoryName: string,
        public discountName: string,
        public inventoryId: number,
        public inventory: any
    ) {}
}
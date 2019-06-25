import APIDataModel from "./APIModel.js";

class Product extends APIDataModel{
    constructor(
        product_id,
        product_name,
        product_desc,
        product_price,
        product_image_one,
        product_image_two,
        product_image_three){
            super();
            this.product_id = product_id;
            this.product_name = product_name;
            this.product_desc = product_desc;
            this.product_price = product_price;
            this.product_image_one = product_image_one;
            this.product_image_two = product_image_two;
            this.product_image_three = product_image_three;
        }

        updateData(data){
            this.product_id = product_id;
            this.product_name = product_name;
            this.product_desc = product_desc;
            this.product_price = product_price;
            this.product_image_one = product_image_one;
            this.product_image_two = product_image_two;
            this.product_image_three = product_image_three;

            return this;
        }
}

export default Product;
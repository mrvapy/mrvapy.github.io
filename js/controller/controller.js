import ProductListModel from '/js/models/ProductListModel.js';
import ProductItemModel from '/js/models/ProductItemModel.js';

import ProductListView from '/js/views/ProductListView.js';


class Controller{
    constructor(){
        // this.productItemModel = new ProductItemModel();
        this.productListModel = new ProductListModel();
        this.productListView = new ProductListView();
        this.productObjects = [];
    }

    init(){
        console.log("fjeoieo");
        this.productListModel.fetchAllProduct()
            .then((data) => {
                
                for(const obj of data){
                    
                }
                this.getAllProductData(data);
                this.displayProductList(data);
            }).then((data) => {
                console.log(data)
            })
        // this.productListModel.fetchAllProduct()
        //     .then(data => this.getAllProductData(data))
        //     .then(data => this.displayProductList(data));
    }


    displayProductList(productObjects){
        const templates = [];
        for(let productObj of Object.values(productObjects)){
            console.log("tested 1"+productObj.product_image_one);
            templates.push(this.productListView.getItemTemplate(productObj));
        }

        this.productListView.render(templates);
    }


    getAllProductData(data){
        this.productObjects = [];
        for(let product of Object.values(data)){
            const productObj = new ProductItemModel(
                product.product_id,
                product.product_name,
                product.product_desc,
                product.product_price,
                product.product_image_one,
                product.product_image_two,
                product.product_image_three
            )

            this.productObjects.push(productObj);

            return this.productObjects;
        }
    }
}

export default Controller;
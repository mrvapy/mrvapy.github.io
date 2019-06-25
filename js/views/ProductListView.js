class ProductListView{
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("product-info-template").innerHTML;
        this.sviewport = document.getElementById("sviewport");
    }


    // getItemTemplate(object){
    //     let templates = [];
    //     // console.log("getObjType"+ object.product_image_one)
    //     for(const productObj in Object(object)){
    //         console.log("getItemTemplate test"+productObj.product_image_one);
    //         const result = this.itemTemplate
    //             .replace("{{this.product_image_one}}", productObj.product_image_one)
    //             .replace("{{this.product_image_two}}", productObj.product_image_two)
    //             .replace("{{this.product_price}}", productObj.product_price)
    //             .replace("{{this.product_name}}", productObj.product_name);

    //             templates.push(result);

    //     }

    //     return templates;
    // }

    getItemTemplate(productObj){
        const result = this.itemTemplate
                .replace("{{this.product_image_one}}", productObj.product_image_one)
                .replace("{{this.product_image_two}}", productObj.product_image_two)
                .replace("{{this.product_price}}", productObj.product_price)
                .replace("{{this.product_id}}", productObj.product_id)
                .replace("{{this.product_desc}}", productObj.product_desc)
                .replace("{{this.product_image_three}}", productObj.product_image_three)
                .replace("{{this.product_name}}", productObj.product_name)
                .replace("{{para.product_image_one}}", productObj.product_image_one)
                .replace("{{para.product_image_two}}", productObj.product_image_two)
                .replace("{{para.product_price}}", productObj.product_price)
                .replace("{{para.product_id}}", productObj.product_id)
                .replace("{{para.product_desc}}", productObj.product_desc)
                .replace("{{para.product_image_three}}", productObj.product_image_three)
                .replace("{{para.product_name}}", productObj.product_name);
        return result;
    }


    render(templates){
        this.sviewport.innerHTML = "";
        for(let template of templates){
            console.log(template)
            this.sviewport.innerHTML += template;
        }
    }

}

export default ProductListView;
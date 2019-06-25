import APIDataModel from "./APIModel.js";

class ProductListModel extends APIDataModel{

    getAllProductUrl(){
        return this.rootURL + this.allProducts;
    }

    fetchAllProduct(){
        return fetch(this.getAllProductUrl())
        .then(function(response){
            
            return response.json();
        }).then(function(json){
            console.log(json);
            return Object.values(json);
        })
    }

    // fetchAllBooks(){
    //     return fetch(this.getAllBooksUrl())
    //     .then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         return data.results
    //     });
        
    // }
}

export default ProductListModel;
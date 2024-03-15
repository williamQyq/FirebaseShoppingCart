import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
import firestore from './MyFirebase.js';

export class ProductsService {
    constructor() {
        this.productsRef = collection(firestore, "Products").withConverter(productConverter);
    }
    /**
     * get Products
     * @returns Product[]
     * 
     */
    async getProducts() {
        let products = [];
        try {
            const querySnapshot = await getDocs(this.productsRef);
            products = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            //sort by createdTime
            products.sort((a, b) => b.createdTime - a.createdTime);
            console.log("getProducts() res: ", products);
        } catch (error) {
            console.error("Error getting products: ", error);
            alert("Error getting products: " + error);
        }

        return products;
    }
    /**
     * add Product
     * @param {Product} product 
     */
    async addProduct(product) {
        if (!(product instanceof Product)) {
            console.error("Invalid product");
            return;
        }
        try {
            console.log("addProduct() product: ", product.toString());
            const res = await addDoc(this.productsRef, product);
            console.log("addProduct() res: ", res.id);
        } catch (error) {
            console.error("Error adding product: ", error);
            alert("Error adding product: " + error);
        }
    }
    /**
     * Delete product
     * @param {id} productId 
     */
    async removeProduct(productId) {
        try {
            const toBeDeletedDoc = doc(this.productsRef, productId);
            await deleteDoc(toBeDeletedDoc);
            console.log("Product removed: ", productId);
        } catch (error) {
            console.error("Error removing product: ", error);
            alert("Error removing product: " + error);
        }
    }
    /**
     * updateProduct
     * @param {id} productId 
     * @param {Product} product 
     */
    async updateProduct(productId, product) {
        try {
            const toBeUpdatedDoc = doc(this.productsRef, productId);
            await updateDoc(toBeUpdatedDoc, product);
            console.log("Product updated: ", product.toString());
        } catch (error) {
            console.error("Error updating product: ", error);
            alert("Error updating product: " + error);
        }
    }
}

export class Product {
    constructor({ id, name, price, image, createdTime = Timestamp.now().toMillis() } = {}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.createdTime = createdTime;
    }
    toString() {
        return `${this.name} - $${this.price} - ${this.createdTime}`;
    }
}

const productConverter = {
    toFirestore: function (product) {
        return {
            name: product.name,
            price: product.price,
            image: product.image,
            createdTime: product.createdTime
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Product({
            id: snapshot.id,
            name: data.name,
            price: data.price,
            image: data.image,
            createdTime: data.createdTime
        });
    },
};

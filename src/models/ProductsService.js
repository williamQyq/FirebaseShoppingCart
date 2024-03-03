import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebase from './MyFirebase.js';

class ProductsService {
    constructor() {
        this.db = getFirestore(firebase);
        this.productsRef = collection(this.db, "Products");
    }
    async getProducts() {
        const querySnapshot = await getDocs(this.productsRef);
        const data = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return data;
    }
}

export default ProductsService;
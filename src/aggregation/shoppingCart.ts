// eg. 购物车

// 商品类
class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number
    ) {}
}

class ShoppingCart {
    private products: Product[] = [];

    // 添加商品到购物车
    addProduct(product: Product) {
        this.products.push(product);
        console.log(`添加商品${product['name']}到购物车`);
    }

    // 删除商品从购物车
    removeProduct(productId: string) {
        this.products = this.products.filter(p => p['id'] !== productId);
        console.log(`从购物车删除商品ID为${productId}的商品`);
    }

    // 清空购物车，但商品对象依然存在
    clearCart() {
        this.products = [];
        console.log('购物车已清空');
    }
}


// 使用
const product1 = new Product('1', 'Laptop', 999);
const product2 = new Product('2', 'Mouse', 29);

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);

cart.clearCart(); // 购物车清空，但product1和product2依然存在
console.log(product1.name); // 依然可访问
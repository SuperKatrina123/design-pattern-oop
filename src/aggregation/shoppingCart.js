// eg. 购物车
// 商品类
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.products = [];
    }
    // 添加商品到购物车
    ShoppingCart.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log("\u6DFB\u52A0\u5546\u54C1".concat(product['name'], "\u5230\u8D2D\u7269\u8F66"));
    };
    // 删除商品从购物车
    ShoppingCart.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (p) { return p['id'] !== productId; });
        console.log("\u4ECE\u8D2D\u7269\u8F66\u5220\u9664\u5546\u54C1ID\u4E3A".concat(productId, "\u7684\u5546\u54C1"));
    };
    // 清空购物车，但商品对象依然存在
    ShoppingCart.prototype.clearCart = function () {
        this.products = [];
        console.log('购物车已清空');
    };
    return ShoppingCart;
}());
// 使用
var product1 = new Product('1', 'Laptop', 999);
var product2 = new Product('2', 'Mouse', 29);
var cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.clearCart(); // 购物车清空，但product1和product2依然存在
console.log(product1.name); // 依然可访问

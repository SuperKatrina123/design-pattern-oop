/**
 * 想象你在做菜：
 * - 你需要用刀切菜（临时使用刀的“切”的功能）
 * - 切完菜，刀就放回去了
 * - 你不拥有这把刀，只是临时借用了一下
*/
var Chef = /** @class */ (function () {
    function Chef() {
    }
    // Chef依赖Knife, 临时使用Knife的cut功能
    Chef.prototype.cookDish = function (knife, vegetable) {
        knife.cut(vegetable); // 使用knife的"切"功能
        // 方法结束，knife就没用了
    };
    return Chef;
}());
var Knife = /** @class */ (function () {
    function Knife() {
    }
    Knife.prototype.cut = function (item) {
        console.log("\u5207".concat(item));
    };
    return Knife;
}());
var chef = new Chef();
var knife = new Knife();
chef.cookDish(knife, '胡萝卜'); // 切胡萝卜

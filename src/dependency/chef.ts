/**
 * 想象你在做菜：
 * - 你需要用刀切菜（临时使用刀的“切”的功能）
 * - 切完菜，刀就放回去了
 * - 你不拥有这把刀，只是临时借用了一下
*/

class Chef {
    // Chef依赖Knife, 临时使用Knife的cut功能
    cookDish (knife: Knife, vegetable: string) {
        knife.cut(vegetable); // 使用knife的"切"功能
        // 方法结束，knife就没用了
    }
}


class Knife {
    cut (item: string) {
        console.log(`切${item}`);
    }
}

const chef = new Chef();
const knife = new Knife();
chef.cookDish(knife, '胡萝卜'); // 切胡萝卜
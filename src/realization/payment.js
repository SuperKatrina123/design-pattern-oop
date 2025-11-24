var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 实现一个具体的支付网关类，例如PayPal
var PayPalPaymentGateWay = /** @class */ (function () {
    function PayPalPaymentGateWay() {
    }
    PayPalPaymentGateWay.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("\u901A\u8FC7PayPal\u5904\u7406\u652F\u4ED8\uFF0C\u91D1\u989D\uFF1A".concat(amount));
                // 模拟支付处理逻辑
                return [2 /*return*/, true];
            });
        });
    };
    PayPalPaymentGateWay.prototype.refund = function (orderId) {
        console.log("\u901A\u8FC7PayPal\u5904\u7406\u9000\u6B3E\uFF0C\u8BA2\u5355ID\uFF1A".concat(orderId));
        // 模拟退款处理逻辑
        return Promise.resolve();
    };
    PayPalPaymentGateWay.prototype.getBalance = function () {
        console.log('获取PayPal账户余额');
        // 模拟获取余额逻辑
        return Promise.resolve(1000);
    };
    return PayPalPaymentGateWay;
}());
// 实现一个具体的支付网关类，例如Alipay
var AlipayPaymentGateWay = /** @class */ (function () {
    function AlipayPaymentGateWay() {
    }
    AlipayPaymentGateWay.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("\u901A\u8FC7Alipay\u5904\u7406\u652F\u4ED8\uFF0C\u91D1\u989D\uFF1A".concat(amount));
                // 模拟支付处理逻辑
                return [2 /*return*/, true];
            });
        });
    };
    AlipayPaymentGateWay.prototype.refund = function (orderId) {
        console.log("\u901A\u8FC7Alipay\u5904\u7406\u9000\u6B3E\uFF0C\u8BA2\u5355ID\uFF1A".concat(orderId));
        // 模拟退款处理逻辑
        return Promise.resolve();
    };
    AlipayPaymentGateWay.prototype.getBalance = function () {
        console.log('获取Alipay账户余额');
        // 模拟获取余额逻辑
        return Promise.resolve(2000);
    };
    AlipayPaymentGateWay.prototype.huabeiPay = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("\u901A\u8FC7Alipay\u82B1\u5457\u652F\u4ED8\uFF0C\u91D1\u989D\uFF1A".concat(amount));
                // 模拟花呗支付处理逻辑
                return [2 /*return*/, true];
            });
        });
    };
    return AlipayPaymentGateWay;
}());
var paypalGateWay = new PayPalPaymentGateWay();
var alipayGateWay = new AlipayPaymentGateWay();
paypalGateWay.processPayment(150); // 通过PayPal处理支付，金额：150 支付成功
alipayGateWay.processPayment(250); // 通过Alipay处理支付，金额：250 支付成功
alipayGateWay.huabeiPay(300); // 通过Alipay花呗支付，金额：300

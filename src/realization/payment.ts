// 定义一个PaymentGateWay接口
interface PaymentGateWay {
    processPayment(amount: number): Promise<boolean>;
    refund(orderId: string): Promise<void>;
    getBalance(): Promise<number>;
}

// 实现一个具体的支付网关类，例如PayPal
class PayPalPaymentGateWay implements PaymentGateWay {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`通过PayPal处理支付，金额：${amount}`);
        // 模拟支付处理逻辑
        return true;
    }

    refund(orderId: string): Promise<void> {
        console.log(`通过PayPal处理退款，订单ID：${orderId}`);
        // 模拟退款处理逻辑
        return Promise.resolve();
    }

    getBalance(): Promise<number> {
        console.log('获取PayPal账户余额');
        // 模拟获取余额逻辑
        return Promise.resolve(1000);
    }
}

// 定义一个alipay特殊的花呗支付接口
interface HuabeiPaymentGateWay {
    huabeiPay(amount: number): Promise<boolean>;
}

// 实现一个具体的支付网关类，例如Alipay
class AlipayPaymentGateWay implements PaymentGateWay, HuabeiPaymentGateWay {
    async processPayment(amount: number): Promise<boolean> {
        console.log(`通过Alipay处理支付，金额：${amount}`);
        // 模拟支付处理逻辑
        return true;
    }

    refund(orderId: string): Promise<void> {
        console.log(`通过Alipay处理退款，订单ID：${orderId}`);
        // 模拟退款处理逻辑
        return Promise.resolve();
    }

    getBalance(): Promise<number> {
        console.log('获取Alipay账户余额');
        // 模拟获取余额逻辑
        return Promise.resolve(2000);
    }

    async huabeiPay(amount: number): Promise<boolean> {
        console.log(`通过Alipay花呗支付，金额：${amount}`);
        // 模拟花呗支付处理逻辑
        return true;
    }
}

const paypalGateWay = new PayPalPaymentGateWay();
const alipayGateWay = new AlipayPaymentGateWay();

paypalGateWay.processPayment(150); // 通过PayPal处理支付，金额：150
alipayGateWay.processPayment(250); // 通过Alipay处理支付，金额：250
alipayGateWay.huabeiPay(300); // 通过Alipay花呗支付，金额：300
// eg. 发送邮件
// 负责发送邮件的服务类
class EmailService {
    send(email: string, content: string) {
        console.log(`发送邮件给${email}：${content}`);
    }
}

// 用户类
class User {
    constructor(public email: string) {}
}

// 依赖举例
class UserControllerWithDependency {
    // 注册用户
    registerUser(user: User, emailService: EmailService) {
        // 每次注册都要传入EmailService实例
        emailService.send(user.email, 'Welcome'); // 使用EmailService发送邮件
    }

    // 重置密码
    resetPassword(user: User, emailService: EmailService) {
        // 这里又传一次
        emailService.send(user.email, 'Reset your password'); // 使用EmailService发送邮件
    }

    notify(user: User, message: string, emailService: EmailService) {
        // 这里再传一次
        emailService.send(user.email, message); // 使用EmailService发送通知
    }
}

const user1 = new User('8888888@163.com');
const emailService1 = new EmailService();
const userController1 = new UserControllerWithDependency();
userController1.registerUser(user1, emailService1); // 注册成功，发送欢迎邮件
userController1.resetPassword(user1, emailService1); // 重置密码，发送重置邮件
userController1.notify(user1, 'Your profile has been updated', emailService1); // 发送通知邮件


// 关联举例
class UserController {
    private emailService: EmailService; // 持有引用

    constructor(emailService: EmailService) {
        this.emailService = new EmailService(); // 通过构造函数注入
    }

    // 注册用户
    registerUser(user: User) {
        // 直接使用
        this.emailService.send(user.email, 'Welcome'); // 使用EmailService发送邮件
    }

    // 重置密码
    resetPassword(user: User) {
        // 直接使用
        this.emailService.send(user.email, 'Reset your password'); // 使用EmailService发送邮件
    }

    notify(user: User, message: string) {
        // 直接使用
        this.emailService.send(user.email, message); // 使用EmailService发送通知
    }
}


const user = new User('12345678@163.com');
const emailService = new EmailService();
const userController = new UserController(emailService);

userController.registerUser(user); // 注册成功，发送欢迎邮件
userController.resetPassword(user); // 重置密码，发送重置邮件
userController.notify(user, 'Your profile has been updated'); // 发送通知邮件

// 理解：不管理被关联对象的生命周期
let controller1: UserController | null = new UserController(emailService);
let controller2: UserController | null = new UserController(emailService); // 可以共享

controller1 = null; // controller1销毁
// ✅ emailService依然存在，controller2还能用
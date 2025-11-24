// eg. 发送邮件
// 负责发送邮件的服务类
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.send = function (email, content) {
        console.log("\u53D1\u9001\u90AE\u4EF6\u7ED9".concat(email, "\uFF1A").concat(content));
    };
    return EmailService;
}());
// 用户类
var User = /** @class */ (function () {
    function User(email) {
        this.email = email;
    }
    return User;
}());
// 依赖举例
var UserControllerWithDependency = /** @class */ (function () {
    function UserControllerWithDependency() {
    }
    // 注册用户
    UserControllerWithDependency.prototype.registerUser = function (user, emailService) {
        // 每次注册都要传入EmailService实例
        emailService.send(user.email, 'Welcome'); // 使用EmailService发送邮件
    };
    // 重置密码
    UserControllerWithDependency.prototype.resetPassword = function (user, emailService) {
        // 这里又传一次
        emailService.send(user.email, 'Reset your password'); // 使用EmailService发送邮件
    };
    UserControllerWithDependency.prototype.notify = function (user, message, emailService) {
        // 这里再传一次
        emailService.send(user.email, message); // 使用EmailService发送通知
    };
    return UserControllerWithDependency;
}());
var user1 = new User('8888888@163.com');
var emailService1 = new EmailService();
var userController1 = new UserControllerWithDependency();
userController1.registerUser(user1, emailService1); // 注册成功，发送欢迎邮件
userController1.resetPassword(user1, emailService1); // 重置密码，发送重置邮件
userController1.notify(user1, 'Your profile has been updated', emailService1); // 发送通知邮件
// 关联举例
var UserController = /** @class */ (function () {
    function UserController(emailService) {
        this.emailService = new EmailService(); // 通过构造函数注入
    }
    // 注册用户
    UserController.prototype.registerUser = function (user) {
        // 直接使用
        this.emailService.send(user.email, 'Welcome'); // 使用EmailService发送邮件
    };
    // 重置密码
    UserController.prototype.resetPassword = function (user) {
        // 直接使用
        this.emailService.send(user.email, 'Reset your password'); // 使用EmailService发送邮件
    };
    UserController.prototype.notify = function (user, message) {
        // 直接使用
        this.emailService.send(user.email, message); // 使用EmailService发送通知
    };
    return UserController;
}());
var user = new User('12345678@163.com');
var emailService = new EmailService();
var userController = new UserController(emailService);
userController.registerUser(user); // 注册成功，发送欢迎邮件
userController.resetPassword(user); // 重置密码，发送重置邮件
userController.notify(user, 'Your profile has been updated'); // 发送通知邮件
// 理解：不管理被关联对象的生命周期
var controller1 = new UserController(emailService);
var controller2 = new UserController(emailService); // 可以共享
controller1 = null; // controller1销毁
// ✅ emailService依然存在，controller2还能用

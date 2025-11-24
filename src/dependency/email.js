// eg. 发送邮件时临时使用格式化工具
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.sendEmail = function (recipient, content, formatter) {
        var formattedContent = formatter.format(content); // 使用格式化功能
        console.log("\u53D1\u9001\u90AE\u4EF6\u7ED9".concat(recipient, "\uFF1A").concat(formattedContent));
        // 方法结束，formatter就没用了
    };
    return EmailSender;
}());
var EmailFormatter = /** @class */ (function () {
    function EmailFormatter() {
    }
    EmailFormatter.prototype.format = function (emailContent) {
        return "<html><body>".concat(emailContent, "</html></body>"); // 简单的格式化示例
    };
    return EmailFormatter;
}());
var emailSender = new EmailSender();
var emailFormatter = new EmailFormatter();
emailSender.sendEmail('katrina', 'hello world', emailFormatter); // 发送邮件给katrina：<html><body>hello world</html></body>

// eg. 发送邮件时临时使用格式化工具
class EmailSender {
    sendEmail(recipient: string, content: string, formatter: EmailFormatter) {
        const formattedContent = formatter.format(content); // 使用格式化功能
        console.log(`发送邮件给${recipient}：${formattedContent}`);
        // 方法结束，formatter就没用了
    }
}


class EmailFormatter {
    format(emailContent: string): string {
        return `<html><body>${emailContent}</html></body>`; // 简单的格式化示例
    }
}

const emailSender = new EmailSender();
const emailFormatter = new EmailFormatter();
emailSender.sendEmail('katrina', 'hello world', emailFormatter); // 发送邮件给katrina：<html><body>hello world</html></body>
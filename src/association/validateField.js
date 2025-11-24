var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.validateField = function (field, value) {
        console.log("\u9A8C\u8BC1\u5B57\u6BB5".concat(field, "\u7684\u503C").concat(value));
        // 简单示例，实际可包含复杂逻辑
        return true;
    };
    Validator.prototype.validate = function (data) {
        console.log('验证整个表单数据', data);
        return true;
    };
    return Validator;
}());
var FormHandler = /** @class */ (function () {
    function FormHandler(validator) {
        this.validator = validator;
    }
    FormHandler.prototype.getFieldValue = function (field) {
        return field.valueOf();
    };
    FormHandler.prototype.onInputChange = function (field, value) {
        // 输入时验证
        this.validator.validateField(field, value);
    };
    FormHandler.prototype.onBlur = function (field) {
        // 失焦时验证
        this.validator.validateField(field, this.getFieldValue(field));
    };
    FormHandler.prototype.submitForm = function (data) {
        // 提交时验证
        if (this.validator.validate(data)) {
            // 提交数据
        }
    };
    return FormHandler;
}());
// 使用
var validator = new Validator();
var formHandler = new FormHandler(validator);
formHandler.onInputChange('email', '123@qq.com'); // 验证字段email的值
formHandler.onBlur('email'); // 验证字段email的值       
formHandler.submitForm({ email: '888@123.com' }); // 验证整个表单数据

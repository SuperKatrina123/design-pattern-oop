// eg. 表单字段验证
// 使用自定义的表单数据类型，避免与 DOM 的 FormData 冲突
interface FormValues {
  [key: string]: any;
}

class Validator {
  validateField(field: string, value: any): boolean {
    console.log(`验证字段${field}的值${value}`);
    // 简单示例，实际可包含复杂逻辑
    return true;
  }

  validate(data: FormValues): boolean {
    console.log('验证整个表单数据', data);
    return true;
  }
}

class FormHandler {
  private validator: Validator; // 持有validator
  
  constructor(validator: Validator) {
    this.validator = validator;
  }

  getFieldValue(field: string): string {
    return field.valueOf();
  }
  
  onInputChange(field: string, value: any) {
    // 输入时验证
    this.validator.validateField(field, value);
  }
  
  onBlur(field: string) {
    // 失焦时验证
    this.validator.validateField(field, this.getFieldValue(field));
  }
  
  submitForm(data: FormValues) {
    // 提交时验证
    if (this.validator.validate(data)) {
      // 提交数据
    }
  }
}

// 使用
const validator = new Validator();
const formHandler = new FormHandler(validator);
formHandler.onInputChange('email', '123@qq.com'); // 验证字段email的值
formHandler.onBlur('email'); // 验证字段email的值       
formHandler.submitForm({ email: '888@123.com'} as FormValues); // 验证整个表单数据
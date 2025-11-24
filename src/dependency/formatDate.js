// eg. 组件使用工具函数
// 工具类提供“格式化日期”的功能
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.formatDate = function (date) {
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        return "".concat(year, "-").concat(month, "-").concat(day);
    };
    return DateUtils;
}());
function UserProfile(_a) {
    var name = _a.name, birthDate = _a.birthDate;
    // 组件临时使用DateUtils的formatDate功能
    var formattedDate = DateUtils.formatDate(birthDate); // 使用格式化功能
    return "\n        <div>\n            <h1>".concat(name, "</h1>\n            <p>\u51FA\u751F\u65E5\u671F: ").concat(formattedDate, "</p>\n        </div>\n    ");
}
// 使用UserProfile组件
var userProfileHTML = UserProfile({ name: '张三', birthDate: new Date(1990, 5, 15) });
console.log(userProfileHTML);

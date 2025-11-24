// eg. 组件使用工具函数

// 工具类提供“格式化日期”的功能
class DateUtils {
    static formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}

function UserProfile({ name, birthDate }: { name: string; birthDate: Date }) {
    // 组件临时使用DateUtils的formatDate功能
    const formattedDate = DateUtils.formatDate(birthDate); // 使用格式化功能

    return `
        <div>
            <h1>${name}</h1>
            <p>出生日期: ${formattedDate}</p>
        </div>
    `;
}

// 使用UserProfile组件
const userProfileHTML = UserProfile({ name: '张三', birthDate: new Date(1990, 5, 15) });
console.log(userProfileHTML);
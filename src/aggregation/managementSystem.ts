// eg. 团队管理系统
class Employee {
    constructor(
        public id: string,
        public name: string,
        public position: string
    ) {}
}

class Team {
    private members: Employee[] = [];

    // 添加成员到团队
    addMember(employee: Employee) {
        this.members.push(employee);
        console.log(`添加成员${employee['name']}到团队`);
    }

    // 移除成员从团队
    removeMember(employeeId: string) {
        this.members = this.members.filter(m => m['id'] !== employeeId);
        console.log(`从团队移除成员ID为${employeeId}的成员`);
    }

    getMembers(): Employee[] {
        return this.members;
    }
}

// 员工可以同时属于多个团队
const alice = new Employee('1', 'Alice', 'Developer');
const bob = new Employee('2', 'Bob', 'Designer');

const frontendTeam = new Team();
frontendTeam.addMember(alice);
frontendTeam.addMember(bob);

const projectXTeam = new Team();
projectXTeam.addMember(alice); // Alice 同时属于 frontendTeam 和 projectXTeam

console.log('Frontend Team Members:', frontendTeam.getMembers().map(m => m['name'])); // 输出: ['Alice', 'Bob']
console.log('Project X Team Members:', projectXTeam.getMembers().map(m => m['name'])); // 输出: ['Alice']
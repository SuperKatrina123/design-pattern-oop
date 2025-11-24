// eg. 团队管理系统
var Employee = /** @class */ (function () {
    function Employee(id, name, position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
    return Employee;
}());
var Team = /** @class */ (function () {
    function Team() {
        this.members = [];
    }
    // 添加成员到团队
    Team.prototype.addMember = function (employee) {
        this.members.push(employee);
        console.log("\u6DFB\u52A0\u6210\u5458".concat(employee['name'], "\u5230\u56E2\u961F"));
    };
    // 移除成员从团队
    Team.prototype.removeMember = function (employeeId) {
        this.members = this.members.filter(function (m) { return m['id'] !== employeeId; });
        console.log("\u4ECE\u56E2\u961F\u79FB\u9664\u6210\u5458ID\u4E3A".concat(employeeId, "\u7684\u6210\u5458"));
    };
    Team.prototype.getMembers = function () {
        return this.members;
    };
    return Team;
}());
// 员工可以同时属于多个团队
var alice = new Employee('1', 'Alice', 'Developer');
var bob = new Employee('2', 'Bob', 'Designer');
var frontendTeam = new Team();
frontendTeam.addMember(alice);
frontendTeam.addMember(bob);
var projectXTeam = new Team();
projectXTeam.addMember(alice); // Alice 同时属于 frontendTeam 和 projectXTeam
console.log('Frontend Team Members:', frontendTeam.getMembers().map(function (m) { return m['name']; })); // 输出: ['Alice', 'Bob']
console.log('Project X Team Members:', projectXTeam.getMembers().map(function (m) { return m['name']; })); // 输出: ['Alice']

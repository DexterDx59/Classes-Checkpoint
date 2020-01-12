// Test it on browser's console  
// Node.js version 10 does not support some class features. It needs webpack
class Human {
    name;
    job;
    skills;
    constructor(name, job, skills) {
        this.name = name;
        this.job = job;
        this.skills = skills;
    }
}

class Student extends Human {
    constructor(name, job, skills) {
        super(name, job, skills);
    }
    getJob(newJob) {
        this.job = newJob;
    }
    leaveJob() {
        this.job = '...';
    }
    learnNewSkill(newSkill) {
        this.skills.push(newSkill)
    }
    forgetSkill(skill) {
        this.skills = this.skills.filter((item) => (item !== skill))
    }
}

const person = new Student('Kacem Youssef', 'developer', ['React']);

console.log('name::', person.name)
console.log(person.job)
console.log(person.skills)

person.getJob('');
console.log(person.job)

person.leaveJob()
console.log(person.job)

console.log(person.skills)
person.learnNewSkill('React')
person.learnNewSkill('Node.js')
console.log(person.skills)

person.forgetSkill('')
console.log(person.skills)
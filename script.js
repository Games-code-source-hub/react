class School {
    constructor(number = 0, city = "") {
        this.city = city;
        this.number = number;

    }

    getInfo() {
        console.log("School number " + this.number + " in " + this.city + ".");
    }
}

class Employee extends School {
    constructor(name = "", job="", number, city) {
        super(number, city)
        this.name = name;
        this.job = job;
    }

    getEmp() {
        console.log("It's " + this.name + ". He is a(an) " + this.job);
    }
}

class Group extends School {
    constructor(group = "", spec = "", number, city) {
        super(number, city)
        this.group = group;
        this.spec = spec; //Тут имеется в виду на чём специализируется группа 
    }

    getGroup() {
        console.log(this.group + " is a group specializing on a(an)" + this.spec);
    }
}

class Student extends Group {
    constructor(name="", mark=0, group, spec) {
        super(group, spec)
        this.name = name;
        this.mark = mark;
    }

    getStudent() {
        console.log("Student's name is " + this.name + ". He has " + this.mark + " in fourth quarter."); //quater же четверть?
    }
}

const Grisha = new Student (name="Grisha",mark=2)
Grisha.getStudent();
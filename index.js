//find(callback,value)

const students=[
    {
        id:101,
        gpa:3.45
    },
    {
      id: 102,
      gpa:3.50
    },
    {
     id:103,
     gpa:2.5
    },
    {
     id:104,
     gpa:5.00
    }
]
console.log(students.find((x)=>x.id))
console.log(students.find(x=>x.gpa));
console.log(students.findIndex((x)=>x.gpa));

const message="This is Friday";
console.log(message.startsWith('This'));
console.log(message.endsWith('Friday'));
console.log(message.endsWith('is'));
console.log(message.includes('is'));


class Student{
    constructor(SystemId,Name,Profession,University,degree){
        this.SystemId=SystemId;
        this.name=this.Name;
        this.Profession=Profession;
        this.University=University;
        this.degree=degree;
    }
    set newStudentName(name){
        this.name=name;
    }
    get StudentsInformation(){
        return(
            this.SystemId+" "+this.name+" "+this.Profession+" "+this.University+" "+this.degree
        )
    }
}

var profile1=new Student(2019005005,'Abu Al Shahriar Rifat','Software Enginner','Sharda University','BSC in IT');
var profile2=new Student(201973636,'Kifayet Nauajesh Keya','Nursing','Bogura Nursing Institure','BSC in Nursing');
console.log(profile1);
console.log(profile2)
profile1.newStudentName='Akash Khan'
console.log(profile1);
console.log(students.find((x)=>x.id));
console.log('The index is',students.findIndex((x)=>x.gpa));
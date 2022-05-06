class EmployeePayRolldata
{

get id(){
    return this._id;
}
set id(id)
{
    this._id=id;
}
get name(){
    return this._name;
}
set name(name){
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name))
    this._name=name;
    else throw 'Name is incorrect!';
    
}
get gender(){
    return this._gender;
}
set gender(gender)
{
    this._gender=gender;
}
get profilepic(){
    return this._profilepic;
}
set profilepic(profilepic)
{
    this._profilepic=profilepic;
}
get note(){
    return this._note;
}
set note(note)
{
    this._note=note;
}
get dapartment(){
    return this._depoartment;
}
set department(department)
{
    this._department=department;
}
get startDate(){
    return this._startDate;
}
set note(startDate)
{
    this._startDate=startDate;
}
get salary(){
    return this._salary;
}
set note(salary)
{
    this._salary=salary;
}
toString()
{
    const options={year:'nemeric',month:'long',day:'numeric'};
        const empDate=!this.startDate?"undefined":
        this.startDate.tolocaleDateString("en-US",options);

    return "id=" +this.id+", name="+this.name+",gender="+this.gender+
        ",profilepic=" +this.profilepic+",department="+this.department+
        ",salary="+this.salary +",startDate="+empDate +",note"+this.note;
    }
}
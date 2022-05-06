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
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.text-error'); 
    name.addEventListener('input', function() { 
    if (name.value. length == 0) { 
    textError.textContent = "";   
    return;
    } 
    try {
     (new EmployeePayrollData()).name = name.value;
      textError.textContent ="";
    } 
    catch (e) {
    textError.textContent=e;
    }
    });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('salary-output'); 
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
    output.textContent = salary.value;
    });
});

const save=()=> {
    try {
        let EmployeePayrollData=createEmployeePayroll();
    }catch(e){
        return;
    }
}
    function createAndUpdateStorage (employeePayrollData) {
    let employeePayrollList= JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    } else{
    employeePayrollList=[employeePayrollData]
    } 
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify (employeePayrollList))
    }

const createEmployeePayroll=()=>{
    let EmployeePayrollData = new EmployeePayrollData();
    try{
        EmployeePayrollData.name = getInputById=(id)
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profilepic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues ('[name=department]'); 
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note=getInputById('#notes');
    let date = getInputById('#day') +" " +getInputById('#month') +" "
    +getInputById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
 const getInputById = (id) =>{
     let value = doucument.querySelector(id).value;
     return value;
 }
const  getSelectedValues = (propertyValue) => {

    let allItems=doucument.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item =>{
        if(item.checked) selItems.push(item.value);

    });
    return selItems;
}
/* Reset Form*/
const resetForm = () =>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]'); 
    unsetSelectedValues ( '[name=gender]');
    unsetSelectedValues ( '[name-department]');
    setValue('#salary',  ''); 
    setValue('#notes','');
    setValue('#day', '1');
    setValue( '#month', 'January');
    setValue('#year', '2020'); 
}

const unsetSelectedValues= (propertyValue) => {
    let allItems = document.querySelectorAll (propertyValue); 
    allItems.forEach(item => {item. checked = false;
});

const setTextValue =(id, value)=>{
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value)=> { 
    const element = document.querySelector(id)
    element.value= value;
}
//Remove Contact
const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if (!empPayrollData) return;
    const index = empPayrollList
                 .map(empData => empData._id)
                .indexOf(empPayrollData._id);
    empPayrollList.splice (index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify (empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
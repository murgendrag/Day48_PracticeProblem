
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
function createAndUpdateStorage(employeePayRollData)
{
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayRollList"));

    if(employeePayrollList!=undefined)
    {
        employeePayrollList.push(employeePayRollData)
    }
    else{
        employeePayrollList=[employeePayRollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayRollList",JSON.stringify(employeePayrollList))

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

const unsetSelectedValues= (propertyValue) =>{
    let allItems = document.querySelectorAll (propertyValue); 
    allItems.forEach(item => {item. checked = false;
    });
}

const setTextValue =(id, value)=>{
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value)=> { 
    const element = document.querySelector(id)
    element.value= value;
}

let isUpdate = false;
let employeePayrollObj ={};

windows.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0) {
            textError.textContent ="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent = e;
        }
    })


    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
    output.textContent = salary.value;
    checkForUpdate();
});
});

const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}

const setForm=() => {
    setValue('#name',employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._profilePic); 
    setSelectedValues ( '[name=gender]',employeePayrollObj._gender);
    setSelectedValues ( '[name-department]',employeePayrollObj._department);
    setValue('#salary',employeePayrollObj._note); 
    setValue('#notes',employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day', date[0]);
    setValue( '#month', date[1]);
    setValue('#year', date[2]); 
}

const setSelectedValues = (propertyValue,value) => {
    let allItems= document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if (item.value === value)
        item.checked = true;
    });
}
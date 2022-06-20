// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "NY"
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmp = {...obj };
    newEmp[key] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key){
    const newKey = {...obj};
    delete newKey[key];
    return newKey;
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;

}
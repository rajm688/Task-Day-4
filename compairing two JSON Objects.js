var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let a  =JSON.stringify(obj1) 
let b =JSON.stringify(obj2)
if (a ==b){
    console.log("same");
}
else{
    console.log("different");
}
//or we can use this method also

console.log(_.isEqual(obj1,obj2))

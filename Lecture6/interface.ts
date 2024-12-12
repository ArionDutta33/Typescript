console.log("This is interface file");
// there is readonly property in interface which is not allowed in class
//interface to interface uses extends keyword class to inteface uses implements keyword , multiple intefaces can be extended using extends keyword by interface
// interface for function
interface greetFunction{
    name?:string//optional
    greetSomeone(name:string):void
}
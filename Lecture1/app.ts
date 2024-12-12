//basics are number, string and boolean

function add(num1: number, num2: number, printResult: boolean,someText:string) {
    if (printResult) {
        console.log('Print result is true ',num1 + num2);
    } else {
        console.log(`Print result is false ${someText}`);
        return num1 + num2;
    }

}
const n1 = 20;//number
const n2 = 30;//number
const printResult = false;//boolean

const stringText="Some string"
add(n1, n2,printResult,stringText);
 
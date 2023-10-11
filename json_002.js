//JSON 데이터를 다루기위한 JS 사용 방법


//[1]: 데이터
const person = [
   {"name":"홍길동","age":20,"nationality":"대한민국"},
    {"name":"이순신","age":30,"nationality":"미국"},
    {"name":"강감찬","age":40,"nationality":"영국"},
    {"name":"을지문덕","age":50,"nationality":"프랑스"},

];

console.log(typeof person[0]);    //string
console.log(typeof person[1]);    //object

//[2] : 출력
console.log('-----------------------------------------------------------');
console.log(person[0].name+"" + person[0].age +"" + person[0].nationality);

//[3]: 반복
console.log('-------------------------------------------- 전개 연산자');
console.log(...person); //전개 연산자 
console.log({...person});

const str1 ="korea";
console.log([...str1]);  //__proto__ -->Array 
console.log({...str1});  //__proto__ -->Object 

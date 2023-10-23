// 중첩된 json 데이터 다루기
//한권의 도서 정보를 갖고 있는 JSON 데이터에 해당 도서가 속해있는 카테고리를 출력하시오.

const book ={

    "isbn":"123-456-789",
    "author":{
        "name":"홍길동",
        "email":"hong@hongkildong.com"
    },
    "editor":{
        "name":"이순신",
        "email":"lee@leesoonsin.com"
    },
    "title":"대한민국의 정의는 죽었는가?",
    "category":["Non-Fiction","IT","Politics"]
}

console.log(book["author"].name);   //홍길동 
console.log(book["editor"].name);   //이순신
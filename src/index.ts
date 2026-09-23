//console.log('Happy developing ✨')
/*
    => 변수
        let name (X) => 전역변수 사용하고 있다

        TypeScript : 가독성
        ------------------- 유지보수가 편리
        1) 동작 순서
        2) 데이터형
        3) 핵심 용어
        4) React 연동
        정의 : JavaScript에 데이터형(Type) 문법을 추가한 언어
            => 데이터형 정의
            let a=10
            let a:number=10
                 ----------

        동작 순서
            JavaScript
                 |
            TypeScript
                 |
            데이터형 검사
                 |
             JavaScript 변환
                 |
              브라우저 실행

        목적
            => 실행 전에 오류 발견 => 오류방지 / 가독성

            => TypeScript 작성
                => ts / tsx
                        | HTML 소스 첨부 (화면/UI)
                    | 일반
                    |
                  컴파일
                    |
                  타입 검사
                    |
                  JavaScript 변환
                    |
                  .js / .jsx
                    |
                  브라우저 실행

        중요한 점
            => TypeScript => 최종 JavaScript 실행 시 대부분 제거
            => JSP (Java) => HTML

        TypeScript에서 지원하는 데이터형
        string / number / boolean
        array / object / tuple
        any / void / null / undefined / never
        => enum, unknown (X)
        => interface : VO
        => 제네릭 사용 방법
        => ?. , /

 */
// 1. string : 문자열
// => 코틀린 var s:string, val s:string
//          let           const
let userName: string  = "홍길동"
console.log(userName)
// 데이터형 변경이 안된다
// number => 정수, 실수 => 구분 없이 사용
let age: number = 20
let price: number = 15000
let score: number = 80.5
console.log(score)
console.log(age)
console.log(price)

// 3. boolean : true / false
let isLogin:boolean = false
let isAdmin:boolean = true
console.log(isLogin)
console.log(isAdmin)

// 4. Array = 배열  데이터형[] Array<데이터형>

let names: string[] = [
    "홍길동",
    "심청이",
    "박문수"
]

let names2: Array<string> = [
    "홍길동",
    "심청이",
    "박문수"
]
console.log(names2)
console.log(names)

let numbers1: number[] = [
    1,2,3,4,5
]
let numbers2: Array<number> = [
    1,2,3,4,5
]
console.log(numbers1)
console.log(numbers2)

let booleans1: boolean[] = [
    true, false, true
]
let booleans2: Array<boolean> = [
    true, false, true
]
console.log(booleans1)
console.log(booleans2)

// 5. Object (객체형) => JSON
let user:{
    name: string,
    age: number
} = {
    name: "홍길동",
    age: 20
}
console.log(user.name)
console.log(user.age)

// 6. interface => 설계 / 규격 => 목록, 상세보기
interface  User{
    name: string,
    age: number
}

const user1: User = {
    name: "홍길동",
    age: 25
}
// 서버 => 데이터 읽기 => 값을 저장
console.log(user1.name)
console.log(user1.age)
// webstorm => ts, tsx 자동 추론

// 7. optional = ?  데이터가 있는 경우만 출력(있어도 되고 없어도 되고)
interface  User1 {
    no: number,
    name: string,
    email?: string // Null 값 허용
}

const user2: User1 = {
    no:1,
    name: "심청이"
}
const user3: User1 = {
    no:1,
    name: "심청이",
    email: "shim@co.kr"
}

console.log(user3.email)
console.log(user2.name)

// 8. type => interface 비슷한 타입
type  User5 = {
    no: number,
    name: string,
    email?: string // Null 값 허용
}

const user5: User5 = {
    no: 1,
    name: "홍길동"
}
/*
      # 객체 구조 => {}

                interface      type
      객체 구조     O              O
      확장(상속)    O              O
      Union     제한적             O
                ------ React 구조
      type Status="READY" | "RUNNING" | "END"
 */
// 9. Union => |  (or)
let value: string | number | boolean
value="홍길동"
value=1000

// 10. Type 사용법 => 특정값을 지정 Literal Type
type Sex = "남자" | "여자" // check
let s:Sex = "남자"
// 변수 => 2개 사용 name: , age: => Tuple
// 오라클 => Row
let user6: [string, number] = [
    "홍길동", 25
]
// => string, number, boolean, ?, interface, [] Array<string>

// 11. any => 데이터형을 모르는 경우 (일반 자바스크립트)
let data: any
data=10
data="aaa"
data=true

let data1: unknown
data1=10
data1="aaa"
data1=true

// 12. null / undefined
let va1:null = null
let va2:undefined = undefined
let va3:User|null=null // null 값 방지
// const [detail, setDetail] = useState<Food|null>(null)
// 화면 오류 발생
// 13. void : return 값이 없는 경우 => function
function detail():void{
    console.log("Hello TypeScript")
}
detail()
function  add(a:number,b:number):number {
    return a + b;
}
let c=add(10,30)
console.log(c)

const add2=(a:number,b:number):number => {return a + b}
c=add2(100,200)
console.log(c)

/*
    function func():number{} 선언적 함수
    const func=():number=>{} 익명의 함수 = 데이터형 처럼 사용
    const func=function():number{}
 */


// 14. Generic => 중요 : 데이터형을 나중에 결정 => 데이터형의 통일
function getData<T>(data:T):T {
    return data
}
const res1=getData<string>("Hello")
console.log(res1)
const res2=getData<number>(100)
console.log(res2)

/*
    ArrayList<String>
    ArrayList => T : Object
    ArrayList<FoodVO>
    public class ArrayList<T>{
        T t;
        public void setT(T t) {
            this.t=t
        }
        public T getT() {
            return t;
        }
    }
 */
// 정리
// string / number / boolean
// 배열 let names:string[], let names:Array<string>
// Tuple => let user:[string, number]
// Object
/*
   let s {
    name:string,
    sex:string,
    age:number
   }
 */
/*
       string  / number / boolean (로그인)
       string[] / number[]
       object / 구조 정의 : interface
       ? : 선택 속성, | 여러개 중에 한개 선택
       any / unknown => 데이터를 모르는 경우

       void : 반환 값이 없는 경우

       <T> : Generic
       --------------------------------
       string = number = boolean = array = object
       = interface = ? , |
       = function = generic

       데이터형 관련 => 기능을 가지고 있는 것은 아니다
 */
// interface => ? 자주 등장
/*
    jackson => List<FoodVO>
    SELECT no, poster, name, address
    => no:1 poster: '' ...
        price:null
 */


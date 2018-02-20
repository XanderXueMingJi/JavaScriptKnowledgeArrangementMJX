// TypeScript 数据类型:
//tsc app.ts # app.ts => app.js
// Boolean
let isDone: boolean = false;

//Number
let count: number = 123;

//String
let nam: string = 'str';

//Array
let list: number[] = [1, 2, 3];
let lists: Array<number> = [1, 2, 3];

//Enum 枚举
enum Direction {
    One,
    NORTH = 17,
    SOUTH,
    EAST,
    yellow = 324,
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
    blue = 3,
    king
};

let dir: Direction = Direction.NORTH;

console.log(dir);

//Any (动态类型)
let not: any = 3;
not = 'str';
not = false;

//Void
//某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function fn(): void {
    console.log('ewffewf');
}

let ki: void = undefined;
let ik: void = null;

//Tuple
let x: [string, number, boolean, any];
x = ['king', 10, false, [234]];

x[6] = true;//注意！如果x初始时没有boolean（let x: [string, number]），则不能赋值对错，



//箭头函数

let arr: number[] = [2, 4, 5, 6, 7, 8];
arr.forEach(() => console.log('one'));
console.log(1)
arr.forEach(o => console.log(o));
console.log(2);
arr.forEach((item, index, a) => {
    console.log('item', item);
    console.log('index', index);
    console.log('a', a);
})

// 参数类型和返回类型
function createUserId(name: string, id: number): string {
    return name + id;
  }

//可选参数及默认参数
function fn1(name: string = 'xmj', id: number, age?: number, url?: string): string {
    return name + id + url;
}

//剩余参数
function fn2(array, ...items) {
    items.forEach(item => {
        array.push(item);
    });
};
let cs = [];
fn2(cs, 1, 2, 3);

//数组解构
let x1: number, x2: number, x3: number;
let arr1 = [0, 1, 2, 3, 4, 5];
[x1, x2, x3] = arr1;

//数组展开运算符
let arr2 = [23, 34, 45];
let arr3 = [...arr2, 1, 3, 4, 5]

//对象解构
let o1 = {
    name2: 'xmj',
    url: 'xy',
    age2: 28
};

let {name2, age2} = o1;

//对象展开运算符
let o2 = {
    name3: 'xmj',
    url3: 'xy',
    age3: 28
}

//组件对象
let o3 = {...o2, age3: 29};

// 获取除了某些项外的其它项
let {name3, ...rest} = o2;

//接口
interface i4 {
    name: string;
    age: number;
    readonly url: string; //可选 | 只读属性
};

let o4: i4 = {
    name: 'xmj',
    age: 28,
    url: 'xy' //初始化后不能更改！！！ 
}

o4.name = 'king';
// o4.url = 'mm'; //报错，不能更改

//class
class c1 {
    static cname: string = '静态属性: c1'; // 静态属性
    greeting: string; // 成员属行

    constructor(mess: string) { // 构造函数 - 执行初始化操作
        this.greeting = '构造函数:' + mess + ' .king';
    };

    static getClassName() {// 静态方法
        return '静态方法: class的名字叫' + this.cname;
    };

    greet(): string { // 成员方法
        return '成员方法: hello, ' + this.greeting;
    }
};

let o5 = new c1('xmj');


// //在 TypeScript 中，我们可以通过 getter 和 setter 方法来实现数据的封装和有效性校验，防止出现异常数据。
// class c2 {
//     private _name: string;

//     get name(): string {
//         return this._name;
//     };

//     set name(newName: string) {
//         if(Math.random() > 0.5) {
//             this._name = newName;
//         }else {
//             console.log('Error: 修改不成功！');
//         }
//     }
// }

// //运行代码
// var o6 = new c2();
// o6.name = 'xmj';
// "xmj"
// o6.name = 'two'
// "two"
// o6.name = 'twoe'
// VM502:13 Error: 修改不成功！
// "twoe"
// o6.name
// "two"

//继承  还未搞懂 不知道有没有写错
class c3 {
    name: string;
    age: number

    constructor(cname: string, cage: number) {
        this.name = cname;
        this.age = cage;
    }

    move(num: number = 0, ag: number = 0) {
        console.log(`${this.name} moved ${num}. ${this.age} moved ${ag}`);
    }
};

class c4 extends c3 {
    constructor(name: string, age: number) {
        super(name, age);
    }

    move(num: number = 5, ag: number = 5) {
        console.log('ok5');
        super.move(num, ag);
    }
}

let o6 = new c3('xmj', 28);
let o7 = new c4('king', 30);

o6.move();











































































































































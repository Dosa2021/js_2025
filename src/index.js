// 
// 変数宣言
// 

// var var_1 = 'var変数'
// console.log(var_1)

// var_1 = 'var上書き'
// console.log(var_1)

// var var_1 = 'var再宣言'
// console.log(var_1)


// let val_2 = 'let変数'
// console.log(val_2)

// lval_2 = 'let上書き'
// console.log(val_2)

// letは再宣言不可
// let val_2 = 'let再宣言'
// console.log(val_2)

// const val_3 = 'const変数'
// console.log(val_3)

// val_3 = 'const uwa'
// console.log(val_3)

// const val_3 = 'const sai'
// console.log(val_3)

// constで定義したオブジェクト、配列はプロパティの変更が可能


// 
// テンプレート文字列
// 

// const name = 'ジャケえ'
// const age = 31

// const message_2 = `私の名前は${name}です。年齢はです。`
// console.log(message_2)


// 
// アロー関数
// 

// 従来の関数
// function func_1(str) {
//     return str
// }
// const func_1 = function (str) {
//     return str
// }

// console.log(func_1('hoge-hh----'))

// // アロー関数
// // const func_2 = (str) => {
// //     return str
// // }

// const func_2 = (str) => str

// console.log(func_1('func2です-です---'))


// 
// 分割代入
// 

// const myProfile = {
//     name: 'ジャケえ',
//     age: 31
// }

// const message_1 = `私の名前は${myProfile.name}です。年齢はです`
// console.log(message_1)

// const { name, age } = myProfile
// const message_2 = `私の名前は${name}です。年齢はです---`
// console.log(message_2)

// const myProfile = ['ジャケえ', 31]
// const message_1 = `私の名前は${myProfile[0]}です。年齢はです`
// console.log(message_1)

// const [name, age] = myProfile

// const message_2 = `私の名前は${name}です。年齢はですaaa`
// console.log(message_2)


// 
// デフォルト値
// 

// const sayHello = (name) => console.log(`こんにちは${name}さん`)
// sayHello()

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは${name}さん`)
// sayHello('dddd')

// const myProfile = {
//     age: 31
// }


// 
// オブジェクトの省略記法
// 
// const name = 'ジャケえ'
// const age = 31

// const myProfile = {
//     name: name,
//     age: age
// }
// console.log(myProfile)

// // ↓ 省略記法
// const myProfile_2 = {
//     name,
//     age
// }
// console.log(myProfile_2)


// 
// スプレッド構文
// 

// 配列の展開
// const arr_1 = [1, 2]
// console.log(arr_1)
// console.log(...arr_1)

// const samFunc = (num1, num2) => console.log(num1 + num2)
// samFunc(arr_1[0], arr_1[1])
// samFunc(...arr_1)

// まとめる
// const arr_2 = [1, 2, 3, 4, 5]
// const [num1, num2, ...arr_3] = arr_2
// console.log(num1)
// console.log(num2)
// console.log(arr_3)

// const arr_4 = [10, 20]
// const arr_5 = [30, 40]

// const arr_6 = [...arr_4]
// console.log(arr_6)

// const arr_7 = [...arr_4, ...arr_5]
// console.log(arr_7)


// 
// mapとか
// 

// const nameArr = ['田中', '山田', '砂糖']
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index])
// }

// map
// nameArr.map((name, index) => {
//     console.log(index)
//     console.log(name)
// });

// filter
// const numArr = [1,2,3,4,5]
// numArr.filter((num) => {
// })


// 
// 三項演算子
// 

// const val_1 = 1 > 0 ? 'true' : 'false'

// const num = 1300
// console.log(num.toLocaleString())


// 
// 論理演算子
// 

const val = 'abc'
if (val) {
    console.log('true')
} else {
    console.log('false-----------')
}

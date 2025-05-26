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
const func_1 = function (str) {
    return str
}

console.log(func_1('hoge-hh----'))

// アロー関数
// const func_2 = (str) => {
//     return str
// }

const func_2 = (str) => str

console.log(func_1('func2です-です---'))

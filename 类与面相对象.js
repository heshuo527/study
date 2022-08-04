//Student是一个类名，一般首字母大写（驼峰命名法）
//类看起来就是一个函数
var Student = function(name, height) {
    //用this.变量名 来创造一个只有类的实例1才能访问的变量
    this.name = name
    this.height = height
}

//用new函数名（参数）初始化一个类的实例
//赋值给s1
//这时候s1引用的是一个student类型（也就是对象student的实例）
//也称之为对象
var s1 = new Student('gua', 170)

//还可以修改s1的属性
s1.name = 'xiaogua'
s1.height = 1.70
console.log('修改后的s1', s1.name, s1.height)

//可以批量创建多个相互独立的实例 
var s2 = new Student()
var s3 = new Student()
s2.name = 'guagua'
s3.name = '呱呱咕'
console.log('批量的name实例', s2.name, s3.name)

//给类增加一些方法（函数）
//给类定义方法（标准库中string 类的 length）
//prototype 在这里是一套路
Student.prototype.greeting = function() {
    console.log(`hello, I'M ${this.name}`)
}

Student.prototype.undate = function(name, age) {
    this.name = name
    this.age = age
}

s1.nihao = function() {
    console.log('你好')
}

//可以调用实例的方法
s1.greeting()

//调用undate的方法
s1.undate('xiao', 123)
s1.greeting()

function sever (arr) {
    var num = []
    for(var i = arr.length - 1; i >= 0; i--) {
        num[num.length] = arr[i]
    }
    return num
}
var arr1 = sever([1, 2, 3, 4, 5])
console.log(arr1)

var t = new XMLHttpRequest
t.open('get', 'login', turn)

var a = 1
function aa() {
    return --a
}
aa()

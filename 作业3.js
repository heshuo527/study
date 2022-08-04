//求数组的和
var sum = function(array) {
    var s = 0
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        s = s + n
    }
    return s
}

//测试  用于测试的函数
var ensure = function(condition, message) {
    if(!condition) {
        console.log(message)
    }
}
//定义一个函数去执行结果
var testsum = function() {
    var numbers = [1, 2, 3]
    var value = 6
    ensure(value == sum(numbers), 'sum 错误')
    ensure(1 == sum([1]), 'sum 1 错误')

}
testsum() 
//var a = [1, 3, 4]
log('sum',sum(a)) 


//求数组的乘积
var product = function(array) {
    var a = 1
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        a = a * n
    }
    return a
}

//求返回绝对值
var value = function(n) {
    if(n < 0) {
        return n = -n 
    }
    return n
}

//求array数组的最小值
var sml = function (array) {
    var m = array[0]
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        if(m > n) {
            m = n
        }
    }
    return m
} 

//加强版自动测试
var ensureEqual = function(a, b, message) {
    if(a != b) {
        console.log(message, a, b)
    }
}
//开始测试
var testsml = function() {
    ensure(sml([1, 2, 3]) == 1, '123 最小数不是 1')
    ensure(sml([3, 2, 4]) == 2, '324 最小数不是 2')
    ensureEqual(sml([6, 4, 5]),4 , '645 最小数不是 4')

}

//求参数1 - 2 + 3 - 4 +n的值
var he = function(n) {
    var s = 0
    for(var i = 0; i <= n; i++) {
        if(i % 2 == 0) {
            s -= i
        }
        else{
            s += i
        }
    }
    return s
}

////求参数1 + 2 - 3 + 4 -n的值

var hanshu = function(q) {
    var s = 1
    for(var i = 2; i <= q; i++) {
        if(i % 2 == 0) {
            s += i 
        }else{
            s -= i
        }
    }
    return s
}


var fac = function(n) {
    var s = 1
    for(var i = 1; i <= n; i++) {
        s *= i 
    }
    return s
}
// 实现 apply 函数
// 参数如下
// op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
// a b 分别是 2 个数字
// 根据 op 对 a b 运算并返回结果(加减乘除)
var apply = function(op, a, b) {
    if(op == '+') {
    return a + b
    }if(op == '-') {
    return a - b
    }if(op == '*') {
    return a * b
    }if(op == '/') {
    return a / b
    }
}

var applyList = function(ap, oprands) {
    var s = 0
    for(var i = 0; i < oprands.length; i++) {
        var n = oprands[i]
        if(ap == '+') {
            s = s + n
        }if(ap == '-') {
            s = s - n
        }if(ap == '*') {
            s = s * n
        }if(ap == '/') {
            s = s / n
        }
    }
    return s
}

var s = 2 * n
var n = 2
document.write(n)

var a = 1
var b = 1
var c 
var value = function(n) {
    for(var i = 0; i < n; i++) {

        s = a + b
        b = a
        c = s + b
    }
    return c
}  

var a ='11' + 11
var d = alert(typeof(a))
console.log(d)

var hz = function(a, b) {

    var c
    c = a + b
    return c
}
console.log(hz(21, 44))

//switch case的用法
var js = function(a) {
    switch(a) {
        case'dog':
        console.log('wawawa')
        return
        case'mao':
        console.log('hahah')
        return
    }
}
var a = function(num) {
    var num1 = ''
    for (i = num.length;i >= 0; i++) {
        num1 += num[i]
        console.log(num1)
    }
}
a('1234')


//递归的用法求阶乘
var value = function(n) {
    if(n == 0 || n == 1) {
        return 1
    }
    return n * value(n - 1)    
}

//递归的方法求斐波那契额
var fb = function(i) {
    if(i == 1 || i == 2) {
        return 1
    }
    console.log('i的值',i)
    return fb(i - 1) + fb(i - 2)
}


console.log('第一个是', test)
function test(test) {
    console.log('第二个是', test)
    var test = 234
    console.log('第三个是', test)
    function tese() {

    }
}
test(1)
    var test = 123

    var global = 100
    function fn() {
    console.log(global)
}
fn()

//这就是闭包
function a() {
    var count = 0
    function demo() {
        count ++
        console.log(count)
    }
    return demo
}
var count = a() 

count()
count()
count()

var a = 10
var b = 'name'
console.log('type a', typeof a)
console.log('type b', typeof b)


var log = function() {
    console.log.apply(console,arguments)
}
// a = 10
// b = true
// c = 'i am good'
// log('type a', typeof a)
// log('type b', typeof b)
log('type c', typeof c)

//高阶函数，可以作为参数传递的函数
var process = function(array, processor) {
    var I = []
    for(var i = 0; i < array.length; i++) {
        var a = array[i]
        var element = processor(a)
        I.push(element)
    }
    return I
}
var array = [1.1, -2.2, 3.3]
var stringList = process(array, String)
//string函数是可以用来把数据转换成string类型的一个函数
log('stringList', stringList) 
process(array, Math.floor)
var square = function(n) {
    return n * n
}

//匿名函数就是一下
var array = [1, 2, 3]
var squareList = process(array, square)
log('square list',squareList)

var addList = process(array, function(n) {
    //我们定义一个接受一个参数的函数并且直接使用
    //他没有名字
    return n + 1
})
log ('add list', addList)

var stys = function(n) {
    var s = ''
    for(var i = n - 1; i > 0; i--) {
        s = i + s + i
    }
    return s
}

var sty = function(n) {
    var s = ''
    for(var i = 0; i < n; i++) {
        s += string(i + 1)
    }
    for(var i = n - 1; i > 0; i--) {
        s += string(i)
    }
    return s
}
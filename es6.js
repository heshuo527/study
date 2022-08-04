//双重匿名函数
var funs = function(a) {
    return function(b) {
        return a + b
    }
}
funs(1)(1) //2


var s = function(a, name = 'gua') {
    console.log(a, name)
}
s(11)
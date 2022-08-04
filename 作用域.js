// 作用域：就是代码名字（变量）在某个特定的范围内起作用和效果，
// 目的是提高程序的可靠性和减少命名冲突
// 函数的形参也可以看作是局部变量
// 1全局变量只有在浏览器关闭时才会销毁，比较占用电脑内存资源
// 2当我们的程序执行完毕就会销毁

var num = 10
var num = 5
console.log(num)

var sort = function() {
    var num1 = 10
    num2 = 20
}
sort()
console.log(num2)

//作用域链，代码在执行时就会生成一个作用域链，内部权限最大
var num = 10
var fn = function() {
    var num = 20
    function fun() {
        console.log(num)
    }
    fun()
}
fn()

//预解析：代码执行分两步走  预解析  代码执行
//预解析js引擎会把js里面所有的var 还有function 提升到当前作用域的最前面
//代码执行是自上而下的顺序
//预解析分为 变量预解析（变量提升） 和函数预解析 （函数提升）
//变量提升 就是把所有的变量提升到当前的作用域最前面  不提升赋值操作
//函数提升 就是把所有的函数声明提升到作用域的最前面  不调用函数
yjx()//报错
var yjx = function() {
    console.log(1)
}

console.log(gua)//undifined
var gua = 10

//arguments定义：是函数都有一个内置对象，里面存储了传递过来的实参
function fn() {
    //arguments可以储存函数里的实参
    console.log(arguments)

    //arguments可以求参数的个数
    console.log(arguments.length)

    //可以用下标来查找参数
    console.log(arguments[2])
}
fn(1, 2, 3, 'ww', 4)



//求一个函数参数的最大值
function max() {
    var newMax = arguments[0]
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] > newMax) {
            newMax = arguments[i]
        }
    }
    return newMax
}
console.log(max(122,3,5,6,7,8,88,333))



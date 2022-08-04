//利用函数翻转任意数组 reverse翻转
function reverse(arr) {
    var newArr = []
    for(var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i]
    }
    return newArr
}

var arr1 = reverse([12,2,3,4,45,5,6,7])
var arr2 = reverse([7,6,1,5,5,4,,3,3,2,1])

console.log(arr1)
console.log(arr2)


//将数组转化为字符串
var arr = [1,3,4,667]
var s = arr.toString()
console.log(typeof(s))
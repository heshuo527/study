function deepClone(origin, target) {
    var target = target || {}
        toStr = object.prototype.toString
        arrSty = "[object Array]"
    for(var prop in origin) {
        if(origin[prop] !=="null" && typeof(origin[prop]) == 'object') {
            if(toStr.call(orgin[prop]) == attStr) {
                target[prop] = []
            } else {
                target[prop] = {}
            }
            deepClone(origin[prop], target[prop])
        } else {
            target[prop] = origin[prop]
        }
    }
    return target

}



//数组去重
var arr = [1, 3, 4, 5, 5, 6, 0 ,3, 9, 3]
var value = function() {
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] != 3) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr
}

//数组排序，a - b就是升序，b - a 就是降序
var value = [2, 6, 34, 5, 7, 32, 8, 1]
    value.sort(function(a, b) {
        return a - b
})

//给一个有序数字随机排序
var arr = [1, 2, 3, 4, 5, 6, 6, 7]
arr.sort(function(){
    return Math.random() - 0.5
})

//对象排序也是根据他的一个键（key）来排序

//根据字符串排序
var retBytes = function(arr) {
    var num = arr.length
    for(var i = 0; i < arr.length; i++){
        if(arr.charCodeAt(i) > 255) {
            num++
        }
    }
    return num
}
var str = ['aqeer温和呵护', 'bd和', 'yydhd', '很多很多', 'dkhjajdadh']
str.sort(function(a, b) {
    return retBytes(a) - retBytes(b)
})

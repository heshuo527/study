//JavaScript中所有事物都是对象，对象是具有属性和方法的
//对象具有键和值，可以让我们调用
//调用方法 obj.name 或者 对象名+属性名 obj['name']
var obj = {
    name : '可可',
    type : '阿拉斯加犬',
    age : 5,
    color : 'red',
    dog : function() {
        console.log('bark', 'showFilm')
    }
}
//可以用for in 来打印全部属性和属性值
for(var k in obj) {
    console.log(obj[k])
}

//第二种方法创建对象
var men = new Object
men.name = '老板';
men.age = 18;
men.gender = '男';
men.skill = function() {
    console.log('分身术')
}

//用构造函数创建对象
//构造函数首字母要大写，并且不需要return就能返回结果
//调用构造函数必须要使用new
function Star(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
var gua = new Star('张三', 18, '男')
console.log(gua.name)
var xiaogua = new Star('李四', 19, '女')
console.log(xiaogua.name)
console.log(xiaogua['name']);


var Wz = function(name, type, blood, form) {
    this.name = name
    this.type = type
    this.blood = blood
    this.form = form
}
var houyi = new Wz('后裔', '射手', 500, '近战')

console.log(houyi.name, houyi.type, houyi.blood, houyi.form)


//作业：创建一个电脑，苹果，车的对象
function Conputer(brand, model, price) {
    this.brand = brand
    this.model = model
    this.price = price
    fun = function() {
        console.log(fun)
    }
}
var leg = new Conputer('联想', '游戏本', 7000)
console.log(leg.brand)
for(var k in leg) {
    console.log(k)
    console.log(leg)
}

翻转任意数组
var fzarr = function(arr) {
    var newarr = []
    for(var i = arr.length - 1; i >= 0; i--) {
        newarr[newarr.length] = arr[i]
    }
    return newarr
}
var arr1 = fzarr([2, 3, 4, 6 , 2, 2])
console.log(arr1);

数组排序
var gua = [2, 3, 4, 6 , 2, 2]
gua.stringift()
gua.sort()//数组排序 从大到小 两个一起使用就是从小到大
gua.reverse()//数组翻转

冒泡排序
var arr = [3, 4, 5, 7, 2, 9, 1]
function px(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                var sum = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = sum
                console.log('j', arr)
            }
        }
    }
}
console.log(px(arr))

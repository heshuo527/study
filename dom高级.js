var e = function(selector) {
    return document.querySelector(selector)
}

//获取到按钮，添加事件绑定
var b = e('.dom-toggle-button')
b.addEventListener('click', function() {
    //获取到需要添加class的元素
    var c = e('.dom-toggle-div')
    //用toggleClass来开关这个元素的class
    toggleClass(c, '.gua-high')
})

var toggleClass = function(element, className) {
    //如果有就删除
    if(element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        //没有就加上
        element.classList.add(className)
    }
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}
//获取全部的div
var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
        console.log(i)
        
    }
}

var bindAllToggles = function() {
    var selector = '.dom-toggle-button'
    bindAll(selector, 'click', function(event){
        console.log('按钮被点击')
        var p = event.target.parentElement
        var c = find(p, '.dom-toggle-div')
        toggleClass(c, 'gua-high')
    })
}
bindAllToggles()


var find = function(element, selector) {
    return element.querySelector(selector)
}
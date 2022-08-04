var e = function(selector) {
    return document.querySelector(selector)
}

//首先给addButton绑定一个事件
var addButton = e('#id-button-add')
addButton.addEventListener('click',function() {
    //先获取到input的元素
    var todoInput = e('#id-input-todo')
    var todo = todoInput.value
    //获取到输入的值然后传给container
    saveContainer(todo)
    loadTodos()
})

var saveContainer = function(todo) {
    var todoContainer = e('#id-div-container')
    //获取todo的内容
    var t = todoTemplate(todo)
    //beforeend是让替换的的内容输出在最后
    todoContainer.insertAdjacentHTML('beforeend', t)
}


var todoTemplate = function(todo) {
    var t = `
    <div class="todo-cell">
            <button class="todo-done">完成</button>
            <button class="todo-delete">删除</button>
            <span class="todo-content" contenteditable="true">${todo}</span>
        </div>
    `
    return t
}

//事件委托
//把click绑定到事先存在的父元素上，
//然后查看被点击的对象是否是我们需要的对象（通过event.target）
//这个过程就是叫事件委托

var todoContainer = e('#id-div-container')
//给todoContainer绑定事件
todoContainer.addEventListener('click', function(event) {
    var target = event.target
    //如果点击对象是done
    if(target.classList.contains('todo-done')) {
        console.log('done')
        //toggleClass用来开关一个元素的class
        //用parentElement来获取他的父元素
        var todoDiv = target.parentElement
        //有就执行toggleClass函数
        toggleClass(todoDiv, 'done')
        //如果点击对象是todo-delete

        //添加之后保存todo
        saveTodos()
    } else if (target.classList.contains('todo-delete')) {
        console.log('delete')
        //用pareneElement来获取target的父元素
        var todoDiv = target.parentElement
        //有就删掉这个元素
        todoDiv.remove()

        //删除之后保存todo
        saveTodos()
    }
}) 

//开关某个元素的class
var toggleClass = function(element, className) {
    //用来检查todoDiv标签是否有这个class
    if(element.classList.contains(className)) {
        //有就加上
        element.classList.remove(className)
    } else {
        //没有就加上
        element.classList.add(className)
    }
}

var s = JSON.stringify([1, 2, 3, 4])
//储存数据
//首先把数组写入 localstorage 
var save = function(array) {
    console.log(s)
    var s = JSON.stringify(array)
    localStorage.todos = s
}

//读取localstorage 中的数据解析并返回
var load = function() {
    console.log(s)
    var s = localStorage.todos
    return JSON.parse(s)
}

//定义个函数把页面上所有的todo用save保存
var saveTodos = function() {
    var contents = document.querySelectorAll('.todo-content')
    console.log('todo-save', load)
    var todos = []
    for (var i = 0; i < contents.length; i++) {
        var c = contents[i]
        var todo = c.innerHTML
        todos.push(todo)
    }
    save(todos)
}

var loadTodos = function() {
    var todos = load()
    console.log('load todo', todos)
    for (let i = 0; i < todos.length; i++) {
        var todo = todos[i]
        saveContainer(todo)
        
    }
}
loadTodos()
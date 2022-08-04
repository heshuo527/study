//先定义个e来代替
var e = function(selector) {
    return document.querySelector(selector)
}

//首先给addButton绑定个事件 
var addButton = e('#id-button-add')
addButton.addEventListener('click', function() {
    //获取input的元素
    var todoInput = e('#id-input-todo')
    var todo = todoInput.value
    //获取container的选择器 
    inserTodo(todo, false)
    saveTodos()
})

var inserTodo = function(todo, done) {
    var todoContainer = e('#id-div-container')
    var t = todoTemplate(todo, done)
    //beforeend是让添加进来的内容保存在最后
    todoContainer.insertAdjacentHTML('beforeend', t)
}
//定义个函数来替换保存输入的值
var todoTemplate = function(todo, done) {
    var status = ''
    if(done) {
        status = 'done'
    }
    var t = `
    <div class="todo-cell ${status}" >
            <button class="todo-done">完成</button>
            <button class="todo-delete">删除</button>
            <span class ="todo-content" contenteditable="true">${todo}</span>
        </div>
    `
    return t
}

//通过事件委托来判断对象是否是我们需要的对象（event.target）
//如果是我们需要的我们就找到它的父节点绑定事件  
//不需要的话我们就不动它
var todoContainer = e('#id-div-container')
//给connaiter添加事件绑定
todoContainer.addEventListener('click', function(event) {
    var target = event.target
    if(target.classList.contains('todo-done')) {
        console.log('done')
        //parentElement获取他的父节点
        //开关一个元素的class
        var todoDiv = target.parentElement
        toggleClass(todoDiv, 'done')
        //改变todo 完成状态后 保存todo
        saveTodos()
    } else if (target.classList.contains('todo-delete')) {
        console.log('delete')
        var todoDiv = target.parentElement
        todoDiv.remove()
        //删除后保存
        saveTodos()
    }
})
//用来开关一个元素的class
var toggleClass = function(element, className) {
    if(element.classList.contains(className)) {
        //有则删掉
        element.classList.remove(className)
    } else {
        //没有就加上
        element.classList.add(className)
    }
}


var s = JSON.stringify([1, 2, 3, 4])
console.log('序列化后的字符串', typeof s, s)
var a = JSON.parse(s)
console.log('反序列化后的数组', typeof a, a)

//实现本地存储
//把 数组 转化成 string 的形式
var save = function(array) {
    var s = JSON.stringify(array)
    localStorage.todos = s
}

//解析并返回他得值
var load = function() {
    var s = localStorage.todos
    return JSON.parse(s)
}

//获取全部的 todo 用 save 来保存
var saveTodos = function() {
    var todos = []
    var contents = document.querySelectorAll('.todo-content')
    console.log('save todo', todos)
    for(var i = 0; i < contents.length; i++) {
        var c = contents[i]
        var done = c.parentElement.classList.contains('done')
        var todo = {
            done: done,
            content: c.innerHTML,
        }
        todos.push(todo)  
    }
    save(todos)
}

var loadTodos = function() {
    var todos = load()
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]
        inserTodo(todo.content, todo.done)
    }
}
loadTodos()



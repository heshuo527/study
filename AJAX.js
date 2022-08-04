//ajax请求（Asynchronous javaScript and XML）
var r = new XMLHttpRequest()
r.open('GET', '/login', true)
r.onreadyStateChange = function() {
    if(r.readyState == 4) {
        console.log('请求成功', r.responseText.length)
    }
} 
r.send()

//可以封装成以下代码
var ajax = function(method, path, headers, data, reseponseCellback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    // r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        console.log('r', r)
        if(r.readyState === 4) {
            reseponseCellback(r)
        }
    }
    r.send()
}
var method = 'GET'
var url = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/movie-list.79052e3e.css://dappweb-api.huolala.cn/index.php?_su=1655134091328648389&revision=&driver_md5=d0f1598cf113c24b030e55c66f396b10&_m=register&_a=get_physics_vehicle&city_id=9999'
ajax(method, url, null,'',function(r) {
    var todos = JSON.parse(r.response)
    console.log(todos)
})
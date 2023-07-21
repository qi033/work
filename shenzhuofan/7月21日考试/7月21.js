const useName = document.getElementById('useName')
const pwd = document.getElementById('pwd')
const code = document.getElementById('code')
const codes = document.getElementById('code-html')
const logButn = document.getElementById('logButn')
let cod



function num(){
    cod = Math.ceil(Math.random() * (9999 - 1000 + 1) + 1000)
}
num()



function rund(){
    num()
    let html = ''
    html += `<h1>${cod}</h1>`
    codes.innerHTML = html
}

function settime(){
   setInterval(function () {
        rund()
        num()
        }, 10000)
}



function logButnfun(){
    event.preventDefault()
    if(useName.value == 'admin' && pwd.value == '123' && code.value == cod){
        window.location.href = '主页.html'
    }else{
        useName.value = ''; 
        pwd.value = ''; 
        code.value = '';
        window.location.reload()
        alert('用户名或密码错误')
    }
}

function codesfun(){
    rund()
}

function backimg(){
    setInterval(function () {
        $('#backimg').css('z-index','0')
        }, 2000)
}

window.onload = function() {
    settime()
    rund()
    backimg()
    logButn.addEventListener('click',logButnfun)
    codes.addEventListener('click',codesfun)
}
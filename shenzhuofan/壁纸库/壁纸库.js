
window.onload = function(){
    sclfun()
}

// 显示壁纸库
$('#back').click(function() {
    $('.content').css('display', 'block');
})
// 关闭壁纸库
$('#close').click(function() {
    $('.content').css('display', 'none');
})
// 壁纸库列表切换
$('#scl').click(function() {
    $('#solidColor').css('display', 'block');
    $('#recommend').css('display', 'none');
    $('#diy').css('display', 'none');
    $('#collection').css('display', 'none');
})
$('#remd').click(function() {
    $('#recommend').css('display', 'block');
    $('#solidColor').css('display', 'none');
    $('#diy').css('display', 'none');
    $('#collection').css('display', 'none');
})
$('#self').click(function() {
    $('#diy').css('display', 'block');
    $('#solidColor').css('display', 'none');
    $('#recommend').css('display', 'none');
    $('#collection').css('display', 'none');
})
$('#cltn').click(function() {
    $('#collection').css('display', 'block');
    $('#solidColor').css('display', 'none');
    $('#recommend').css('display', 'none');
    $('#diy').css('display', 'none');
})

// 纯色背景列表
let scl = [
    'https://pic2.zhimg.com/v2-2924141043913f09987ca5cc544656e2_r.jpg?source=1940ef5c',
    'https://pic1.zhimg.com/v2-6ebaf6672a2fcbcd1e03cfd132bf3cfb_r.jpg?source=1940ef5c',
    'https://pic4.zhimg.com/v2-65354520edd978c49d00a7a710feb9c5_r.jpg?source=1940ef5c',
    'https://pic1.zhimg.com/50/v2-2e3d5df303d6767ee928e71f701d2630_hd.jpg?source=1940ef5c',
    'https://pic4.zhimg.com/v2-f413200866348c07e09957736cc62200_r.jpg?source=1940ef5c',
    'https://pic4.zhimg.com/v2-ab3dbd003b38d85a3af24b05caffde11_r.jpg?source=1940ef5c',
    'https://n.sinaimg.cn/sinacn13/320/w690h1230/20180411/1111-fyzeyqa4568653.jpg',
    'https://pic4.zhimg.com/v2-544908be012561c2905bd4cb3acf8923_r.jpg?source=1940ef5c',
    'https://pic1.zhimg.com/v2-0aa990f37ada6efc5af350acd9f92e50_r.jpg?source=1940ef5c',
    'https://clubimg.club.vmall.com/data/attachment/forum/202005/04/100459vdin2ecctqb1g8nh.jpeg',
    'https://pic4.zhimg.com/v2-268b647be87416127f6cba7bc6554e5f_r.jpg?source=1940ef5c',
    'https://n.sinaimg.cn/sinacn13/316/w690h1226/20180411/7cef-fyzeyqa4566416.jpg',
    'https://pic4.zhimg.com/v2-94887992750b6f612edd8896760fdbc6_r.jpg?source=1940ef5c',
    'https://n.sinaimg.cn/sinacn13/319/w690h1229/20180411/027f-fyzeyqa4566660.jpg',
    'https://pic3.zhimg.com/v2-64a29778eaf847ddf071d4081b233c3c_r.jpg?source=1940ef5c',
    'https://n.sinaimg.cn/sinacn13/320/w690h1230/20180411/9b01-fyzeyqa4567589.jpg',
    'https://pic1.zhimg.com/v2-5e23d64858984cf00c1029821be56511_r.jpg?source=1940ef5c',
    'https://tse3-mm.cn.bing.net/th/id/OIP-C.j9Bs6U-0Y4t6Y7gJ7F2RRwHaPO?pid=ImgDet&rs=1',
    'https://tse3-mm.cn.bing.net/th/id/OIP-C.j9Bs6U-0Y4t6Y7gJ7F2RRwHaPO?pid=ImgDet&rs=1',
    'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201605/24/125220apbz9joshh9e9pms.jpg'

]
function sclfun(){
    scl.forEach((item,index) => {
        const div = document.createElement('div');
        div.id = 'mydiv'
        const img = document.createElement('img')
        img.src = item
        img.id = 'imgs'
        div.appendChild(img);
        div.addEventListener('click', () => cliFn(item))
        $('#solidColor').append(div)
    });
    function cliFn(url){
        $('body').css('background', `url(${url})no-repeat 0 0/100% 100%`)
        localStorage.setItem('back',url)
    }
    const image = localStorage.getItem('back');
    if(image){
        $('body').css('background', `url(${image})no-repeat 0 0/100% 100%`)
    }
}


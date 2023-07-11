const rand = [
    {
        id: 1,
        quming: "在你的身边",
        geshou: "盛哲",
        shichang: "04:22"
    },
    {
        id: 2,
        quming: "谁",
        geshou: "曲肖冰",
        shichang: "04:37"
    },
    {
        id: 3,
        quming: "交换余生",
        geshou: "林俊杰",
        shichang: "04:36"
    },
    {
        id: 4,
        quming: "天外来物",
        geshou: "薛之谦",
        shichang: "04.17"
    },
    {
        id: 5,
        quming: "演员",
        geshou: "薛之谦",
        shichang: "04:21"
    },
];

(function () {
    xuanranyuequ(rand);
})();
function xuanranyuequ(rand) {
    console.log(rand);
    let html = "";
    rand.forEach((item, index) => {
        html += `
            <li>
                <input type="checkbox">
                <span class="aaa">
                    ${item.quming}
                    <svg t="1688956598998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2235" width="16" height="16"><path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m196.546667 500.493333l-266.666667 176A37.333333 37.333333 0 0 1 384 688V336.033333a37.333333 37.333333 0 0 1 57.893333-31.16l266.666667 176a37.333333 37.333333 0 0 1 0 62.32z" fill="#8a8a8a" p-id="2236"></path></svg>
                    </span>
                <span class="bbb">${item.geshou}</span>
                <span class="ppp">${item.shichang}</span>
            </li>
            `;
    });
    $('.ul2').append(html);
};
$('.ul2 li .aaa').eq(1).mouseover(function () {
    $(".aaa .icon").eq(0).css("display", "block")
})
$('.ul2 li .aaa').eq(1).mouseout(function () {
    $(".aaa .icon").eq(0).css("display", "none")
})
$('.ul2 li .aaa').eq(2).mouseover(function () {
    $(".aaa .icon").eq(1).css("display", "block")
})
$('.ul2 li .aaa').eq(2).mouseout(function () {
    $(".aaa .icon").eq(1).css("display", "none")
})
$('.ul2 li .aaa').eq(3).mouseover(function () {
    $(".aaa .icon").eq(2).css("display", "block")
})
$('.ul2 li .aaa').eq(3).mouseout(function () {
    $(".aaa .icon").eq(2).css("display", "none")
})
$('.ul2 li .aaa').eq(4).mouseover(function () {
    $(".aaa .icon").eq(3).css("display", "block")
})
$('.ul2 li .aaa').eq(4).mouseout(function () {
    $(".aaa .icon").eq(3).css("display", "none")
})
$('.ul2 li .aaa').eq(5).mouseover(function () {
    $(".aaa .icon").eq(4).css("display", "block")
})
$('.ul2 li .aaa').eq(5).mouseout(function () {
    $(".aaa .icon").eq(4).css("display", "none")
})
$('.ul2 li .aaa').eq(1).click(function () {
    $("#audio1").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio").css("display", "block")
    var audio = document.getElementById("audio")
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio1.currentTime = 0
    audio2.currentTime = 0
    audio3.currentTime = 0
    audio4.currentTime = 0

    audio.play();
    let lrc = [];
    const pattern = /\[(.+)\](.+)/;
    $(function () {
        $.get("./音频、歌词/在你的身边 - 盛哲.lrc", function (data) {
            lrc = data.split("\n");
            console.log(lrc);
            lrc = lrc.map((currentItem) => {

                let tmp = currentItem.match(pattern);
                console.log(currentItem);

                if (tmp) {
                    return {
                        time: s(tmp[1]),
                        lyric: tmp[2],
                    }
                } else {
                    return null
                }
                console.log(tmp);
            });
            //渲染歌词
            renderLyric();
        });

    });
    function renderLyric() {
        let html1 = "";
        lrc.forEach((currentItem) => {
            html1 += `<p>${currentItem.lyric}</p>`;
        });
        $("#lyric").html(html1);
    }
    $("#audio").on("play", function () {
        setInterval(() => {
            ctime = Math.floor(this.currentTime);
            lrc.forEach((currentItem, index) => {
                if (ctime >= currentItem.time && ctime < lrc[index + 1].time) {
                    $("p").eq(index).css("color", "yellowgreen");
                }
            });
        }, 500);
    });

    function s(timeString) {
        const [minutes, seconds] = timeString.split(":");
        return parseInt(minutes) * 60 + parseInt(seconds);
    }
    function highlightLyric(lyricIndex) {
        var container = document.getElementById('lyric');
        var lyrics = container.getElementsByTagName('p');

        for (var i = 0; i < lyrics.length; i++) {
            if (i === lyricIndex) {
                lyrics[i].classList.add('highlight');
                var containerHeight = container.clientHeight;
                console.log(containerHeight);
                var containerScrollTop = container.scrollTop;
                console.log(containerScrollTop);
                var lyricOffsetTop = lyrics[i].offsetTop;
                console.log(lyricOffsetTop);
                var lyricHeight = lyrics[i].clientHeight;
                console.log(lyricHeight);

                if (lyricOffsetTop < containerScrollTop || lyricOffsetTop + lyricHeight > containerScrollTop + containerHeight) {
                    container.scrollTop = lyricOffsetTop - containerHeight / 2;
                }
            } else {
                lyrics[i].classList.remove('highlight');
            }
        }
    }
    function getCurrentLyricIndex(currentTime, lyrics) {
        for (var i = 0; i < lyrics.length - 1; i++) {
            if (currentTime >= lyrics[i].time && currentTime < lyrics[i + 1].time) {
                return i;
            }
        }
        return lyrics.length - 1;
    }

    // 监听音频时间更新事件
    function handleTimeUpdate() {
        var audio = document.getElementById('audio');
        var currentTime = audio.currentTime;
        var lyricIndex = getCurrentLyricIndex(currentTime, parsedLyrics);
        highlightLyric(lyricIndex);
    }

    // 监听滚动条事件
    function handleScroll() {
        var container = document.getElementById('lyric');
        var audio = document.getElementById('audio');
        var lyrics = container.getElementsByTagName('p');
        var scrollTop = container.scrollTop;

        for (var i = 0; i < lyrics.length; i++) {
            if (scrollTop >= lyrics[i].offsetTop - container.clientHeight / 2 &&
                scrollTop < lyrics[i].offsetTop + lyrics[i].clientHeight - container.clientHeight / 2) {
                audio.currentTime = parsedLyrics[i].time;
                return;
            }
        }
    }

    // 调用函数进行解析和显示
    var parsedLyrics = parseLrc(lrcContent);
    displayLyrics(parsedLyrics);

    // 监听音频时间更新事件
    var audio = document.getElementById('audio');
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // 监听滚动条事件
    var container = document.getElementById('lyric');
    container.addEventListener('scroll', handleScroll);
})
$('.ul2 li .aaa').eq(2).click(function () {
    $("#audio").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio1").css("display", "block")
    var audio1 = document.getElementById("audio1")
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio.currentTime = 0
    audio2.currentTime = 0
    audio3.currentTime = 0
    audio4.currentTime = 0
    audio1.play();

})
$('.ul2 li .aaa').eq(3).click(function () {
    $("#audio").css("display", "none")
    $("#audio1").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio2").css("display", "block")
    var audio2 = document.getElementById("audio2")
    audio.pause();
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio.currentTime = 0
    audio1.currentTime = 0
    audio3.currentTime = 0
    audio4.currentTime = 0
    audio2.play();
})
$('.ul2 li .aaa').eq(4).click(function () {
    $("#audio").css("display", "none")
    $("#audio1").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio3").css("display", "block")
    var audio3 = document.getElementById("audio3")
    audio.pause();
    audio1.pause();
    audio2.pause();
    audio4.pause();
    audio.currentTime = 0
    audio1.currentTime = 0
    audio2.currentTime = 0
    audio4.currentTime = 0
    audio3.play();
})
$('.ul2 li .aaa').eq(5).click(function () {
    $("#audio").css("display", "none")
    $("#audio1").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "block")
    var audio4 = document.getElementById("audio4")
    audio.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio.currentTime = 0
    audio1.currentTime = 0
    audio2.currentTime = 0
    audio3.currentTime = 0
    audio4.play();
})
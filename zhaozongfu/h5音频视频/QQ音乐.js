
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
                <input type="checkbox" class="user-checkbox">
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
    var audio = document.getElementById("audio")
    audio.play();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio1.currentTime = 0
    audio2.currentTime = 0
    audio3.currentTime = 0
    audio4.currentTime = 0
    //歌词切换
    $("#lyric1").css("display", "none")
    $("#lyric2").css("display", "none")
    $("#lyric3").css("display", "none")
    $("#lyric4").css("display", "none")
    $("#lyric").css("display", "block")
    //歌图切换
    $("#img").css("display", "block")
    $("#img").css("marginLeft", "28px")
    $("#img1").css("display", "none")
    $("#img2").css("display", "none")
    $("#img3").css("display", "none")
    $("#img4").css("display", "none")
    //音频切换
    $("#audio1").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio").css("display", "block")

    function yinpin1() {
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

    }
    yinpin1()


})
$('.ul2 li .aaa').eq(2).click(function () {
    var audio1 = document.getElementById("audio1")
    audio1.play();
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio.currentTime = 0
    audio2.currentTime = 0
    audio3.currentTime = 0
    audio4.currentTime = 0
    //歌词切换
    $("#lyric").css("display", "none")
    $("#lyric2").css("display", "none")
    $("#lyric3").css("display", "none")
    $("#lyric4").css("display", "none")
    $("#lyric1").css("display", "block")
    //歌图切换
    $("#img1").css("display", "block")
    $("#img1").css("marginLeft", "28px")
    $("#img").css("display", "none")
    $("#img2").css("display", "none")
    $("#img3").css("display", "none")
    $("#img4").css("display", "none")
    //音频切换
    $("#audio").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio1").css("display", "block")
    function yinpin() {
        let lrc1 = [];
        const pattern = /\[(.+)\](.+)/;
        $(function () {
            $.get("./音频、歌词/谁 - 曲肖冰.lrc", function (data) {
                lrc1 = data.split("\n");
                console.log(lrc1);
                lrc1 = lrc1.map((currentItem) => {

                    let tmp = currentItem.match(pattern);
                    console.log(currentItem);

                    if (tmp) {
                        return {
                            time: s(tmp[1]),
                            lyric1: tmp[2],
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
            lrc1.forEach((currentItem) => {
                html1 += `<p>${currentItem.lyric1}</p>`;
            });
            $("#lyric1").html(html1);
        }
        $("#audio1").on("play", function () {
            setInterval(() => {
                ctime = Math.floor(this.currentTime);
                lrc1.forEach((currentItem, index) => {
                    if (ctime >= currentItem.time && ctime < lrc1[index + 1].time) {
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
            var container = document.getElementById('lyric1');
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
            var audio = document.getElementById('audio1');
            var currentTime = audio.currentTime;
            var lyricIndex = getCurrentLyricIndex(currentTime, parsedLyrics);
            highlightLyric(lyricIndex);
        }

        // 监听滚动条事件
        function handleScroll() {
            var container = document.getElementById('lyric1');
            var audio = document.getElementById('audio1');
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
        var audio = document.getElementById('audio1');
        audio.addEventListener('timeupdate', handleTimeUpdate);

        // 监听滚动条事件
        var container = document.getElementById('lyric1');
        container.addEventListener('scroll', handleScroll);

    }
    yinpin()
})
$('.ul2 li .aaa').eq(3).click(function () {
    var audio2 = document.getElementById("audio2")
    audio2.play();
    audio.pause();
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio.currentTime = 0
    audio1.currentTime = 0
    audio3.currentTime = 0
    audio4.currentTime = 0
    //歌词切换
    $("#lyric").css("display", "none")
    $("#lyric1").css("display", "none")
    $("#lyric3").css("display", "none")
    $("#lyric4").css("display", "none")
    $("#lyric2").css("display", "block")
    //歌图切换
    $("#img2").css("display", "block")
    $("#img2").css("marginLeft", "28px")
    $("#img").css("display", "none")
    $("#img1").css("display", "none")
    $("#img3").css("display", "none")
    $("#img4").css("display", "none")
    //音频切换
    $("#audio").css("display", "none")
    $("#audio1").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio2").css("display", "block")
    function yinpin2() {
        let lrc2 = [];
        const pattern = /\[(.+)\](.+)/;
        $(function () {
            $.get("./音频、歌词/交换余生 - 林俊杰.lrc", function (data) {
                lrc2 = data.split("\n");
                console.log(lrc2);
                lrc2 = lrc2.map((currentItem) => {

                    let tmp = currentItem.match(pattern);
                    console.log(currentItem);

                    if (tmp) {
                        return {
                            time: s(tmp[1]),
                            lyric2: tmp[2],
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
            lrc2.forEach((currentItem) => {
                html1 += `<p>${currentItem.lyric2}</p>`;
            });
            $("#lyric2").html(html1);
        }
        $("#audio2").on("play", function () {
            setInterval(() => {
                ctime = Math.floor(this.currentTime);
                lrc2.forEach((currentItem, index) => {
                    if (ctime >= currentItem.time && ctime < lrc2[index + 1].time) {
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
            var container = document.getElementById('lyric2');
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
            var audio = document.getElementById('audio2');
            var currentTime = audio.currentTime;
            var lyricIndex = getCurrentLyricIndex(currentTime, parsedLyrics);
            highlightLyric(lyricIndex);
        }

        // 监听滚动条事件
        function handleScroll() {
            var container = document.getElementById('lyric2');
            var audio = document.getElementById('audio2');
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
        var audio = document.getElementById('audio2');
        audio.addEventListener('timeupdate', handleTimeUpdate);

        // 监听滚动条事件
        var container = document.getElementById('lyric2');
        container.addEventListener('scroll', handleScroll);

    }
    yinpin2()

})
$('.ul2 li .aaa').eq(4).click(function () {
    var audio3 = document.getElementById("audio3")
    audio3.play();
    audio.pause();
    audio1.pause();
    audio2.pause();
    audio4.pause();
    audio.currentTime = 0
    audio1.currentTime = 0
    audio2.currentTime = 0
    audio4.currentTime = 0
    //歌词切换
    $("#lyric").css("display", "none")
    $("#lyric1").css("display", "none")
    $("#lyric2").css("display", "none")
    $("#lyric4").css("display", "none")
    $("#lyric3").css("display", "block")
    //歌图切换
    $("#img3").css("display", "block")
    $("#img3").css("marginLeft", "28px")
    $("#img").css("display", "none")
    $("#img1").css("display", "none")
    $("#img2").css("display", "none")
    $("#img4").css("display", "none")
    //音频切换 
    $("#audio").css("display", "none")
    $("#audio1").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio4").css("display", "none")
    $("#audio3").css("display", "block")
    function yinpin3() {
        let lrc3 = [];
        const pattern = /\[(.+)\](.+)/;
        $(function () {
            $.get("./音频、歌词/天外来物 - 薛之谦.lrc", function (data) {
                lrc3 = data.split("\n");
                console.log(lrc3);
                lrc3 = lrc3.map((currentItem) => {

                    let tmp = currentItem.match(pattern);
                    console.log(currentItem);

                    if (tmp) {
                        return {
                            time: s(tmp[1]),
                            lyric3: tmp[2],
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
            lrc3.forEach((currentItem) => {
                html1 += `<p>${currentItem.lyric3}</p>`;
            });
            $("#lyric3").html(html1);
        }
        $("#audio3").on("play", function () {
            setInterval(() => {
                ctime = Math.floor(this.currentTime);
                lrc3.forEach((currentItem, index) => {
                    if (ctime >= currentItem.time && ctime < lrc3[index + 1].time) {
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
            var container = document.getElementById('lyric3');
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
            var audio = document.getElementById('audio3');
            var currentTime = audio.currentTime;
            var lyricIndex = getCurrentLyricIndex(currentTime, parsedLyrics);
            highlightLyric(lyricIndex);
        }

        // 监听滚动条事件
        function handleScroll() {
            var container = document.getElementById('lyric3');
            var audio = document.getElementById('audio3');
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
        var audio = document.getElementById('audio3');
        audio.addEventListener('timeupdate', handleTimeUpdate);

        // 监听滚动条事件
        var container = document.getElementById('lyric3');
        container.addEventListener('scroll', handleScroll);

    }
    yinpin3()

})
$('.ul2 li .aaa').eq(5).click(function () {
    var audio4 = document.getElementById("audio4")
    audio4.play();
    audio.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio.currentTime = 0
    audio1.currentTime = 0
    audio2.currentTime = 0
    audio3.currentTime = 0
    //歌词切换
    $("#lyric").css("display", "none")
    $("#lyric1").css("display", "none")
    $("#lyric2").css("display", "none")
    $("#lyric3").css("display", "none")
    $("#lyric4").css("display", "block")
    //歌图切换
    $("#img4").css("display", "block")
    $("#img4").css("marginLeft", "28px")
    $("#img").css("display", "none")
    $("#img1").css("display", "none")
    $("#img2").css("display", "none")
    $("#img3").css("display", "none")
    //音频切换
    $("#audio").css("display", "none")
    $("#audio1").css("display", "none")
    $("#audio2").css("display", "none")
    $("#audio3").css("display", "none")
    $("#audio4").css("display", "block")
    function yinpin4() {
        let lrc4 = [];
        const pattern = /\[(.+)\](.+)/;
        $(function () {
            $.get("./音频、歌词/演员 - 薛之谦.lrc", function (data) {
                lrc4 = data.split("\n");
                console.log(lrc4);
                lrc4 = lrc4.map((currentItem) => {

                    let tmp = currentItem.match(pattern);
                    console.log(currentItem);

                    if (tmp) {
                        return {
                            time: s(tmp[1]),
                            lyric4: tmp[2],
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
            lrc4.forEach((currentItem) => {
                html1 += `<p>${currentItem.lyric4}</p>`;
            });
            $("#lyric4").html(html1);
        }
        $("#audio4").on("play", function () {
            setInterval(() => {
                ctime = Math.floor(this.currentTime);
                lrc4.forEach((currentItem, index) => {
                    if (ctime >= currentItem.time && ctime < lrc4[index + 1].time) {
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
            var container = document.getElementById('lyric4');
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
            var audio = document.getElementById('audio4');
            var currentTime = audio.currentTime;
            var lyricIndex = getCurrentLyricIndex(currentTime, parsedLyrics);
            highlightLyric(lyricIndex);
        }

        // 监听滚动条事件
        function handleScroll() {
            var container = document.getElementById('lyric4');
            var audio = document.getElementById('audio4');
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
        var audio = document.getElementById('audio4');
        audio.addEventListener('timeupdate', handleTimeUpdate);

        // 监听滚动条事件
        var container = document.getElementById('lyric4');
        container.addEventListener('scroll', handleScroll);

    }
    yinpin4()


})

$('#select-all').on('change', function () {
    
    $('.user-checkbox').prop('checked', $(this).prop('checked'));
});
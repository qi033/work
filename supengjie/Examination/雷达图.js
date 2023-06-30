var myChart6 = echarts.init(document.getElementById('main4'));
option6 = {
    title: {
      text: '学生成绩'
    },
    tooltip: {},
    legend: {
      left: '0%',
      top: '40%',
      itemWidth: 24,
      itemHeight: 22,
      orient: 'vertical',
      data: [{
        name: '笔试',
        icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAn9JREFUSEul1V+IlGUUx/HPeWfdhbCdWSwCYTEiwQhK6sYuIrrvMpCiboKKIowSI01F1DQoEiUKDLop+gNddh/RRd4UFUSCEcmCECWzs0mgNXNi5n1nnZ3mzy4+d+97fud8n3Oe3/O+YSMr/3q0J4+bP19vWqxLmJduYvMpOs+U+uIsV14SW/+elj8dkFfuof0JuUgcKAvmCWKJ2mNi84+TIJMB2XqBfBPnKfbQXiqL1RbpnMEOYp+ovzMOMhqQK1vID8hHcJbiNPnv2iIxQ+4hnyW+IJ4S85eHQf8HZPNh4kO6BeJVrp1jtsq7NmKjs7vIN8oN5JNi4ctB0XVA5gytI2XR/JriENEsxf+MGeWmrOILFMeIB0tY/YiIXsdlYjZvJz7G/ThFftp9O/7wNlWhVXBXG8RuvIxvycfFwm8hL8xx6yWsEPvJC9OsNzke28mTmOePrVUHy1/hKnHoxor3s/MY5kTjoQrQ6rrhZOmaHDjJmSpjyEBjd9HVxyztrqv2i/qZCnB5kdpFHCC/ubEu4gGcoL1NbFkacNHyOSyje7GmrFplgHZfV9Xpvm+/goZo7Lruop6TlveRhyl2j7hUVYHhUfVBq5wZOp8RR0Wjt9HBDu4gfiFeI3+Y1sPoeO4kjpN3isavawG9Llrf4Xc6700G1IbC/VEVz+E2Ub9vaHbVYzYPEnvxNNnZWBdR4H28JRqvjwGs7KDzMw5ioxduO45T3CXmz48GlGP6CRdpf0R/FKtumdBU7QlsE/W7B0Ujvqato+Tz5F6KoTF1hvRF/3sV5NvEu6J+eAqgeS/xPfEn1nsOBXkLuVMsrHHgmB9O60VyboOHfFXUTw/n/AeuZcL4UFU+7AAAAABJRU5ErkJggg=='
      }, {
        name: '机试',
        icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAxZJREFUSEuVlEtoXGUYhp/3n0lDY+0kFhWTTC1SQVGsaBcKgkQnKqIg4qZqXXQhLrwgJdBFqbUoFKWIl40uuvDWjYigeGEGgyDooooVRaFFamcSkVKT1DYl6Zz/lblkkpmJM5OzOBzOd3m+877f+cUarn8LI49U0i/NTX3Ua5l6SZz+dHhgw/rwWrSerOQH+Z1zF+Lzww9Oz3er7wo4Vxi9KUFHbGdBB2oNvU9SMYV3bMiVfu4E6QiYy48+bfQqcDyYvQ78VWmmyFVRvARcKzyRGS+99X+QVQFnCyOb7HDY8IDgfTu+aylJr+iSpJxSEp4wPC74TIq7NuamzrSC2gAzX46MKRXeA68L5pDlXzpKYN0YxW7QopO4c+i+qcmV+Q2AJ0nPlbP7hfcARyN6O00839w81cJKao4EBhz1FLDd6GAmXdyvMcpVOSu3mcktW1Quf4h1K+KDEPmWgLttSEtcEe7APIb8g9PpR4fGTp7U8c+39l/etzANXJA4TOLTS4WhR0iMtUEr+VG6wmYXsP70xf7hamC2kP1GZp3sT5qmalWkEQz1p9j8ETXFsPSQxeJgrnhnFTBX2PxstA8GOBQcHRWazA9qliu6NnHjS+vxpfcRdgdpTyZ36o1q4pmvhrOpkPpTcETw95rFrwNcA19p2JHE5OpN904XG5PM5rPfA30BH+3VXEnVWWw3+kS0Hbg4OF68rbFFVR/yoxOGF1LwsaEqspon68oVxAQeFrw4OF6qnADLWs4WNl8jfALrC+HFrt1qdjanKfQZ32+0dTB36o8mQNXs/OiPSP1EpnoDtP4JjIAXMuOlW5YiTdswk8/uFUwEcQy8vKQt27gqPCiJZhuBVwbvLr68KuDs5PB1sZz6Tfg7mYGaE+2X6souC2Rs5o1uD+nk+o1j07+vCqjJlP0VMSBTdt0jtYndDrVIY+Yz48UbVkbbTtO5QvaAzTMBzqu+TUsFSxO3FhlihEtk3szcU9zXETDz9cg2JeEn8D8SvahfkSeALnMq3jx019SxjoCqTIXR5wz9a9kkwUImV3q9teY/SUcs4tDdYcUAAAAASUVORK5CYII='
      }]
    },
    radar: {
      name: {
        textStyle: {
          color: 'rgba(239, 244, 255, 1)',
          fontSize: 12
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'RGBA(81, 108, 117, 1)' // 设置网格的颜色
        }
      },
      splitArea: {
        show: false
      },
      indicator: [
        { name: '杨宏承', max:100 },
        { name: '余浩', max:  100},
        { name: '刘振洲', max:100 },
        { name: '申卓凡', max:100 },
      ]
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [100,100, 100, 100],
            name: '笔试',
            symbol: 'none',
            areaStyle: {
              normal: {
                color: 'RGBA(2, 242, 229, 1)',
                opacity: 0.4
              }
            },
            lineStyle: {
              width: 2,
              color: 'RGBA(2, 242, 229, 1)'
            }
          },
          {
            value: [100, 100, 100, 100],
            name: '机试',
            symbol: 'none',
            areaStyle: {
              normal: {
                color: 'RGBA(229, 185, 35, 1)',
                opacity: 0.4
              }
            },
            lineStyle: {
              width: 2,
              color: 'RGBA(229, 185, 35, 1)'
            }
          }
        ]
      }
    ]
  };
  myChart6.setOption(option6);
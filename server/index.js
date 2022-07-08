const nodemailer = require('nodemailer');
const information = require('./src/config');
const axios = require('axios');
const schedule = require('node-schedule');
const moment = require('moment');
let time = getTime();
let showInfo = {};
let getSweet = () => {
    axios.get(information['API'].SWEET)
        .then(response => {
            if (response.data.code == 1) {
                showInfo.sweet = response.data.content;
                console.log('showInfo', showInfo)
            }
        })
        .catch(err => {
            console.log('err', err)
        })

}
// 获得版权接口
let getImgInfo = () => {
    axios.get(information['API'].BINGIMG)
        .then(response => {
            showInfo.copyRight = response.data[0].copyright;
            console.log('showInfo', showInfo)
        })
        .catch(err => {
            console.log('err', err)
        })

}
function getTime() {
    moment.locale('zh-cn');
    const today = moment().utcOffset(8).format('YYYY/MM/DD');
    const weekday = moment().utcOffset(8).format('dddd');
    return '今天是' + today + ',' + weekday
}

function sendEmail() {
    //创建一个SMTP客户端配置对象
    const transporter = nodemailer.createTransport({
        // 默认支持的邮箱服务包括：”QQ”、”163”、”126”、”iCloud”、”Hotmail”、”Yahoo”等
        service: "QQ",
        auth: {
            // 发件人邮箱账号
            user: information['SENDER'].SEND_QQNUM,
            //发件人邮箱的授权码 
            pass: information['SENDER'].SEND_AuthorizationCode
        }
    })

    // 配置收件人信息
    const receiver = {
        from: information['SENDER'].SEND_NICKNAME,
        subject: information['SENDER'].SEND_SUBJECT,
        to: information['RECIPIENT'].RECEIVE_QQNUM,
        html: `
    <div class="container">
    <div class="author">${showInfo.copyRight}</div>
    <div class="sweet">
        <div>
        ${time}</br>${showInfo.sweet}
        </div>
    </div>
    </div>
    <style>
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0%;
    left: 0%;
    background: url("http://bing.getlove.cn/bingImage") center no-repeat;

}

.author {
    width: 80vw;
    height: 20vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc((100vh - 20vh)/2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5f6fa;
    font-size: 1.3rem;
    user-select: none;
}

.sweet {
    width: 100vw;
    height: 25vh;
    position: absolute;
    bottom: 0%;
    background-color: rgb(220, 221, 225, 0.5);
    color: #f5f6fa;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5vw;
    user-select: none;
    font-family: 'Ubuntu', sans-serif;
    overflow: hidden;
}

.sweet div {
    width: 90vw;
    height: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}
    </style>
    `
    }
    transporter.sendMail(receiver, (error, info) => {
        if (error) {
            return console.log('发送失败:', error);
        }
        transporter.close()
        console.log('发送成功:', info.response)
    })

}
// 使用node-schedule模块来实现自动触发功能
function regularlyPerform() {
    // 自定义执行时间
    schedule.scheduleJob({ hour: 8, minute: 25 }, function () {
        console.log('定时任务已被执行', new Date());
        getSweet();
        getImgInfo();
        setTimeout(() => {
            sendEmail();
        }, 500)
        schedule.gracefulShutdown();
    })


}
regularlyPerform();





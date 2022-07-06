import { API, DOMS, DEFAULT } from './config';
const instance = axios.create();
let time = getTime();
let index = Math.floor(Math.random() * 3);
// 获得每日情话接口
window.onload = function () {
    getImgInfo();
    getSweet()
};
function getSweet() {
    instance.get(`${API['SWEET']}`, {
        timeout: 3000
    }).then((response) => {
        if (response.data.code == 1) {
            defaultFun(true, response)
        } else {
            defaultFun(false);
        }
        console.log('response', response)
    }).catch((err) => {
        console.log('err', err);
        defaultFun(false);
    })
};
// 获取日期和星期
function getTime() {
    const today = new Date().toLocaleDateString();
    const weekday = new Date().toLocaleString("default", { weekday: "long" })
    return `今天是${today},${weekday}`
}
// 文字接口调取后的默认操作
function defaultFun(param, response) {
    if (param) {
        DOMS['SWEET_INFO'].innerHTML = `${time}</br></br>${response.data.content}`
    } else {
        DOMS['SWEET_INFO'].innerHTML = `${time}</br></br>${DEFAULT[index].DEFAULT_SWEET}`
    }

}
// 获得版权接口
function getImgInfo() {
    instance.get(API['BINGIMG'], {
        timeout: 3000
    }).then(response => {
        if (response.status = 200) {
            DOMS['AUTHOR'].innerHTML = `${response.data[0].copyright}`
            console.log('response', response)
        }
    }).catch(err => {
        console.log('err', err)
        DOMS['AUTHOR'].innerHTML = `${DEFAULT[3].DEFAULT_TITLE}`
    })
}




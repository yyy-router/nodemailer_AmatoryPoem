const API = {
    BINGIMG: 'http://bing.getlove.cn/latelyBingImageStory',
    SWEET: 'https://api.uomg.com/api/rand.qinghua?format=json'
}
const DOMS = {
    AUTHOR: document.querySelector('.author'),
    SWEET_INFO: document.querySelector('.sweet div')
}
const DEFAULT = [
    {
        DEFAULT_SWEET: '你知道我的缺点是什么吗? 是缺点你。'
    },
    {
        DEFAULT_SWEET: '你知道你和星星有什么区别吗?星星在天上，你在我心里。'
    },
    {
        DEFAULT_SWEET: '别让我看见你，不然我见你一次，就喜欢你一次。'
    },
    {
        DEFAULT_TITLE: '陪你一起看世界!'
    }
]
export {
    API,
    DOMS,
    DEFAULT
}
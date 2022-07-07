# nodemailer_AmatoryPoem
##### 此项目分为前端和后端两个部分

> 文件结构：
>
> ```
> client存放的为前端文件；
> server存放的为后端文件。
> ```
>
> 使用方法：
>
> ```
> 在server文件中，前端部分又被重构了一遍，因此后端项目可以独立运行。
> ```
>
> 使用步骤：
>
> ```
> 克隆项目：git clone 项目地址
> 进入项目根目录：（分别进入前后端项目根目录）
> 安装依赖：npm install
> ```
>
> 配置信息：
>
> ```
> 在server中的src文件下的config.js文件中需要进行相关的数据配置
> ```
>
> 启动服务：
>
> ```
> 前端：npm run dev
> 后端：node index.js
> ```

##### 实现功能

> 使用nodemailer实现自动发送邮件功能；
>
> 使用axios请求了必应每日壁纸介绍接口和每日情话接口数据；
>
> 使用node-schedule实现了定时发送邮件功能；
>
> 背景图片使用了必应每日壁纸接口；
>
> 发送的邮件网页做了移动端的适配。

##### 部署项目：

>该项目可以部署到云函数或者服务器上，这样就实现了每日推送。

##### 使用接口：

> [必应每日壁纸](http://bing.getlove.cn/bingImage)
>
> [必应每日壁纸介绍](http://bing.getlove.cn/latelyBingImageStory)
>
> [每日情话接口](https://api.uomg.com/api/rand.qinghua?format=json)


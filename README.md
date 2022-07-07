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

>项目可以部署到云函数或者服务器上，这样就实现了每日推送。
>
>我以云服务器为例：

> 服务器安装node：
>
> ```
> 下载官方文件
> wget https://nodejs.org/dist/v14.17.1/node-v14.17.1-linux-x64.tar.xz
> 解压
> tar xf node-v14.17.1-linux-x64.tar.xz
> 查看版本
> ./node-v14.17.1-linux-x64/bin/node -v
> 移动文件夹
> mv node-v14.17.1-linux-x64 /usr/local/node-v
> 设置软连接
> ln -s /usr/local/node-v/bin/node /bin/node
> ln -s /usr/local/node-v/bin/npm /bin/npm
> 检查是否安装完成
> npm -v
> ```
>
> 利用npm安装forever库(此库用来让js脚本一直保持运行状态)：
>
> ```
> npm install forever -g
> ```
>
> 将该项目中的server文件传到服务器上，我这里使用的是WinSCP。
>
> 切入到server文件目录下，执行如下命令：
>
> ```
> forever index.js
> ```
>
> 此时项目便运行起来，forever具体用法可自行学习
>
> ```
> forever常用命令：
> forever start [程序名]		启动程序
> forever stop [程序名]		关闭程序
> forever list			  查看所有已启动的程序
> ```

##### 使用接口：

> [必应每日壁纸](http://bing.getlove.cn/bingImage)
>
> [必应每日壁纸介绍](http://bing.getlove.cn/latelyBingImageStory)
>
> [每日情话接口](https://api.uomg.com/api/rand.qinghua?format=json)


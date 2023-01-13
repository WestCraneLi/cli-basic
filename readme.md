# 介绍
cli开发学习
# 安装
```npm install```
# 运行
```clib```
# 详情
* ```case```文件夹，存放一下cli交互的案例
# 注意
由于```node```环境下，默认用```commonJS```语法，也就是用```require```导包，但目前很多npm包都更新成用```import```导包，二者如果用混用，可以使用一下解决方法，变动```require```,然后用```esm```语法，具体如下
* ```package.json```配置```type:module```,表明用```esm```语法
* ```require```替代如下
  * ```import { createRequire } from 'module';```
  * ```const require = createRequire(import.meta.url);```
  * ```const xxx = require('包名')```
```inquirer```、```chalk```、```ora```使用不是最新版本，为了兼容使用require
不过由于使用了esm语法，有些commonJS语法下的内容可能用不了，如__dirname，具体看**参考内容**
# 参考
* [Node.js 升级包到最新版本后，让 import 和 require 在一个文件中混用](https://www.jianshu.com/p/b473c7befa52)
* [ES Modules 中的 __dirname 和 __filename](https://www.jianshu.com/p/142c3fac22fc)
* [前端亮点 or 提效？从开发一款 Node CLI 开始！](https://juejin.cn/post/7178666619135066170)
* [从 0 构建自己的脚手架/CLI知识体系（万字） 🛠](https://juejin.cn/post/6966119324478079007)
* [怎样开发一个 Node.js 命令行工具包](https://mp.weixin.qq.com/s/xoYQeUhNSxXhAc3_l9xRJA)

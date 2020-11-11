## 1 说说 PROMISE?

<font size=4>
<font size=4>
&emsp;&emsp;Promise 是异步编程的解决方案，用来解决我们日常开发中常见的回调地狱问题。

&emsp;&emsp;Promise 对象有三种状态，分别是 pending、resolved/fulfilled、rejected，pending 状态代表初始化或者进行中，resolved 代表成功，rejected 代表失败。Promise 对象 的状态只能被更改一次。Promise 对象的实例有很多方法，比如 then、catch、finally。 then 方法接受两个回调函数，成功调用第一个，失败调用第二个。then 方法返回的也 是一个 Promise 实例，返回的状态有几种可能:
<font size=4>

- 1. 如果没有返回值或者返回的不是一个 promise，就是成功
- 2. 如果返回的是一个失败的 promise 或者抛错，就是失败
- 3. 其他情况是成功

&emsp;&emsp;catch 接受一个失败的回调函数，当上一个 promise 状态是失败的时候，会触发这个回 调函数，并传入相应的参数，catch 的返回值和 then 是一样的
finally 是无论成功还是失败都会调用这个函数

#### 说完 promise，肯定要提一下 async/await

&emsp;&emsp;sync/await 是我们异步编程的最终解决方案。await 表达式必须写在 async 函数里面， 但是 async 函数可以没有 await；await 关键字后面一般都是跟一个 Promise 对象实例， await 后面如果是一个 pending 状态的 promise，会暂停等待，不会继续往下执行代码， 如果是一个成功状态的 promise，会往下执行代码，如果是一个失败的 promise 会抛 错，await 的返回值就是 promise 实例返回的内部 value 值，我们一般建议将 await 包 在 try/catch 语法中

## 2 GET 请求和 POST 请求区别？

1.  get 请求重点在从服务器上获取资源，而 post 请求重点在向服务器发送数据
2.  get 在浏览器回退时是无害的，而 post 会再次提交请求
3.  get 请求会被浏览器主动 cache，而 post 不会，除非手动设置
4.  get 请求只能进行 url 编码，而 post 支持多种编码方式。
5.  get 请求在 url 中传送的参数是有长度限制的，而 post 没有限制
6.  对参数的数据类型，get 只接受 ASCII 字符，而 post 没有限制
7.  get 请求不安全，post 请求相对于 get 请求来说更安全一点，因为参数地址栏不可见

## 3 什么是 XSS 攻击和 CSRF 攻击？区别？如何防范？

### XSS：

&emsp;&emsp;分为持久型和非持久型

###### 持久型：

&emsp;&emsp;攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击

###### 非持久型：

&emsp;&emsp;一般通过修改 URL 参数的方式加入攻击代码，诱导用户访问链接从而进行攻击

###### 防范措施：

- 1. 可以通过转义字符的方式进行防范
- 2. CSP 方式，开启 CSP 方式：
  - 设置 HTTP Header 中的 Content-Security-Policy
  - 设置 meta 标签的方式 <meta --http-equiv="Content-Security-Policy">

### CSRF：

&emsp;&emsp;攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行响应的逻辑

###### 防范措施：

- 1. Get 请求不对数据进行修改
- 2. 不让第三方网站访问到用户 Cookie
- 3. 阻止第三方网站请求接口
- 4. 请求时附带验证信息，比如验证码或者 Token

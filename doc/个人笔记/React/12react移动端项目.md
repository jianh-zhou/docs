# react 移动端项目

## 1 准备工作

### 1 通过react脚手架下载对应的应用 create-react-app my_project

### 2 安装对应的包

- redux   状态管理工具包
- react-redux  减少redux繁琐操作的包
- redux-thunk  实现异步请求的包
- redux-devtools-extension   redux开发的调试工具
- react-router-dom   web端路由的包
- postcss-px-to-viewport  vm适配的包
- @craco/craco  可以对应用进行配置的包
- axios  ajax的封装库
- amtd-mobile  应用的ui组件库

### 3 定义redux的4个模块

-  store
- actions
- reducers
-  constants
- 在对应index.js文件中,引入对应的Provider组件,并且引入store对象,该组件将App组件包裹,并且添加一个store对象作为属性

### 4 定义对应的config文件夹,里面配置对应的routes文件,用来配置路由组件的数组,并且在App组件中引入对应的browserRouter组件用来包裹App组件的最外层组件,让所有路由组件都是它的子组件

### 5  在对应的utils文件夹中二次封装对应的axios

- 1 引入对应的axios
- 2 调用对应的create方法,并且传入一个对象,该对象中可以配置默认属性
- 3 设置请求拦截器

	- 设置token的标准写法

		- config.headers[authorization]=`Bearer${token}`

	- 可以使用两个回调函数作为参数,第一个参数是可以请求调用的回调函数,第二个回调函数时上一个请求拦截器发生错误会执行的回调函数,我们一般使用一个回调函数参数,在设置请求拦截器时,先设置的后拦截,后设置的先拦截

- 4 设置响应拦截器

	- 第一个回调函数参数

		- 判断是否功能完成,也就返回的状态码时成功的,并不是请求成功的,
		- 如果功能完成成,则返回对应的数据 return response.data.data
		- 如果只是请求成功,则返回对应具体的信息 return response.data.message

	- 第二个回调函数参数

		- 请求失败的回调函数
		- 判断错误信息是否有message描述信息
		- 如果有,则说明.是服务器返回了响应,但是是失败的

			- 401 权限不够,可能是没有token(令牌)
			- 403 禁止访问
			- 404 请求地址出错,找不到相关的资源

		- 如果没有,则说明服务器没有返回响应,可能是用户自身网络出现了问题

### 6 配置对应的carco.config.js文件,配置路径的别名和对应的style的样式配置(也就是使用vw/vh)进行适配

### 7 配置vscode自身的jsconfig.json文件,该文件的作用是,书写路径时有路径提示

### 8 在index.html文件中配置防穿透的fastclick ,并且在main.js中,引入antd-mobile的样式文件

## 2 注册时手机号码验证组件

### 1 根据antd-mobile UI库搭建对应的结构并设置对应的样式

### 2 将该verifyphoe组件配置为路由组件

### 2  根据对应的插件 re-form 进行手机号码验证,并且设置按钮是否禁用

### 3 根据对应的状态数据,让对应按钮是否禁用

### 4 封装对应的手机号码验证的api接口函数

### 5 定义对应的方法,方法内部调用对应的api接口函数.并且将关于按钮是否禁用的状态数据和对应的验证手机号码的方法传递给对应的腾讯验证的全局公共组件

## 3 腾讯云滑块全局公共组件

### 1 根据对应文档,书写对应的代码

- web端接入文档：https://cloud.tencent.com/document/product/1110/36841#.E5.AE.9E.E4.BE.8B.E6.96.B9.E6.B3.95

### 2 书写两个按钮,因为腾讯云按钮,在使用一个按钮时,会出现按钮禁用时,仍然能触发验证滑块,设置两个按钮,根据禁用的状态,显示隐藏对应的按钮

### 2 封装对应的验证滑块是否成功的api接口函数

### 2 将对应腾讯云按钮的回调函数中,调用对应的验证滑块是否成功的api函数,并且将验证手机号码是否成功的方法进行调用

## 4 跳转到对应的验证码验证界面

### 1 封装对应的发送验证码的api接口函数,

- api函数接收手机号作为参数

### 2 调用发送请求发送验证码的api接口函数

### 3 在请求成功后,跳转到对应的验证码验证界面,使用编程时导航跳转,并且将手机号码作为参数传递过去

### 4搭建对应的验证码界面

- 1 发送验证码

	- 1 设置对应的time(倒计时)和isShow(显示隐藏对应文字)
	- 2 设置一个方法,该方法内部设置一个定时器,,定时器的回调函数内部,修改状态数据,直到时间小于1,则清除定时器,然后修改对应的isShow的状态
	- 3 在组件挂载完毕后的生命周期回调函数中,调用对应的设置计时器的方法,让组件一加载就会进入倒计时
	- 4 根据isShow的值,设置显示对应文本
	- 5 根据isShow的值,设置按钮是否禁用
	- 6 为按钮绑定对应的事件,在事件回调函数中,进行发送验证码的请求,并且调用对应的计时器的方法,进行倒计时

- 2 检验输入的验证码
- 2 下一步按钮是否显示隐藏

	- 根据验证码的输入情况,进行设置按钮是否显示隐藏

## 5 跳转到对应的填写密码的界面

### 1 根据页面搭建对应的结构和书写对应的样式

### 2 设置对应的字体图标

- 设置一个状态数据,用来显示与隐藏对应图标,并且设置对应文本框的type属性

### 3 给对应文本输入框,进行规则校验,最终在规则通过时,设置对应按钮不再禁用状态

### 4 点击下一步,进行路由跳转,并且传递一个phone参数,

## 6 封装全局公共组件城市选择组件

### 1 搭建基本的结构

### 2  封装对应的请求城市数据的api接口函数

### 3 根据获取的数据对数据进行遍历展示

- 1 获取数据的所有属性值,然后进行遍历
- 2 根据每一个数据,然后对其中的数据再次进行遍历
- 3 将数据展示在页面

### 4 设置侧边选择栏

- 1 根据数据进行遍历,并且进行设置对应的样式
- 2 根据事件委托,相当于给每一个侧边栏标签设置样式,并且给对应的列表设置对应的id
- 3 根据获取到对应元素的内容,就可以获取到对应列表的id,然后就可以获取到对应元素距离文档最上边的距离,根据window.scrollTo(x,y)方法,点击对应的侧边栏标签,会跳转到对应的列表,

### 5 为每一个列表栏选项绑定一个点击事件,该事件可以跳转到对应的选择城市号码的页码,并且将当前选中的城市号码作为参数传递过去,因为我们不知道是从哪个页面传递过来的,所以我们需要在跳转到选择城市页面时,将对应的url地址作为参数传递过来.

## 7 手机号码登录

###  1 搭建对应的界面和设置的样式

### 2 验证手机号码和短信验证码输入框的输入是否规范

- 1设置两个状态数据,isCheckPhone和isCheckCode
- 2 在对应的验证表单输入的规则中,判断当前表单验证的类型,根据类型修改状态数据的值
- 3 如果两个输入都符合规范,则让对应的登录按钮可以点击

### 3 设置对应发送验证码按钮的显示与隐藏

- 1 设置状态数据isSendCode(是否发送验证码)
- 2 根据手机号码的校验结果,设置发送验证码按钮是否禁用(isCheckedPhone)
- 3 根据isSendCode的值,设置验证码按钮的文字显示
- 3 给对应的发送验证码绑定点击事件

	- 1   清除后面的定时器
	- 2 设置一个定时器

		- 在对应的定时器,中设置定时器清理的条件.并且改变isSendCode的值的对应时间的状态值

	- 3 在对应的componentWillUnmount钩子函数中,清理定时器

		- 如果不进行清理这个定时器,定时器在没有达到清理定时器的条件之前,组件被卸载了,生成的是一个新的组件,那么定时器就会一直计时

	- 4  发送请求,请求发送验证码

### 4 为对应的登录按钮绑定点击事件

- 1  获取对应的手机号码和验证码,根据 this.props.form.getFieldsValue( )
- 2 发送异步请求,验证手机号是否注册过

	- 如果注册过,再次发送请求.验证手机号和验证码是否正确,如果正确则跳转到对应的主页
	- 如果没有注册过,则跳转到对应的设置密码页面,摈并且将手机号作为路由参数传递过去

## 8 账号密码登录

### 1  搭建对应的界面和设置对应的样式

### 2  验证手机号和密码是否符合规范,如果符合规范,则让对应的登录按钮可以点击

### 3 设置对应的同步action,该action用作更改,用户登录后的信息数据

### 4 设置对应的异步action,该action用来,请求服务器,验证账号密码是否成功

- 1 发送请求,得到对应的用户数据
- 2 调用对应的action.该action接收请求回来的数据,
- 3 调用对应的dispatch方法,分发action
- 4 最终将用户信息的token值返回

### 5  添加reducers中的case,用来返回用户信息数据

### 6 在账号密码的组件中,引入高阶组件connect

### 6 给对应的登录按钮绑定点击事件

- 1 获取对应的手机号和密码
- 2 调用对应的异步action,并且接收器返回的token
- 3 将对应的token使用localstorage设置为缓存
- 4 跳转到对应的主页界面

## 9 第三方登录

### 1  在对应的登录应用中进行授权登录配置

### 2 客服端点击按钮进行登录,用户同意授权后,才能进行操作

- 给对应的按钮绑定点击事件,事件的回调函数中,使用window.location.href跳转到对应的地址请求

### 3 第三方服务器第一次会返回一个code码,状态码为302,并且直接重定向应用的服务器

### 4 应用服务器,携带code码向第三方服务器进行请求,最终第三方服务器返回一个token,应用服务器根据这个token标识再向第三方服务器请求用户信息,

### 5 应用服务器根据这个第三方返回的用户信息,注册账号,最终生成应用服务器的token,然后再返回给对应的客户端

## 10  主页组件

### 1 定义对应的异步acion,该action用来请求用户是否登录过,并且和账号密码登录使用的是同一个同步action

### 2 引入对应的connect高阶组件,并且进行使用

### 3 在对应的请求拦截器中,将缓存的token值添加到对应的请求头进行携带

- 获取token值时,使用直接读取缓存的方式,影响性能,所以我们直接利用store对象的getState方法获取到对应的token值

### 3  在组件对应的组件挂载完毕的生命周期回调函数中,调用对应的请求用户是否登录过的异步action

## BUG

### 1 使用工厂函数创建全局公共组件,在使用腾讯云滑块按钮时,使用对应的hooks上的一些方法,最终导致滑块按钮不会触发.也就是不管怎么触发,最终滑块验证都不会出现


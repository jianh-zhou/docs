# 24 less

## less

### less是一种动态样式语言，属于css预处理器的范，它扩展了 CSS 语言， 增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展 LESS 既可以在 客户端 上运行 ，也可以借助Node.js在服务端运行。

### 动态样式

- CSS是一门非程序式语言，需要书写大量没有逻辑的代码，不方便维护及扩展，不利于复用，所以出现了处理css的工具和框架

### 预处理器

- 对生成CSS前的某一语法的处理程序

## less变量

### 变量的声明

- @+名字 : 对应值;

### 变量是属性值的时候

- 直接@+名字 使用

### 变量是选择器的时候

### 变量是属性名的时候

## less 混合

### 格式很象js的函数格式

### .style( ):{对应样式 }

### 直接 .style( ) 调用

### 可以传递参数

- 传递实参

	- 最终的结果就是传递的实参值

- 形参有默认值

	- 如果没有传递实参,则以默认值为准.有的话,就是传递的实参

## less 匹配模式守卫

### 匹配

- 混合模式中的括号传递的不是参数,而是一个标记,如果标记和使用的标记一样,就使用该混合

### 重载

- 根据实参个数的多少,传入对应的混合

### 守卫

- 根据传入的数据,看符合哪一个混合,如果符合就使用,两个都符合则两个都使用

## less 其他

### less 函数

- floor( )

	- 向下取整

- ceil ( )

	- 向上取整

- 等...

### less 字符串拼接

- 在拼接时,需要将拼接后的整体加上引号

### less 转义

- 当遇到一些不能识别的字符或者样式时,我们需要加一个 ~  将其转义

## less 运算

### 可以直接进行运算,会按照有单位的一方进行转换,

### 可以计算颜色,是将转换为10进制的人rgba,进行运算,最后转换为对应形式

## less 父级引用

### 当要对自己进行引用时,如果单独出去会对嵌套结构进行污染

### 我们可以直接在对于选择器的里面进行操作,利用 & 代替的是就是当前父级

### inner :hover 与 inner:hover的区别

- 前者是给inner的所有后代添加hover悬浮特性 . 后者只是给inner元素添加hover悬浮特性


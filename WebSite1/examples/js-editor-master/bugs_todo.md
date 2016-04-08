﻿#这个文档保留已知Bug和Todo列表
##已知bug
* 当editor的父元素设置 style="postion:relative;"  的时候在chrome下面选择文本不准确。

##todo列表
* 选择文本时，如果光标已经移动到了文本可见区域下方（左、右、上），不能自动持续向下滚动以选择更多文本。必须还是要移动鼠标才行。这是因为其实现依赖mousemove事件，需要添加setInterval来实现。
* 目前的滚动条的实现有问题，原生的滚动条宽度在不同分辨率的显示器上不兼容。同时不能自己改变滚动条颜色风格，考虑自己重写实现。
* 其它语言高亮、其它主题。demo页面。
* 查找替换。
* 自动补全括号、大括号、自动缩进、撤销、重做。
* 双击单词后将相同的单词高亮（类似notepad++）。【两种设计：1、在render的paint函数里每次paint在当前可视区域内进行查找（优点是查找时间短，缺点是每次paint查找频繁）2、直接查找整个文本（优缺点相反）】
* 智能提示（下个版本）
* chrome 下面打开中文输入法后有问题（拼音总是会出现在input中，会触发input事件，暂时没有找到办法处理）。

##其它说明
* firefox不能完美实现复制粘贴功能。具体来说，不能将文本粘贴到系统Clipboard上，这个是由于firefox本身的限制。目前的实现是伪剪贴板（见clipboard.js代码），只在当前编辑器里可以复制粘贴（其它浏览器中没有这个限制）。考虑到firefox还是有从外部粘贴文本的需要，如果用户没有进行过复制操作，（伪剪贴板上数据为空），则在paste事件中不会阻止事件，caret仍然可以得到数据，这时候就会转到caret的input事件中将外部文本插入；如果伪剪贴板上数据不为空，则用户无法粘贴系统clipboard上的数据。
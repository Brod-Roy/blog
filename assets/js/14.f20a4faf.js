(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{413:function(t,a,e){"use strict";e.r(a);var s=e(2),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("---")]),t._v(" "),a("p",[t._v("title: Uniapp（小程序）页面回退时触发提示")]),t._v(" "),a("p",[t._v("date: 2022-11-05")]),t._v(" "),a("p",[t._v("categories:")]),t._v(" "),a("p",[t._v("- 前端学习")]),t._v(" "),a("p",[t._v("tags:")]),t._v(" "),a("p",[t._v("- uniapp")]),t._v(" "),a("p",[t._v("---")]),t._v(" "),a("h1",{attrs:{id:"uniapp-小程序-页面回退时触发提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp-小程序-页面回退时触发提示"}},[t._v("#")]),t._v(" Uniapp（小程序）页面回退时触发提示")]),t._v(" "),a("blockquote",[a("p",[t._v("当页面存在需要用户填写的表单时，我们需要考虑是否存在用户不小心回退页面的问题。这将导致用户输入的数据都被销毁，用户的体验感极差。")]),t._v(" "),a("p",[t._v("在小程序中，我们无需使用复杂的方法对页面的回退进行监听，小程序中提供了 "),a("code",[t._v("wx.enableAlertBeforeUnload()")]),t._v(" 方法对页面回退进行监听，以下便是其具体的用法。")]),t._v(" "),a("p",[t._v("官方文档："),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.enableAlertBeforeUnload.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.enableAlertBeforeUnload(Object object)"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"wx-enablealertbeforeunload-object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-enablealertbeforeunload-object-object"}},[t._v("#")]),t._v(" wx.enableAlertBeforeUnload(Object object)")]),t._v(" "),a("h3",{attrs:{id:"功能描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),a("p",[t._v("开启小程序页面返回询问对话框。")]),t._v(" "),a("h3",{attrs:{id:"弹窗条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹窗条件"}},[t._v("#")]),t._v(" 弹窗条件")]),t._v(" "),a("ul",[a("li",[t._v("当用户在小程序内非首页页面/最底层页")]),t._v(" "),a("li",[t._v("官方导航栏上的的返回")]),t._v(" "),a("li",[t._v("全屏模式下自绘返回键")]),t._v(" "),a("li",[t._v("android 系统 back 键时")])]),t._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[t._v("手势滑动返回时不做拦截")]),t._v(" "),a("li",[t._v("在任何场景下，此功能都不应拦住用户退出小程序的行为")])]),t._v(" "),a("h3",{attrs:{id:"参数-object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-object-object"}},[t._v("#")]),t._v(" 参数：Object object")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("询问对话框内容")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disableAlertBeforeUnload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对话框内的内容'")]),t._v("，\n    success："),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fail："),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    complete："),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"wx-disablealertbeforeunload-object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-disablealertbeforeunload-object-object"}},[t._v("#")]),t._v(" wx.disableAlertBeforeUnload(Object object)")]),t._v(" "),a("blockquote",[a("p",[t._v("当设置了 "),a("code",[t._v("wx.enableAlertBeforeUnload()")]),t._v(" 后，我们无论在何种情况下回退都将触发监听。这就意味着，即便我们成功提交表单后，也还是会触发监听。为了避免提交时被监听，我们就需要在提交完成回退前取消监听。小程序为我们提供了 "),a("code",[t._v("wx.disableAlertBeforeUnload()")]),t._v(" 方法来取消监听。")])]),t._v(" "),a("h3",{attrs:{id:"功能描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能描述-2"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),a("p",[t._v("关闭小程序页面返回询问对话框。")]),t._v(" "),a("h3",{attrs:{id:"参数-object-object-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-object-object-2"}},[t._v("#")]),t._v(" 参数：Object object")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);
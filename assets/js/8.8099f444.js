(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(t,_,v){"use strict";v.r(_);var a=v(42),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"考试系统重构-学生端-接口文档-初版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#考试系统重构-学生端-接口文档-初版"}},[t._v("#")]),t._v(" 考试系统重构（学生端）接口文档（初版）")]),t._v(" "),v("h3",{attrs:{id:"登录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),v("h4",{attrs:{id:"_1-登录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-登录"}},[t._v("#")]),t._v(" 1. 登录")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("url")]),t._v(" "),v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/login")]),t._v(" "),v("td",[t._v("POST")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("request:（输入参数）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("login")]),t._v(" "),v("td",[t._v("用户名（手机号，用户名，身份证，邮箱...）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("pwd")]),t._v(" "),v("td",[t._v("密码")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("response:（返回参数）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("caid")]),t._v(" "),v("td",[t._v("一体化用户唯一标识（eg: 20b8246b845a44d780a892a31d5e12ad）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("token")]),t._v(" "),v("td",[t._v("eg: DA7065994FC0710A7E951D55F98CB543DD55AFB3")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("errorCode")]),t._v(" "),v("td",[t._v("报错码")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("errorMessage")]),t._v(" "),v("td",[t._v("报错信息")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("result")]),t._v(" "),v("td",[t._v("返回状态")]),t._v(" "),v("td",[t._v("string('true'; 'false')")])]),t._v(" "),v("tr",[v("td",[t._v("userInfo")]),t._v(" "),v("td",[t._v("用户信息")]),t._v(" "),v("td",[t._v("object")])])])]),t._v(" "),v("h3",{attrs:{id:"基本信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),v("h4",{attrs:{id:"_1-用户信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户信息"}},[t._v("#")]),t._v(" 1. 用户信息")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("url")]),t._v(" "),v("th",[t._v("方法")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/userHome")]),t._v(" "),v("td",[t._v("POST")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("request: (输入参数)")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th",[t._v("类型")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("token")]),t._v(" "),v("td",[t._v("登录授权码")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("caid")]),t._v(" "),v("td",[t._v("一体化用户ID")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("settype")]),t._v(" "),v("td",[t._v("考试默认选择一体化机构角色规则类型：默认为3     0:默认加载上一次的用户操作 应用场景：之前选择了3:默认选择质量较高的机构和学生角色 应用场景：书包登录，默认学生")]),t._v(" "),v("td",[t._v("string")])])])]),t._v(" "),v("p",[t._v("response: (返回参数)")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th",[t._v("类型")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("result")]),t._v(" "),v("td",[t._v("执行结果（true;  false）")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("errorMessage")]),t._v(" "),v("td",[t._v("错误信息")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("userInfo")]),t._v(" "),v("td",[t._v("用户信息详情")]),t._v(" "),v("td",[t._v("object/json")])]),t._v(" "),v("tr",[v("td",[t._v("institutes")]),t._v(" "),v("td",[t._v("用户机构列表")]),t._v(" "),v("td",[t._v("array")])]),t._v(" "),v("tr",[v("td",[t._v("token")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("caid")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")])])])]),t._v(" "),v("p",[t._v("userInfo：（用户信息详情）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th",[t._v("type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("用户名")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("complete")]),t._v(" "),v("td",[t._v("是否完善信息")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("account")]),t._v(" "),v("td",[t._v("账号")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("cellphone")]),t._v(" "),v("td",[t._v("手机号")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("identificationNumber")]),t._v(" "),v("td",[t._v("身份证号")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("genderCode")]),t._v(" "),v("td",[t._v("性别")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("referenceYear")]),t._v(" "),v("td",[t._v("参培年份")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("confirmStatus")]),t._v(" "),v("td",[t._v("基础信息确认状态")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("imgStatus")]),t._v(" "),v("td",[t._v("图像采集状态")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("imgUrl")]),t._v(" "),v("td",[t._v("图像链接")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("majorCode")]),t._v(" "),v("td",[t._v("一体化专业编码")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("majorName")]),t._v(" "),v("td",[t._v("一体化专业名称")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("departments")]),t._v(" "),v("td",[t._v("所属科室信息")]),t._v(" "),v("td",[t._v("[]json")])]),t._v(" "),v("tr",[v("td",[t._v("openTerminal")]),t._v(" "),v("td",[t._v("是否开通手机终端授权")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("faceDetect")]),t._v(" "),v("td",[t._v("是否开通人脸识别")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("bankIds")]),t._v(" "),v("td",[t._v("授权题库")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("instituteId")]),t._v(" "),v("td",[t._v("一体化组织id")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("instituteCode")]),t._v(" "),v("td",[t._v("一体化机构编码")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("instituteName")]),t._v(" "),v("td",[t._v("一体化机构名称")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("roleCode")]),t._v(" "),v("td",[t._v("考试中角色编码")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("accountId")]),t._v(" "),v("td",[t._v("一体化用户id")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("isHasAuthority")]),t._v(" "),v("td",[t._v("是否有考试授权")]),t._v(" "),v("td",[t._v("string")])])])]),t._v(" "),v("p",[t._v("institutes: （用户机构列表）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th",[t._v("type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("instituteId")]),t._v(" "),v("td",[t._v("一体化机构id")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("一体化机构名称")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("instituteCode")]),t._v(" "),v("td",[t._v("一体化机构code")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("endDate")]),t._v(" "),v("td",[t._v("授权过期时间")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("selected")]),t._v(" "),v("td",[t._v("是否选中")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("roles")]),t._v(" "),v("td",[t._v("机构内用户角色")]),t._v(" "),v("td",[t._v("[]object")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h4",{attrs:{id:"_2-修改密码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改密码"}},[t._v("#")]),t._v(" 2. 修改密码")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("url")]),t._v(" "),v("th",[t._v("method")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/changePwd")]),t._v(" "),v("td",[t._v("POST")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("request: (请求参数)")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th",[t._v("type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("token")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("caid")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("pwd")]),t._v(" "),v("td",[t._v("原密码")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("newPwd")]),t._v(" "),v("td",[t._v("新密码")]),t._v(" "),v("td",[t._v("string")])])])]),t._v(" "),v("p",[t._v("response: (返回)")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("注解")]),t._v(" "),v("th",[t._v("type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("result")]),t._v(" "),v("td",[t._v("请求状态")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("message")]),t._v(" "),v("td",[t._v("返回信息")]),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h4",{attrs:{id:"_3-退出"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-退出"}},[t._v("#")]),t._v(" 3. 退出")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("url")]),t._v(" "),v("th",[t._v("method")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/logout")]),t._v(" "),v("td",[t._v("POST")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("request:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("des")]),t._v(" "),v("th",[t._v("type")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("token")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")])]),t._v(" "),v("tr",[v("td",[t._v("caid")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("string")])])])]),t._v(" "),v("h3",{attrs:{id:"首页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[t._v("#")]),t._v(" 首页")]),t._v(" "),v("h4",{attrs:{id:"_1-统计中心"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-统计中心"}},[t._v("#")]),t._v(" 1. 统计中心")]),t._v(" "),v("h4",{attrs:{id:"_2-我的考试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-我的考试"}},[t._v("#")]),t._v(" 2. 我的考试")]),t._v(" "),v("h4",{attrs:{id:"_3-每日一练"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-每日一练"}},[t._v("#")]),t._v(" 3. 每日一练")]),t._v(" "),v("h4",{attrs:{id:"_4-练习记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-练习记录"}},[t._v("#")]),t._v(" 4. 练习记录")]),t._v(" "),v("h4",{attrs:{id:"_5-易错知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-易错知识点"}},[t._v("#")]),t._v(" 5. 易错知识点")]),t._v(" "),v("h3",{attrs:{id:"考试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#考试"}},[t._v("#")]),t._v(" 考试")]),t._v(" "),v("h4",{attrs:{id:"_1-当前考试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-当前考试"}},[t._v("#")]),t._v(" 1. 当前考试")]),t._v(" "),v("h5",{attrs:{id:"_0-考试列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-考试列表"}},[t._v("#")]),t._v(" 0. 考试列表")]),t._v(" "),v("h5",{attrs:{id:"_1-信息确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-信息确认"}},[t._v("#")]),t._v(" 1. 信息确认")]),t._v(" "),v("h5",{attrs:{id:"_2-开始考试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-开始考试"}},[t._v("#")]),t._v(" 2. 开始考试")]),t._v(" "),v("h6",{attrs:{id:"_1-获取试卷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取试卷"}},[t._v("#")]),t._v(" 1. 获取试卷")]),t._v(" "),v("h6",{attrs:{id:"_2-验证解锁码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证解锁码"}},[t._v("#")]),t._v(" 2. 验证解锁码")]),t._v(" "),v("h6",{attrs:{id:"_3-提交试卷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交试卷"}},[t._v("#")]),t._v(" 3. 提交试卷")]),t._v(" "),v("h4",{attrs:{id:"_2-获取试卷-考试码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取试卷-考试码"}},[t._v("#")]),t._v(" 2. 获取试卷（考试码）")]),t._v(" "),v("h4",{attrs:{id:"_3-信息采集-获取"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-信息采集-获取"}},[t._v("#")]),t._v(" 3. 信息采集（获取）")]),t._v(" "),v("h4",{attrs:{id:"_4-信息采集-提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-信息采集-提交"}},[t._v("#")]),t._v(" 4. 信息采集（提交）")]),t._v(" "),v("h4",{attrs:{id:"_5-考前问卷-提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-考前问卷-提交"}},[t._v("#")]),t._v(" 5. 考前问卷（提交）")]),t._v(" "),v("h4",{attrs:{id:"_6-考前签到-地理位置-人脸"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-考前签到-地理位置-人脸"}},[t._v("#")]),t._v(" 6. 考前签到（地理位置 + 人脸）")]),t._v(" "),v("h4",{attrs:{id:"_7-首次信息采集与确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-首次信息采集与确认"}},[t._v("#")]),t._v(" 7. 首次信息采集与确认")]),t._v(" "),v("h4",{attrs:{id:"_8-考试记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-考试记录"}},[t._v("#")]),t._v(" 8. 考试记录")]),t._v(" "),v("h5",{attrs:{id:"_0-记录列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-记录列表"}},[t._v("#")]),t._v(" 0. 记录列表")]),t._v(" "),v("h5",{attrs:{id:"_1-查看考试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看考试"}},[t._v("#")]),t._v(" 1. 查看考试")]),t._v(" "),v("h5",{attrs:{id:"_2-考试分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-考试分析"}},[t._v("#")]),t._v(" 2. 考试分析")]),t._v(" "),v("h3",{attrs:{id:"练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),v("h4",{attrs:{id:"_1-学科练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-学科练习"}},[t._v("#")]),t._v(" 1. 学科练习")]),t._v(" "),v("h5",{attrs:{id:"_1-随机练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-随机练习"}},[t._v("#")]),t._v(" 1. 随机练习")]),t._v(" "),v("h6",{attrs:{id:"_1-练习列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-练习列表"}},[t._v("#")]),t._v(" 1. 练习列表")]),t._v(" "),v("p",[t._v("​    2. 开始练习")]),t._v(" "),v("h5",{attrs:{id:"_2-章节练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-章节练习"}},[t._v("#")]),t._v(" 2. 章节练习")]),t._v(" "),v("h6",{attrs:{id:"_1-练习列表-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-练习列表-2"}},[t._v("#")]),t._v(" 1. 练习列表")]),t._v(" "),v("p",[t._v("​    2. 开始练习")]),t._v(" "),v("h5",{attrs:{id:"_3-同步测验"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-同步测验"}},[t._v("#")]),t._v(" 3. 同步测验")]),t._v(" "),v("h6",{attrs:{id:"_1-测验列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-测验列表"}},[t._v("#")]),t._v(" 1. 测验列表")]),t._v(" "),v("h6",{attrs:{id:"_2-开始测验"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-开始测验"}},[t._v("#")]),t._v(" 2. 开始测验")]),t._v(" "),v("h5",{attrs:{id:"_4-查找试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-查找试题"}},[t._v("#")]),t._v(" 4. 查找试题")]),t._v(" "),v("h5",{attrs:{id:"_5-答题记录提交-答案-收藏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-答题记录提交-答案-收藏"}},[t._v("#")]),t._v(" 5. 答题记录提交(答案+ 收藏)")]),t._v(" "),v("h5",{attrs:{id:"_6-纠错-获取试题是否纠过错"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-纠错-获取试题是否纠过错"}},[t._v("#")]),t._v(" 6. 纠错（获取试题是否纠过错）")]),t._v(" "),v("h5",{attrs:{id:"_7-提交纠错信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-提交纠错信息"}},[t._v("#")]),t._v(" 7. 提交纠错信息")]),t._v(" "),v("h4",{attrs:{id:"_2-测试练习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试练习"}},[t._v("#")]),t._v(" 2. 测试练习")]),t._v(" "),v("h5",{attrs:{id:"_1-练习结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-练习结构"}},[t._v("#")]),t._v(" 1. 练习结构")]),t._v(" "),v("h4",{attrs:{id:"_3-历年习题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-历年习题"}},[t._v("#")]),t._v(" 3. 历年习题")]),t._v(" "),v("h5",{attrs:{id:"_1-习题结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-习题结构"}},[t._v("#")]),t._v(" 1. 习题结构")]),t._v(" "),v("h3",{attrs:{id:"我的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#我的"}},[t._v("#")]),t._v(" 我的")]),t._v(" "),v("h4",{attrs:{id:"_1-我的错题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-我的错题"}},[t._v("#")]),t._v(" 1. 我的错题")]),t._v(" "),v("h5",{attrs:{id:"_1-错题列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-错题列表"}},[t._v("#")]),t._v(" 1. 错题列表")]),t._v(" "),v("h5",{attrs:{id:"_2-删除试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除试题"}},[t._v("#")]),t._v(" 2. 删除试题")]),t._v(" "),v("h4",{attrs:{id:"_2-我的收藏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-我的收藏"}},[t._v("#")]),t._v(" 2. 我的收藏")]),t._v(" "),v("h5",{attrs:{id:"_1-收藏列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-收藏列表"}},[t._v("#")]),t._v(" 1. 收藏列表")]),t._v(" "),v("h4",{attrs:{id:"_3-我的笔记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-我的笔记"}},[t._v("#")]),t._v(" 3. 我的笔记")]),t._v(" "),v("h5",{attrs:{id:"_1-笔记列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-笔记列表"}},[t._v("#")]),t._v(" 1. 笔记列表")]),t._v(" "),v("h4",{attrs:{id:"_4-答题统计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-答题统计"}},[t._v("#")]),t._v(" 4. 答题统计")]),t._v(" "),v("h5",{attrs:{id:"_1-统计信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-统计信息"}},[t._v("#")]),t._v(" 1. 统计信息")]),t._v(" "),v("h4",{attrs:{id:"_5-已购试卷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-已购试卷"}},[t._v("#")]),t._v(" 5. 已购试卷")]),t._v(" "),v("h5",{attrs:{id:"_1-试卷列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-试卷列表"}},[t._v("#")]),t._v(" 1. 试卷列表")]),t._v(" "),v("h3",{attrs:{id:"帮助"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#帮助"}},[t._v("#")]),t._v(" 帮助")]),t._v(" "),v("h3",{attrs:{id:"通关包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通关包"}},[t._v("#")]),t._v(" 通关包")]),t._v(" "),v("h3",{attrs:{id:"医视在线-对接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#医视在线-对接"}},[t._v("#")]),t._v(" 医视在线（对接）")]),t._v(" "),v("h3",{attrs:{id:"年度考核-对接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#年度考核-对接"}},[t._v("#")]),t._v(" 年度考核（对接）")])])}),[],!1,null,null,null);_.default=r.exports}}]);
# imageUploader

---

<!-- [![Build Status](https://secure.travis-ci.org/aralejs/imageUploader.png)](https://travis-ci.org/seedit/imageUploader)
[![Coverage Status](https://coveralls.io/repos/aralejs/imageUploader/badge.png?branch=master)](https://coveralls.io/r/seedit/imageUploader) -->


站内上传组件

---

## 使用说明

为兼容CMS跨域上传使用了`flash`，使用接口：`http://image.seedit.com/upload.php`

## 方法


### simpleUploader`({trigger:$trigger,type:$type,callback:$callback[,option:$option]})`

参数：

+ `api` `可选`,默认为线上接口，测试时请使用`http://image.office.bozhong.com/upload.php`
+ `trigger`   触发选择器
+ `callback`  回调函数,参数为`API`返回信息,详细参见[CMS文档](https://a.seedit.cn/admin/doc/index/index/common_app/upload.md)
+ `type`      保存类型，`可选`，默认为`cms`,根据上传接口文档，可选的有 `app cms app_avatar user`
+ `option`    swfupload 参数，`可选`，

---
注：上面callback回调函数参数形式为：
```javascript
{
  "error_code": 0,
  "data": {
      "url": string
  }
}
```
---

### customUploader`(option)`

支持完全自定义swfupload参数

参数

+ `swfupload`参数

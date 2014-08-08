# 演示文档

---
<style>
    #test {border-radius:2px;border:1px solid #ececec;}
</style>

## 单个图片自动上传

````html
<!--设置上传按钮标签-->
<button id="test"></button>
````

<div id="test_out"></div>

````javascript
seajs.use(['src/uploader','jquery'], function(imageUploader,$) {
        var uploader = imageUploader.simpleUploader({
            api:'http://image.seedit.com/upload.php',// 使用测试环境的api
            trigger: 'test', // 上传按钮
            callback: function(data) { // 回调函数
                $('#test_out').html('<br/>上传成功，地址是:' + '<br/><code>'+data.data.url+'</code>');
            }
        });
});

````
## 复杂的自定义参数上传
待完善
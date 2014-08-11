var $ = require('jquery');
var JSON = require('json');
var SWFUpload = require('swf-upload');

var STATIC = "http://scdn.bozhong.com/source/";
var imageUploader;
var simpleUploader;
var defaultOption = {
    upload_url: "http://image.seedit.com/upload.php",
    flash_url: STATIC + "common/ui/imageUploader/src/swfupload.swf",
    file_size_limit: "8 MB",
    post_params: {
        "class": "cms"
    },
    file_types: "*.jpg;*.png;*.gif",
    file_types_description: "请选择图片文件",
    button_width: 72,
    button_height: 23,
    file_post_name: "file",
    button_image_url: STATIC + "common/ui/imageUploader/src/button.png"
};

var option = {
    custom_settings: {
        progressTarget: "x-upload-progress"
    },
    // 选择文件后
    fileQueued: function(file) {},
    /* fileDialogComplete: function(selected, queued, total) {
                console.log(selected, queued, total);
            },*/
    // 上传进度查询
    upload_progress_handler: function(file, uploaded, all) {},
    //上传完成
    upload_success_handler: function(file, data, receiveResponse) {
        data = JSON.parse(data);
    }
};
$.extend(option, defaultOption);
simpleUploader = function(opt) {
    var option2 = $.extend({}, option);
    var target = opt.trigger;
    var callback = opt.callback;
    var type = opt.type || "cms";
    var api = opt.api;
    $.extend(option2, {
        upload_url: api,
        button_placeholder_id: target,
        post_params: {
            "class": type
        },
        upload_success_handler: function(file, data) {
            data = JSON.parse(data);
            callback(data);
        },
        file_dialog_complete_handler: function(numFilesSelected, numFilesQueued) {
            this.startUpload();
            try {
                this.startUpload();
            } catch (ex) {
                this.debug(ex);
            }
        }
    });
    // 如果还有swfupload设置
    if (opt.option) {
        $.extend(option2, opt.option);
    }
    return new SWFUpload(option2);
};


module.exports = {
    // 自动上传一个图片
    simpleUploader: simpleUploader,
    customUploader: function(options) {
        $.extend(option, options);
        return new SWFUpload(option);
    }
};
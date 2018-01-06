//JS For FloatButton to goTop, goBottom and refresh
function getCookie(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
}

function getAlertHtml(category, message) {
    var s = '<div class="alert alert-'+category+' alert-dismissable" id="fix-alert">'+
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+
            message+'</div>';
    return s;
}

function alertXtg(category, message, timeout) {
    s = getAlertHtml(category, message);
    $('body').append(s);
    if(timeout) {
        setTimeout(function () {
            $('#fix-alert').remove();
        }, timeout);
    }
}

function codeHighLight() {
    if(typeof(hljs) != "undefined" ) {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }
}

function fileUploadExl(){
    var formData = new FormData();
    var Url = "";
    var name = "uploadExl";
    formData.append("file",$("#uploadExl")[0].files[0]);
    formData.append("name",name);

    $.ajax({ 
    url : Url, 
    type : 'POST', 
    data : formData, 
    // 告诉jQuery不要去处理发送的数据
    processData : false, 
    // 告诉jQuery不要去设置Content-Type请求头
    contentType : false,
    beforeSend:function(){
    console.log("正在进行，请稍候");
    },
    success : function(responseStr) { 
    if(responseStr.status===0){
    console.log("成功"+responseStr);
    }else{
    console.log("失败");
    }
    }, 
    error : function(responseStr) { 
    console.log("error");
    } 
    });
}



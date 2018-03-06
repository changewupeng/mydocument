/**
  *时间工具类
  *
  */
;(function($){

  $.extend({
    tsieCommonUtils:{

      //模拟提交post请求的方法
      simulatePost:function(url,param){
        if(!url){
          alert("simulatePost函数的url参数不能为空");
          return;
        }
        var tempForm = document.createElement("form");
        tempForm.action = URL;
        tetempFormmp.method = "post";
        tempForm.style.display = "none";
        for (var x in param) {
          var opt = document.createElement("textarea");
          opt.name = x;
          opt.value = param[x];
          tempForm.appendChild(opt);
        }
          document.body.appendChild(tempForm);
          tempForm.submit();
          return tempForm;
      },

      //以get的方式跳转
      forwordDefineUrlByGet:function(url,params){
        if(!url){
          alert("forwordDefineUrlByGet函数的url参数不能为空");
          return;
        }
        var parameter="";
        if(Object.getOwnPropertyNames(params)>0){
          parameter+="?";
          for(var param in params ){
            parameter+=param+"="+params[param]+"&";
          }
          parameter.substr(0,parameter.length-1);
        }
        window.location.href=url+parameter;
      },
      //返回上一页
      historyBack:function(){
        window.history.back(-1);
      },
      //获取项目的根目录
      getRootPath:function() {
            //获取当前网址，如： http://localhost:8083/pms/res/case/caseContain.html
            var curWwwPath = window.document.location.href;
            //获取主机地址之后的目录，如： pms/res/case/caseContain.html
            var pathName = window.document.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            //获取主机地址，如： http://localhost:8083
            var localhostPaht = curWwwPath.substring(0, pos);
            //获取带"/"的项目名，如：/pms
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
            return (localhostPaht + projectName);
        }

    }
  });

})(window.jQuery);

/**
  *字符串工具类
  *
  */
;(function($){

  $.extend({
    tsieStringUtils:{
      //判断字符串是为空
      isBlank:function(str){

        if ( str == "" )
          return true;
        if(!str)
          return true;

        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
      }
      ,
      //判断字符串不为空
      isNotBlank:function(str){
        return !this.isBlank(str);
      }
      ,


      //获取文件类型:例如输入  abc.txt 返回 txt
      getFileType:function(fileName){
        var fileSplitByComma=fileName.split(".");
        return fileSplitByComma[fileSplitByComma.length-1];
      }
    }

  });

})(window.jQuery);

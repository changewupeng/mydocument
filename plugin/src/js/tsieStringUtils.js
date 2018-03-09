/**
  *字符串工具类
  *
  */
;(function($){

  $.extend({
    tsieStringUtils:{
      /**
      * 判断字符串是否为空
      * @param str
      * @returns {Boolean}
      */
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
      /**
      * 判断字符串是否不为空
      * @param str
      * @returns {Boolean}
      */
      isNotBlank:function(str){
        return !this.isBlank(str);
      }
      ,



      /**
      * 获取文件类型:例如输入  abc.txt 返回 txt
      * @param fileName
      * @returns {string}
      */
      getFileType:function(fileName){
        var fileSplitByComma=fileName.split(".");
        return fileSplitByComma[fileSplitByComma.length-1];
      }
      ,

      /**
      * 判断两个字符串子否相同
      * @param str1
      * @param str2
      * @returns {Boolean}
      */
     isEquals:function(str1,str2){
         if(str1==str2){
             return true;
         }else{
             return false;
         }
      },

    /**
      * 忽略大小写判断字符串是否相同
      * @param str1
      * @param str2
      * @returns {Boolean}
      */
     isEqualsIgnorecase:function(str1,str2){
         if(str1.toUpperCase() == str2.toUpperCase()){
             return true;
         }else{
             return false;
         }
     },

     /**
       * 判断是否是数字
       * @param value
       * @returns {Boolean}
      */
     isNum:function (value){
         if( value != null && value.length>0 && isNaN(value) == false){
             return true;
         }else{
             return false;
         }
     },

    /**
    * 判断是否是中文
    * @param str
    * @returns {Boolean}
    */
    isChinese:function(str){
       var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
       if(reg.test(str)){
           return false;
       }
       return true;
   }


    }

  });

})(window.jQuery);

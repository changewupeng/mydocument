/**
  *说明：生成select的options
  *作者：wupeng
  *时间：2018-6-28
  *有问题请联系我：2050579844@qq.com
  *用法： $(dom).generateSelectOptions(option)

  版本0.2：添加回调函数
  
  */

;(function($){

    var defaultOption={
      options:{"default":'<--请选择-->'},
      defaultSelectValue:"default",
      success:$.noop()
    }

    $.fn.extend({
       
      /**
       * 
       * @param option
       * {
          * options:{key1:value1,key2:value2,....},  下拉选项对象+
             defaultSelectValue:"key1",   默认展示的下拉
            success:function(){....}            下拉初始化成功之后的回调函数
       * 
       * }
       * 
       */
      "generateSelectOptions":function(option){
         var _option = $.extend({}, defaultOption, option);
        //  _option.success=option.success||defaultOption.success;
         console.log("_option",_option);
         return this.each(function(){
           var $this = $(this),
               option=null;
           $this.empty();
           
           var opts=_option['options'];
           for(var value in opts){
             if(value==_option.selectedValue)
              option=$("<option>",{'value':value,'selected':'true','html':opts[value]});
             else
              option=$("<option>",{'value':value,'html':opts[value]});
            
             $this.append(option);
           }

           if(_option.success){
            _option.success.call(this);
           }

         });
      }
    });
})(window.jQuery);

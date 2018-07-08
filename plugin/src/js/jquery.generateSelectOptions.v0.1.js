/**
  *说明：生成select的options
  *作者：wupeng
  *时间：2018-3-6
  *有问题请联系我：2050579844@qq.com
  *用法： $(dom).generateSelectOptions(options,defaultSelectValue)
  */

;(function($){

    var _defaults={"default":'<--请选择-->'};
    var _defaultSelectValue="default";

    $.fn.extend({
      /**
      * 生产 selectoption
      * @param options
      * @param defaultSelectValue
      *
      */
      "generateSelectOptions":function(options,defaultSelectValue){
         var opts = $.extend({}, _defaults, options),
             selectedValue=defaultSelectValue||_defaultSelectValue;
         return this.each(function(){
           var $this = $(this),
               option=null;
           $this.empty();

           for(var value in opts){
             if(value==selectedValue)
              option=$("<option>",{'value':value,'selected':'true','html':opts[value]});
             else
              option=$("<option>",{'value':value,'html':opts[value]});
            
             $this.append(option);
           }
         });
      }
    });
})(window.jQuery);

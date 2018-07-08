/**
  *说明：生成select的options
  *作者：wupeng
  *时间：2018-6-25
  *有问题请联系我：2050579844@qq.com
  *用法： $(dom).generateOrientationBar(options)
  */

 ;(function($){

    var defaultOptions={};

    $.fn.extend({
      /**
      * 生产 selectoption
      * @param options
      * @param defaultSelectValue
      *
      */
      "generateOrientationBar":function(options){
          var options=$.extend({},defaultOptions,options);
          return this.each(function(){
               var $this=$(this);
               var width=$this.width(),
                     height=$this.height();

                     for(var i=0;i<data.length;i++){

                
                    }
         });
      }
    });
})(window.jQuery);

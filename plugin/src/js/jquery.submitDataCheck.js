/**
  *说明：提交数据的校验
  *作者：wupeng
  *时间：2018-3-20
  *有问题请联系我：2050579844@qq.com
  *
  */

;(function($){
        var rules={
          "ruleRumber":function(str){
            if(isNaN(str))
              return {result:false,errMsg:'必须为数字'}
            return {result:true};
          }
        };

        $.fn.extend({
          "submitDataCheck":function(){
            return this.each(function(){
              var $this=$(this),
                  val=$this.val(),  //待校验的值
                  refId=$this.attr("ref");  //数据结果展示的地区，一般建议是 <span>
                  classes=$this.attr("class").split(/\s+/);  //该元素的 class 的列表

              if(classes.length>0){
                for(var i=0;i<classes.length;i++){


                  if(rules[classes[i]]){
                    var checkResult=rules[classes[i]].call($this,val);
                    //校验不通过的时候的操作
                    if(!checkResult.result){
                       $("#"+refId).text(checkResult.errMsg);
                       $this.focus();
                       return;
                    }else   //校验通过的时候的操作
                      $("#"+refId).text("ok");
                  }
                }
              }
            });
          }
        });
})(window.jQuery);

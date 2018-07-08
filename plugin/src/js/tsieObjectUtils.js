/**
  *对象工具类
  *
  */
 ;(function($){

    $.extend({
      tsieObjectUtils:{
          /**
           * @param initalObj
           * @param finalObj
           */
        deepClone:function(initalObj,finalObj){
            var obj = finalObj || {};    
            for (var i in initalObj) {        
              var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
              if(prop === obj) {            
                continue;
              }        
              if (typeof prop === 'object') {
                obj[i] = (prop.constructor === Array) ? [] : {};            
                arguments.callee(prop, obj[i]);
              } else {
                obj[i] = prop;
              }
            }    
            return obj;
        },
        
        /**
         * 得到对象的所有keys
         * @param object
         * @returns {Array}
         */
        getObjectKeys:function(object){
          return Object.keys(object);
        },
        
      /**
         * 得到对象的所有keys的个数
         * @param object
         * @returns {number}
         */
        getObjectKeysCount:function(Object){
          return Object.keys(object).length;
        }

      }
    });
  
  })(window.jQuery);
  
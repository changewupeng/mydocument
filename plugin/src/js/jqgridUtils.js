/**
  *jqgrid工具函数
  *
  */
;(function($){

  $.extend({
    jqgridUtils:{
       /**
         *多选的时候，获取选中的所有的行数据，返回一个list
         *@param $dom <table>的id值
         *@return {list}
         */
       getSelectRows:function($dom) {
          var rowIds = $dom.jqGrid('getGridParam', 'selarrrow'),
              selectedRows=[];
          for(var rowid=0;rowid<rowIds.length;rowid++){
              selectedRows.push(this.getRowData($dom,rowIds[rowid]));
          }
          return selectedRows;
      },

      /**
       * 单选模式下，获取选中的数据
       * @param $dom
       * @returns {Object}
       */
      getSelectRow:function($dom){
        var rowId = $dom.jqGrid("getRowData","selrow");
        return this.getRowData($dom,rowId);
      },

      /**
       * 获取指定的行数据
       * @param $dom
       * @param rowId  行号  从1开始
       */
      getRowData:function($dom,rowId){
        return $dom.jqGrid("getRowData",rowId);
      },
      /**
        *jqgrid的数据的字段名称，在鼠标移动上去的时候，会有一个悬浮框显示名称
        *@param domId   <table>的id值
        *@param colModel
        *@param colNames
        **/
      addColNamesAttrTitle:function(domId,colModel,colNames){
        var thId=null;
        for(var i=0;i<colModel.length;i++){
        thId = domId+"_"+colModel[i].index;
        $("#"+thId).attr("title",column[i]);
      }
    },
      /**
        *使用jqgrid的 addRowData属性加载jqgrid数据
        *@param domId   <table>的id值
        *@param dataList  [{},{}]
        **/
      addRowData:function($dom,dataList){
        var length=dataList.length;
        //先清除数据
        $dom.jqGrid('GridDestroy');

        if(!dataList||length==0)
          return;
        for(var i=0;i<length;i++)
          $dom.jqGrid("addRowData",i,dataList[i]);
      },
      
      /**
       * 让指定的行被选中
       * @param $dom
       * @param rowId
       * 
       */
      makeSpecifyRowSelect:function($dom,rowId){
        $dom.jqGrid("setSelection",rowId);
      },

       /**
             * 作用说明：自定义的jqgrid查询操作，根据传入的搜索条件，将符合条件的行展示，不符合条件的行隐藏
             * 具体用法参照交易申报页面
             * @param tableid  <table>元素的id属性值
             * @param object   传入的搜索条件。{列名1：值，列名2：值}
             */
            searchJqgridTb:function (tableid,object,pagerId) {
              var $tr=$("#"+tableid+" tbody tr");
              var totalShowRow=0;
              $tr.each(function () {
                  var $this=$(this);
                  if(parseInt($this.attr("id"))=="NaN")
                      return;
                  var isMatch=true;

                  //有一个属性不匹配，就认为这行数据不匹配
                  for(var prop in object){
                      var $td=$this.find("td[aria-describedby='"+tableid+"_"+prop+"']");
                      var value=$td.text();
                      if(value.indexOf(object[prop])==-1) {
                          isMatch = false;
                          break;
                      }
                  }

                  if(!isMatch)
                      $this.attr("hidden",true);
                  if(isMatch) {
                      $this.removeAttr("hidden");
                      totalShowRow++;
                  }
              });


              //如果 pagerId存在，需要修改表格右下角的总行数
              if(pagerId){
                  var $div=$("#"+pagerId+"_right div");
                  $div.text("1 - "+totalShowRow+"　共 "+totalShowRow+" 条");
              }
          }
    }
  });

})(window.jQuery);

/**
  *jqgrid工具函数
  *
  */
;(function($){

  $.extend({
    jqgridUtils:{
       /**
         *获取jqgrid所有选中的数据1
         *@param $dom <table>的id值
         *@return {list}
         */
       getSelectRows：function(domId) {
          var rowIds = $("#"+domId).jqGrid('getGridParam', 'selarrrow'),
              selectedRows=[];
          for(var rowid=0;rowid<rowIds.length;rowid++){
              selectedRows.push($("#"+domId).jqGrid("getRowData",rowIds[rowid]))
          }
          return selectedRows;
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
      },
      /**
        *使用jqgrid的 addRowData属性加载jqgrid数据
        *@param domId   <table>的id值
        *@param dataList  [{},{}]
        **/
      addRowData:function(domId,dataList){
        var $dom=$("#"+domId),
            length=dataList.length;
        //先清除数据
        $dom.jqGrid('GridDestroy');

        if(!dataList||length==0)
          return;
        for(var i=0;i<length;i++)
          $dom.jqGrid("addRowData",i,dataList[i]);
      }
    }
  });

})(window.jQuery);

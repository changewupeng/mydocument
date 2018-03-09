/**
  *jqgrid工具函数
  *
  */
;(function($){

  $.extend({
    jqgridUtils:{
       /**
         *获取jqgrid所有选中的数据
         *@param $dom <table>的id值
         *@return {list}
         */
       getSelectRows：function($dom) {
          var rowIds = $("#"+$dom).jqGrid('getGridParam', 'selarrrow'),
              selectedRows=[];
          for(var rowid=0;rowid<rowIds.length;rowid++){
              selectedRows.push($("#"+$dom).jqGrid("getRowData",rowIds[rowid]))
          }
          return selectedRows;
      }

    }
  });

})(window.jQuery);

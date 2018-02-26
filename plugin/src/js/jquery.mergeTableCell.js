/**
  *说明：合并html table的内容相同的单元格
  *作者：wupeng
  *时间：2018-2-26
  *有问题请联系我：2050579844@qq.com
  *
  */

;(function($){
    $.fn.extend({

      //合并table的同一行相同的cell
      "mergeTableRowCell":function(colId,beginRowIndex){   //colId 是指定的列id
         return this.each(function(){
           var
               $this=$(this),
              _index=colId||0,  //合并那一列
              _beginRowIndex=beginRowIndex||0,  //从哪一行开始
              _tableTr=$this.find('tbody').find('tr');

           if(_beginRowIndex>=_tableTr.length){
             console.error("开始的行Id必须小于总行数");
             return;
           }
           var
               firstCell=_tableTr.eq(_beginRowIndex).find('td').eq(parseInt(_index)),
               num=0;
          firstCell.attr('rowspan',1);
          for(var i=_beginRowIndex+1;i<_tableTr.length;i++){
            var iValue=_tableTr.eq(i).find('td').eq(parseInt(_index));
            if(firstCell.text()!=iValue.text()){
              firstCell=iValue;
              firstCell.attr('rowspan',1);
            }else{
              iValue.css({'display':'none'});
              var b=firstCell.attr('rowspan');
              firstCell.attr('rowspan',parseInt(b)+1);
            }
         }
       });
     }
    });


    $.fn.extend({
      //合并同一行内容相同的cell
      "mergeTableColumCell":function(rowId,beginColId){
        return this.each(function(){
          var
              _rowId=rowId||0,
              _beginColId=beginColId||0,
              $this=$(this),
              toBeMergedRow=$this.find('tbody').find('tr').eq(_rowId),
              columCount=toBeMergedRow.find("td").length,
              firstCell=toBeMergedRow.find("td").eq(_beginColId);

          if(_beginColId>=columCount){
            console.error("开始的列Id必须小于总列数");
            return;
          }

          firstCell.attr("colspan",1);
          for(var i=_beginColId+1;i<columCount;i++){
            var iValue=toBeMergedRow.find('td').eq(i);
            if(firstCell.text()!=iValue.text()){
              firstCell=iValue;
              firstCell.attr('colspan',1);
            }else{
              iValue.css({'display':'none'});
              var b=firstCell.attr('colspan');
              firstCell.attr('colspan',parseInt(b)+1);
            }
          }
        });
      }
    });
})(window.jQuery);

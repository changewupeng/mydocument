/**
  *时间工具类
  *
  */
;(function($){
  var DATE_FORMAT={
    PATTERN_STANDARD:'yyyy-MM-dd HH:mm:ss',
    PATTERN_DATE:'yyyy-MM-dd',
    PATTERN_DATE_SQL:'yyyyMMdd'
  };

  function leftPad(str,flag,length){
    var _flag=flag||'0';
    var _length=length||2;
    var _leftAddStr="";
    for(var i=0;i<_length;i++)
      _leftAddStr+=_flag;

    str=_leftAddStr+str;
    return str.substr(str.length-_length);
  };

  $.extend({
    tsieDateUtils:{
      dateFormat:function(date,format){
        var
          _date=date||new Date(),
          _format = format||DATE_FORMAT.PATTERN_STANDARD,
          dateObject={
            _fullYear:_date.getFullYear(),
            _month:_date.getMonth()+1,
            _date1:_date.getDate(),
            _hours:_date.getHours(),
            _min:_date.getMinutes(),
            _seconds:_date.getSeconds()
          },
          result="";

          if(_format==DATE_FORMAT.PATTERN_STANDARD)
            result=dateObject._fullYear+"-"+leftPad(dateObject._month)+"-"+leftPad(dateObject._date1)+" "+leftPad(dateObject._hours)+":"+leftPad(dateObject._month)+":"+leftPad(dateObject._seconds);
          else if(_format==DATE_FORMAT.PATTERN_DATE)
            result=dateObject._fullYear+"-"+leftPad(dateObject._month)+"-"+leftPad(dateObject._date1);
          else if(_format==DATE_FORMAT.PATTERN_DATE_SQL)
            result=dateObject._fullYear+""+leftPad(dateObject._month)+""+leftPad(dateObject._date1);
          else
            result="";
          return result;
      },
      //将时间转化为时间戳
      date2TimeStamp:function(date){
        var _date=date||new Date();
        return Date.parse(_date);
      },

      //将时间戳转化为时间
      timeStamp2Date:function(timeStamp){
        var
          _timeStamp=timeStamp||$.date2TimeStamp(),
          date=new Date(_timeStamp);
        return date;
      }

    }
  });

})(window.jQuery);

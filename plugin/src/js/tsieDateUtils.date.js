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
      //日期格式化
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
      ，

      /*
       *说明：将日期转换为星期几
       *@date 时间
       *
       */
      nowFewWeeks:function（date）{
        if(date instanceof Date){
           var dayNames = new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
           return dayNames[date.getDay()];
       } else{
           return "Param error,date type!";
       }
      }
      ，
      /**
        *说明：计算两个时间之间的差值
        *@startDate  开始时间
        *@endDate    结束时间
        *@pattern    转换后的单位['day','hour','min','second']
        */
      dateMinus:function(startDate,endDate,pattern){
        var _patterns=['day','hour','min','second'];

        var _pattern=pattern||'second';

        if(_patterns.indexOf(_pattern)<0){
          console.error("转化模式不对");
        }

        if(startDate instanceof Date && endDate instanceof Date){
            var minus=Math.floor((endDate-startDate);
            if(pattern=="day"){
              return minus/(1000 * 60 * 60 * 24));
            }else if(pattern=="hour"){
              return minus/(1000 * 60 * 60));
            }else if(pattern=="min"){
              return minus/(1000 * 60));
            }else
              return minus/1000;
        }else{
            return "Param error,date type!";
        }
      }

    }
  });

})(window.jQuery);

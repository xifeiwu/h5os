Date()的字符串与时间戳转换以及用户时间本地化
1. UTC and GMT
GMT: Greenwich Mean Time, 指位于英国伦敦郊区的皇家格林威治天文台的标准时间，因为本初子午线被定义为通过那里的经线。然而由于地球的不规则自转，导致GMT时间有误差，因此目前已不被当作标准时间使用。
UTC: 世界协调时间。UTC是最主要的世界时间标准，是经过平均太阳时(以格林威治时间GMT为准)、地轴运动修正后的新时标以及以「秒」为单位的国际原子时所综合精算而成的时间。UTC比GMT来得更加精准。其误差值必须保持在0.9秒以内，若大于0.9秒则由位于巴黎的国际地球自转事务中央局发布闰秒，使UTC与地球自转周期一致。不过日常使用中，GMT与UTC的功能与精确度是没有差别的。
协调世界时区会使用“Z”来表示。而在航空上，所有使用的时间划一规定是协调世界时。而且Z在无线电中应读作“Zulu”（可参见北约音标字母），协调世界时也会被称为“Zulu time”。

2. 标准化
Date有个Date.prototype.toLocaleString()方法可以将时间字符串返回用户本地字符串格式，这个方法还有两个子方法Date.prototype.toLocaleDateString和Date.prototype.toLocaleTimeString，这两个方法返回值分别表示日期和时间，加一起就是Date.prototype.toLocaleString的结果。

JavaScript getTimezoneOffset()方法
getTimezoneOffset()方法可返回格林威治时间和本地时间之间的时差，以分钟为单位。

JavaScript getTime()方法
返回1970年1月1日至今的毫秒数。

3. 日期格式化
date
Date 2015-12-07T03:18:37.338Z
date.toLocaleFormat('%Y-%m-%dT%H:%M:%S');
"2015-12-07T11:18:37"

4. constructor of Date.
new Date()
new Date(milliseconds)
new Date(datestring)
new Date(year, month)
new Date(year, month, day)
new Date(year, month, day, hours)
new Date(year, month, day, hours, minutes)
new Date(year, month, day, hours, minutes, seconds)
new Date(year, month, day, hours, minutes, seconds, microseconds)
Date对象构造函数参数说明

milliseconds - 距离JavaScript内部定义的起始时间1970年1月1日的毫秒数
datestring - 字符串代表的日期与时间。此字符串可以使用Date.parse()转换
year - 四位数的年份，如果取值为0-99，则在其之上加上1900
month - 0(代表一月)-11(代表十二月)之间的月份
day - 1-31之间的日期
hours - 0(代表午夜)-23之间的小时数
minutes - 0-59之间的分钟数
seconds - 0-59之间的秒数
microseconds - 0-999之间的毫秒数

5. 默认值
在gecko或浏览器中，通过new Date()得到的Date对象，都是UTC时间。
getDate时Local Date
如果获得UTC Date需要使用getUTCDate

> var date = new Date('2015-12-07T23:18:37.338Z')
undefined
> date
Tue Dec 08 2015 07:18:37 GMT+0800 (CST)
> date.getDate();
8
> date.getUTCDate();
7
> date.getTimezoneOffset();
-480


> app.timeController.selectedDay
< Date 1970-01-11T00:00:00.000Z
> app.timeController.selectedDay.getDate()
< 10
> app.timeController.selectedDay.getUTCDate()
< 11
> app.timeController.selectedDay.toLocaleString()
< "Sat Jan 10 21:00:00 1970"

6. diffrence between gecko and browser.
In Gecko:
new Date('2001', '11', '01')
Date 2001-12-01T03:00:00.000Z
In Browser:
new Date('2001', '11', '01')
Sat Dec 01 2001 00:00:00 GMT+0800 (CST)


UTC - LOCAL = TIMEOFFSET
UTC - TIMEOFFSET = LOCAL


In Browser
> var date = new Date('1970-01-18T00:00:00.000Z');
< undefined
> date
< Sun Jan 18 1970 08:00:00 GMT+0800 (CST)
> date.getTimezoneOffset();
< -480
> date.getTime()
< 1468800000
> var milli = date.getTime() + date.getTimezoneOffset() * 60 * 1000
< undefined
> milli
< 1440000000
> localDate = new Date(1440000000);
< Sun Jan 18 1970 00:00:00 GMT+0800 (CST)

In Gecko
var date = new Date('1970-01-18T00:00:00.000Z');
undefined
date
Date 1970-01-18T00:00:00.000Z
date.getTimezoneOffset();
660
date.getTime()
1468800000
var milli = date.getTime() + date.getTimezoneOffset() * 60 * 1000
undefined
milli
1508400000
localDate = new Date(milli);
Date 1970-01-18T11:00:00.000Z
date.getDate()
17
localDate.getDate();
18
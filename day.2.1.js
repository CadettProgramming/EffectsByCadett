function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var q = new Date();
/** 
 * Thanks to KCF for fixing some major bugs.
 * Website: www.kingcodefish.com
 */
 var π = {};
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
π.dotw = dayNames[q.getDay()];
π.day = q.getDate();
π.month = monthNames[q.getMonth()];
π.year = q.getFullYear();
π.hour = (q.getHours())%12;
π.minutes = checkTime(q.getMinutes());
π.seconds = checkTime(q.getSeconds());
π.M = ((q.getHours() < 12) ? "AM" : "PM");
π.update = function(){
    π.hour = (q.getHours())%12;
    π.minutes = checkTime(q.getMinutes());
    π.seconds = checkTime(q.getSeconds());
};
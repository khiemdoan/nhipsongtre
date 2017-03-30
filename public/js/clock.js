function getTime(id) {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var days = new Array("Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7");
    var am_pm = "Sáng";
    if (s < 10) {s = "0" + s}
    if (m < 10) {m = "0" + m}
    if (h > 12) {h -= 12; am_pm = "Chiều"}
    if (h < 10) {h = "0" + h}
    if (date < 10) {date = "0" + date}
    if (month < 10) {month = "0" + month}
    var datetime = days[day] + ", ";
    datetime += date + "/" + month + "/" + year + " | ";
    datetime += h + ":" + m + " GMT+7";
    $(id).text(datetime);
    setTimeout(getTime, 1000, id);
}
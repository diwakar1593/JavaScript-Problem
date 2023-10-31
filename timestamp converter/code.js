function timestampToDate(timestamp) {
    var date = new Date(timestamp * 1000);

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var formattedDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    return formattedDate;
}

var timestamp = 1619632000; 
console.log(timestampToDate(timestamp)); 
//今日の日付を取得
var currentDate  = new Date();

//年・月・日を取得
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();

console.log(year + '年' + month + '月' + date + '日');


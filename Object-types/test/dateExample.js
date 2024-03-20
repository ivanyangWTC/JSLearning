function myDateFunction(){
    let date1 = new Date();
    console.log(date1); // Current date and time
    console.log(date1.getTime()); // 63768960000000
    let date2 = new Date('2019-12-01');
    console.log(date2); // Sun Dec 01 2019 00:00:00 GMT+0000 (Greenwich Mean Time)
    let date3 = new Date('2019-12-01T12:00:00');
    console.log(date3); // Sun Dec 01 2019 12:00:00
    let date4 = new Date(2019, 11, 1, 12, 0, 0, 0);
    console.log(date4); // Sun Dec 01 2019 12:00:00 GMT+0000 (Greenwich Mean Time)
    let date5 = new Date(63768960000000);
    console.log(date5); // Tue Mar 12 2024 08:21:57 GMT+0000 (Greenwich Mean Time)


    let now = new Date();
    console.log(now.getFullYear()); // Gets the year
    console.log(now.getMonth()); // Gets the month (0-11)
    console.log(now.getDate()); // Gets the day of the month (1-31)
    console.log(now.getHours()); // Gets the hour (0-23)
    console.log(now.getMinutes()); // Gets the minute (0-59)
    console.log(now.getSeconds()); // Gets the second (0-59)
    console.log(now.getMilliseconds()); // Gets the millisecond (0-999)
    console.log(now.getTime()); // Gets the number of milliseconds since 1970-01-01 00:00:00 UTC

    let date6 = new Date();
    date6.setFullYear(2024, 0, 1);
    date6.setMonth(0, 1);
    date6.setDate(1);
    date6.setHours(12);
    date6.setMinutes(0);
    date6.setSeconds(0);
    date6.setMilliseconds(0);
    date6.setFullYear(2024, 0, 1);
    date6.setHours(12, 0, 0, 0);

    let date7 = new Date();
    console.log(date7.toLocaleDateString()); // Outputs the date in "yyyy/mm/dd" format
    console.log(date7.toLocaleTimeString()); // Outputs the time in "hh:mm:ss" format
    console.log(date7.toLocaleString()); // Outputs the date and time in "yyyy/mm/dd hh:mm:ss" format

    let date8 = new Date();
    console.log(date8.toLocaleDateString()); // Outputs the date in "yyyy/mm/dd" format
    console.log(date8.toLocaleTimeString()); // Outputs the time in "hh:mm:ss" format
    console.log(date8.toLocaleString()); // Outputs the date and time in "yyyy/mm/dd hh:mm:ss" format
}
    export default (date) => {
        let time = new Date();
        time.setTime(date);
        let fillZero = n => n < 10 ? '0' + n : n;
        let year = time.getFullYear();
        let mon = fillZero(time.getMonth() + 1);
        let day = fillZero(time.getDate());
        let hour = fillZero(time.getHours());
        let min = fillZero(time.getMinutes());
        return `${year}年${mon}月${day}日 ${hour}：${min}`;
    }
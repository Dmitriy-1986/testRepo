 /* Full year */
 function realYear() {
    let year = new Date();
    let fullYear = year.getFullYear();
    let date = document.getElementById('date');
    date.innerHTML = fullYear;
}
setInterval(realYear, 1000);
/* End full year */
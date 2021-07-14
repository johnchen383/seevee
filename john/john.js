const darkModeBtn = document.querySelector('#darkBtn')
var onDark = false

darkModeBtn.addEventListener('click', function () {
    console.log('ckicked!')
    if (!onDark){
        document.documentElement.style.setProperty('--primary', 'rgb(21, 231, 21)');
        document.documentElement.style.setProperty('--primarybar', '#333');
        document.documentElement.style.setProperty('--background', '#000');
        document.documentElement.style.setProperty('--text', '#FFF');
    } else {
        document.documentElement.style.setProperty('--primary', '#5ba89e');
        document.documentElement.style.setProperty('--primarybar', '#5ba89e');
        document.documentElement.style.setProperty('--background', '#FFF');
        document.documentElement.style.setProperty('--text', '#343a40');
    }
    onDark = !onDark;
});
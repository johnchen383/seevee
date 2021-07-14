const darkModeBtn = document.querySelector('#darkBtn')
var onDark = false

darkModeBtn.addEventListener('click', function () {
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

const langBtn = document.querySelector('#langBtn')
var onChinese = false

langBtn.addEventListener('click', function (){
    console.log('ckicked!')
    if (!onChinese){
        document.querySelector('#about div div.subheading').innerHTML = "软件工程师 · <a href=\"tel:+64021008587480\">(021) 085-87480</a> · <a href='mailto:john.bm.chen@gmail.com'>john.bm.chen@gmail.com</a>";
    } else {
        document.querySelector('#about div div.subheading').innerHTML = "Software Engineer BE(Hons) · <a href=\"tel:+64021008587480\">(021) 085-87480</a> · <a href='mailto:john.bm.chen@gmail.com'>john.bm.chen@gmail.com</a>";
    }
    onChinese = !onChinese;
});


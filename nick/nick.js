const darkModeBtn = document.querySelector('#darkBtn')
var onDark = false

darkModeBtn.addEventListener('click', function () {
    if (!onDark){
        document.documentElement.style.setProperty('--primary', 'rgb(21, 231, 21)');
        document.documentElement.style.setProperty('--primarybar', '#333');
        document.documentElement.style.setProperty('--background', '#000');
        document.documentElement.style.setProperty('--text', '#FFF');
        document.documentElement.style.setProperty('--projscaf', '#333');
    } else {
        document.documentElement.style.setProperty('--primary', '#5ba89e');
        document.documentElement.style.setProperty('--primarybar', '#5ba89e');
        document.documentElement.style.setProperty('--background', '#FFF');
        document.documentElement.style.setProperty('--text', '#343a40');
        document.documentElement.style.setProperty('--projscaf', '#51575e');
    }
    onDark = !onDark;
});

const langBtn = document.querySelector('#langBtn')
var onChinese = false

langBtn.addEventListener('click', function (){
    // console.log('ckicked!')
    if (!onChinese){
        document.querySelector('#about div div.subheading').innerHTML = "软件工程师 · <a href=\"tel:+6402102878432\">(021) 02878432</a> · <a href='mailto:thenickys123@gmail.com'>thenickys123@gmail.com</a>";
        document.querySelector('#about div h1').innerHTML = "<span class='text-primary'>黄</span>文熙";
        document.querySelector('#about div p').innerHTML = "一位有抱负的软件开发人员，对如何使用技术来改善社会和商业成果充满热情。</br> 一个狂热的学习者，对未来技术的潜力感到兴奋。";
        langBtn.text = 'EN'
    } else {
        document.querySelector('#about div div.subheading').innerHTML = "Software Engineer BE(Hons) · <a href=\"tel:+6402102878432\">(021) 02878432</a> · <a href='mailto:thenickys123@gmail.com'>thenickys123@gmail.com</a>";
        document.querySelector('#about div h1').innerHTML = "Nick <span class='text-primary'>Huang</span>";
        document.querySelector('#about div p').innerHTML = "An aspiring software developer with a passion for how technology can be used for the betterment of societal and business outcomes. An avid learner, excited by the potential that the technology of tomorrow holds.";
        langBtn.text = '中'
    }
    onChinese = !onChinese;
});


const darkModeBtn = document.querySelector('#darkBtn')
var onDark = false

darkModeBtn.addEventListener('click', function () {
    if (!onDark){
        document.documentElement.style.setProperty('--primary', '#FF3200');
        document.documentElement.style.setProperty('--primarybar', '#333');
        document.documentElement.style.setProperty('--background', '#000');
        document.documentElement.style.setProperty('--text', '#FFF');
        document.documentElement.style.setProperty('--projscaf', '#333');
    } else {
        document.documentElement.style.setProperty('--primary', '#FF572E');
        document.documentElement.style.setProperty('--primarybar', '#FF572E');
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
        document.querySelector('#about div div.subheading').innerHTML = "软件工程师 · <a href=\"tel:+6402102878432\">(+64) 02102878432</a> · <a href='mailto:thenickys123@gmail.com'>thenickys123@gmail.com</a>";
        document.querySelector('#about div h1').innerHTML = "<span class='text-primary'>黄</span>文熙";
        document.querySelector('#about div p').innerHTML = "我是一个积极进取和勤奋的人，最近在奥克兰大学学习软件工程二年级。我是一个能够在压力下表现良好并与团队成员一起工作的人。</br>我目前正在寻找机会来增强我在新环境中的经验和技能。";
        langBtn.text = 'EN'
    } else {
        document.querySelector('#about div div.subheading').innerHTML = "Software Engineer BE(Hons) · <a href=\"tel:+6402102878432\">(+64) 02102878432</a> · <a href='mailto:thenickys123@gmail.com'>thenickys123@gmail.com</a>";
        document.querySelector('#about div h1').innerHTML = "Nick <span class='text-primary'>Huang</span>";
        document.querySelector('#about div p').innerHTML = "I am a highly motivated and hardworking person, who recently stuyding second year Software Engineering in the University of Auckland. I’m an individual who can perform well under pressure and work well when working with teams’ members. I am currently seeking an opportunity to enhance my experience and skills in a new environment.";
        langBtn.text = '中'
    }
    onChinese = !onChinese;
});


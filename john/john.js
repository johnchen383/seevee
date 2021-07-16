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
        document.querySelector('#about div div.subheading').innerHTML = "软件工程师 · <a href=\"tel:+64021008587480\">(021) 085-87480</a> · <a href='mailto:john.bm.chen@gmail.com'>john.bm.chen@gmail.com</a>";
        document.querySelector('#about div h1').innerHTML = "<span class='text-primary'>陈</span>泽昂";
        document.querySelector('#about div p').innerHTML = "一位有抱负的软件开发人员，对如何使用技术来改善社会和商业成果充满热情。</br> 一个狂热的学习者，对未来技术的潜力感到兴奋。";
        document.querySelector('#navbarSupportedContent ul').innerHTML = "<li class='nav-item'><a class='nav-link js-scroll-trigger' href='#about'>关于</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#education'>教育</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#experience'>经验</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#projects'>项目</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#awards'>成就</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#volunteering'>志愿服务</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#skills'>技能</a></li> <li><a class='nav-link' href='index.html'> <div class='icon-text'><i class='fas fa-users fa-1x'></i> <b>SEEVEE</b></div> </a> </li>";
        langBtn.text = 'EN'
    } else {
        document.querySelector('#about div div.subheading').innerHTML = "Software Engineer BE(Hons) · <a href=\"tel:+64021008587480\">(021) 085-87480</a> · <a href='mailto:john.bm.chen@gmail.com'>john.bm.chen@gmail.com</a>";
        document.querySelector('#about div h1').innerHTML = "John <span class='text-primary'>Chen</span>";
        document.querySelector('#about div p').innerHTML = "An aspiring software developer with a passion for how technology can be used for the betterment of societal and business outcomes. An avid learner, excited by the potential that the technology of tomorrow holds.";
        document.querySelector('#navbarSupportedContent ul').innerHTML = "<li class='nav-item'><a class='nav-link js-scroll-trigger' href='#about'>About</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#education'>Education</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#experience'>Experience</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#projects'>Projects</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#awards'>Achievements</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#volunteering'>Volunteering</a></li> <li class='nav-item'><a class='nav-link js-scroll-trigger' href='#skills'>Skills</a></li> <li><a class='nav-link' href='index.html'> <div class='icon-text'><i class='fas fa-users fa-1x'></i> <b>SEEVEE</b></div> </a> </li>";
        langBtn.text = '中'
    }
    onChinese = !onChinese;
});


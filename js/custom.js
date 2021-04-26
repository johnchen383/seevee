/*please have all your inserts in the following format. custom.css for general page and main js changes*/

// javascript for videomodal selection
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(function (item) {
    item.addEventListener('click', function () {
        // console.log('clicked');
        var url = item.title;
        const vidModal = document.querySelector('#vidModalLink');
        vidModal.src = url;
        // vidModal.div.div.div.iframe.src = url;
    });
});
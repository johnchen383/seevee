/*please have all your inserts in the following format. custom.css for general page and main js changes*/

//jquery for stopping videoModal on play

(function ($) {
  "use strict";

  $("body").on("hidden.bs.modal", function (e) {
    console.log("triggered");
    const vidModal = document.querySelector("#vidModalLink");
    vidModal.src = "";
  });
})(jQuery);

// javascript for videomodal selection
const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // console.log('clicked');
    var url = item.title;
    const vidModal = document.querySelector("#vidModalLink");
    vidModal.src = url;
    // vidModal.div.div.div.iframe.src = url;
  });
});

//javascript for imgmodal selection
const imgItems = document.querySelectorAll(".img-item");

imgItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // console.log('clicked');
    var url = item.title;
    const imgModal = document.querySelector("#imgModalLink");
    imgModal.src = url;
  });
});

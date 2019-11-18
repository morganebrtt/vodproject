// $('#myTab a').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
//   })

// $(function () {

//     // $('#myTab li:last-child a').tab('show')

//     $('#myTab a[href="#profile"]').tab('show') // Select tab by name
//     $('#myTab li:first-child a').tab('show') // Select first tab
//     $('#myTab li:last-child a').tab('show') // Select last tab
//     $('#myTab li:nth-child(3) a').tab('show') // Select third tab
//   })

//$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//e.target // newly activated tab
//e.relatedTarget // previous active tab
//})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// var initVideos = function() {
//     var videoArea = $(".videoFrame"),
//         divs = $("div iframe"); // or some other data format

//     // bind your hover event to the divs
//     divs.click(function(ev) {
//         ev.preventDefault();
//         videoArea.prop("src", $(this).data('video'));
//         divs.removeClass("active");
//         $(this).addClass("active");
//     });
// };

// // once the DOM is ready
// $(function() {
//     initVideos();
// });
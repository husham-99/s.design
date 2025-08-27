// show navbar when click on button
let bar = document.querySelector(".bar");
let nav = document.querySelector(".nav-list");

bar.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// show navbar when click on button by jsquary
// $(document).ready(function(){

// $('button.bar').click(function(){

//     $('.nav-list').slideToggle()
// })

// })

// when scroll ==> sticky navbar

$(document).ready(function () {
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    if (sc > 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }

    // count to blugin
    // console.log($('.stat').offset().top) لحساب قيمة ارتفاع الديف
    if (sc > 2000) {
      $(".time").countTo();
      $(window).off("scroll");
    }
  });

  // portfolio buton change background-color
  $(".buttons button").click(function () {
    $(this).addClass("active-btn").siblings().removeClass("active-btn");
    // changing pics by clicking on button
    let CSSFilter = $(this).attr("id");
    if (CSSFilter === "all") {
      $(".images > div").fadeIn();
    } else {
      $(".images > div").fadeOut();
      $(".images")
        .contents()
        .filter("." + CSSFilter)
        .fadeIn();
    }
  });

  // owl carousel >> team section
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    // navContainer: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // choose panel
  $(".c-panel li").click(function () {
    $(this).addClass("active-btn").siblings().removeClass("active-btn");
    let p = $(this).data("role");
    $(".content div").hide();
    $(".content ")
      .contents()
      .filter("#" + p)
      .fadeIn();
  });

  // slick slide >> get-started section
  $(".slick").slick({
    dots: true,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
  });
});

// random video >> why choose us section
let btn = document.getElementById("random-video");
let iframe_container = document.getElementById("iframe-container");
let i = 0;
let videoarr = [
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/dNVZ0ZPfE8s?si=IOwmk_2zIUMtYedq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/Cbk980jV7Ao?si=jJqLkyDfETfmZcvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/dww3Oo8ropA?si=zS8tpwLa56i1nJrG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/zmRTC6xhis4?si=pf13kEUzj2QGU5BE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/DNGT0uYPHAo?si=yGAmXv_U9Gt9CPjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/ZOvyn72x6kQ?si=IJbMpB-mvUfVsXFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/XkMK1rTgXeY?si=i9icMz4RN_EG5rfl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/YzNYsSgxc_o?si=IqC6JDcoOks0U_GJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/yQ6VOOd73MA?si=cp4gdPNmO1ELDq8S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/LNHBMFCzznE?si=Ho4-sEn9sTNFW_cy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/mW9DqAeyge0?si=h_C1l-Rzv7frrk6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/H5DbmtQc-yw?si=o98tuV8DMYKGokDf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/J8DGjUv-Vjc?si=zWlbR_EqKjVWLodD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe id="my-iframe" src="https://www.youtube.com/embed/oOReBkMrTew?si=6NQmoxBSSPb0ckog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
];

btn.addEventListener("click", function () {
  iframe_container.innerHTML = videoarr[i];
  i++;
  if (i > videoarr.length - 1) {
    i = 0;
  }
});

// `<iframe width="560" height="315" src="https://www.youtube.com/embed/Cbk980jV7Ao?si=6FX2Mqd3q2x4OFQ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

// console.log($(".images > .row").contents());

AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperCulture = new Swiper(".culture_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#culture_swiper-next",
        prevEl: "#culture_swiper-prev",
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: "#culture_swiper-pagination",
        clickable: true,
    },
})

$(".culture .slider_btn button").click(function(){
    $(this).addClass("active").siblings("button").removeClass("active");
    let btn_index = $(this).index();
    swiperCulture.slideTo(btn_index, 1000, true);
})

var swiperTransport = new Swiper(".transport_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#transport_swiper-next",
        prevEl: "#transport_swiper-prev",
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: "#transport_swiper-pagination",
        clickable: true,
    },
})

var swiperNature = new Swiper(".nature_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#nature_swiper-next",
        prevEl: "#nature_swiper-prev",
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: "#nature_swiper-pagination",
        clickable: true,
    },
})

$(".nature .slider_btn button").click(function(){
    $(this).addClass("active").siblings("button").removeClass("active");
    let btn_index = $(this).index();
    swiperNature.slideTo(btn_index, 1000, true);
})

var swiperConvenient = new Swiper(".convenient_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#convenient_swiper-next",
        prevEl: "#convenient_swiper-prev",
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: "#convenient_swiper-pagination",
        clickable: true,
    },
})

var swiperBuilding = new Swiper(".building_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".building_swiper-next",
    prevEl: ".building_swiper-prev",
  },
  allowTouchMove: false,
  // effect: "fade",
  speed: 1000,
  // fadeEffect: {
  //     crossFade: true,
  // },
});

var swiperSmallisbig = new Swiper(".smallisbig_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#smallisbig_swiper-next",
        prevEl: "#smallisbig_swiper-prev",
    },
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: "#smallisbig_swiper-pagination",
        clickable: true,
    },
})


var swiperCore = new Swiper(".core_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: "#core_swiper-next",
        prevEl: "#core_swiper-prev",
    },
    speed: 800,
    pagination: {
        el: "#core_swiper_pagination",
        clickable: true,
    },
    allowTouchMove: false,
})

var swiperSweetlife = new Swiper(".sweetlife_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".core_swiper-next",
        prevEl: ".core_swiper-prev",
    },
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    allowTouchMove: false,
    breakpoints: {
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
})

var swiperSchoolText = new Swiper(".school_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#school_swiper-next",
        prevEl: "#school_swiper-prev",
    },
    pagination: {
        el: "#school_swiper-pagination",
        clickable: true,
    },
})

var swiperSchoolPic = new Swiper(".school_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    navigation: {
        nextEl: "#school_swiper-next",
        prevEl: "#school_swiper-prev",
    },
    pagination: {
        el: "#school_swiper-pagination",
        clickable: true,
    },
})

$(".school_tab_item").click(function(){
    $(this).addClass("active").siblings(".school_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperSchoolPic.slideTo(li_index, 1000, true);
    swiperSchoolText.slideTo(li_index, 1000, true);
})

var swiperGreen = new Swiper(".green_swiper", {
    slidesPerView: 1,
    speed: 800,
    navigation: {
        nextEl: "#green_swiper-next",
        prevEl: "#green_swiper-prev",
    },
    pagination: {
        el: "#green_swiper-pagination",
        clickable: true,
    },
})

$(".green_tab_item").click(function(){
    $(this).addClass("active").siblings(".green_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperGreen.slideTo(li_index, 1000, true);
})

var swiperBuildingPic = new Swiper(".building_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#building_swiper_next",
        prevEl: "#building_swiper_prev",
    },
    pagination: {
        el: "#building_swiper_pagination",
        clickable: true,
    },
})

var swiperBuildingText = new Swiper(".building_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#building_swiper_next",
        prevEl: "#building_swiper_prev",
    },
    pagination: {
        el: "#building_swiper_pagination",
        clickable: true,
    },
})

var swiperArrangePic = new Swiper(".arrange_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#arrange_swiper_next",
        prevEl: "#arrange_swiper_prev",
    },
    pagination: {
        el: "#arrange_swiper_pagination",
        clickable: true,
    },
})

var swiperArrangeText = new Swiper(".arrange_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#arrange_swiper_next",
        prevEl: "#arrange_swiper_prev",
    },
    pagination: {
        el: "#arrange_swiper_pagination",
        clickable: true,
    },
})

var swiperBuilding3D_1 = new Swiper(".building_pic_swiper-1", {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: false,
  observeParents: true,
  observer: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperBuilding3D_2 = new Swiper(".building_pic_swiper-2", {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: false,
  observeParents: true,
  observer: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperBuilding3D_3 = new Swiper(".building_pic_swiper-3", {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: false,
  observeParents: true,
  observer: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".building_tag_btn.is-tab").click(function () {
    let target = $(this).data("target");
    $(this).parents(".swiper-slide").find(".building_pic_main_item").hide();
    $(target).show();
});

$(window).on("resize", function() {
    mapResize();
})
mapResize();

function mapResize() {
    if($(window).width() <= 767) {
        let mapWidth = $(".map_wrap_pic").height() * 1.44;
        let windowWidth = $(window).width();
        let mapX = (mapWidth - windowWidth ) / 2;
        $(".map_wrap").animate({scrollLeft: mapX});
    }
}

$(".map_arrow").click(function () {
    let offset = $(window).width() * 0.3;
    let currentX = ($(".map_wrap_pic").offset().left) * (-1);
    if ($(this).hasClass("map_arrow-prev")) {
        offset = currentX - offset;
    } else if ($(this).hasClass("map_arrow-next")) {
        offset = currentX + offset;
    }
    $(".map_wrap").animate({ scrollLeft: offset });
});

(function () {
  emailjs.init("3j4kNvskrhLw3SIso");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_eyyx1dp", "template_y7my248", this).then(
      () => {
        alert("感謝您的來信！我們很快就會和您聯繫！");
        this.reset();
      },
      (error) => {
        alert("寄送失敗，請稍後再試");
      }
    );
  });
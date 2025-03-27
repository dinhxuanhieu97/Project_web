
export default function SwiperModule() {
  const eleFree = document.querySelectorAll(".free-slide");

  if (eleFree) {
    eleFree.forEach((ele, i) => {
      var swiper2 = new Swiper(ele.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
          el: ele.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        centeredSlides: ele.querySelector(".swiper").classList.contains("--center"),
        loop: ele.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }

  const eleFree2 = document.querySelectorAll(".free-slide2");

  if (eleFree2) {
    eleFree2.forEach((ele2, i) => {
      var swiper2 = new Swiper(ele2.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        // pagination: {
        //   el: ele2.querySelector(".swiper-pagination"),
        //   clickable: !0,
        //   type: "progressbar",
        // },
        scrollbar: {
          el: ele2.querySelector(".swiper-scrollbar"),
          hide: false,
          draggable: true,
        },
        centeredSlides: ele2.querySelector(".swiper").classList.contains("--center"),
        loop: ele2.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele2.querySelector(".next"),
          prevEl: ele2.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele2.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
     
    });
  }

  // const productItemWraps = document.querySelectorAll(".product_item--wrap");
  // if (productItemWraps) {

  //   productItemWraps.forEach((productItemWrap, i) => {
  //     var swiperThumbs = new Swiper(productItemWrap.querySelector(".mySwiperThumbs"), {
  //       speed: 1000,
  //       slidesPerView: "auto",
  //       spaceBetween: 4,
  //       scrollbar: {
  //         el: productItemWrap.querySelector(".swiper-scrollbar"),
  //         hide: false,
  //         draggable: true,
  //       },
  //     });

  //     var swiperImgs = new Swiper(productItemWrap.querySelector(".mySwiperImgs"), {
  //       speed: 1000,
  //       slidesPerView: "auto",

  //       effect: "fade",
  //       // loop:true,
  //       allowTouchMove: false,
  //       fadeEffect: { crossFade: true },
  //       thumbs: {
  //         swiper: swiperThumbs,
  //       },

  //     })
  //   })

  // }

  

  const productCt = document.querySelector(".product_ct");
  if (productCt) {
    if (window.screen.width < 800) {
      

      var swiperImgs = new Swiper(productCt.querySelector(".mySwiperCtBgs"), {
        speed: 1000,
        slidesPerView: "auto",

        effect: "fade",
        // loop:true,
        allowTouchMove: true,
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: productCt.querySelector(".next"),
          prevEl: productCt.querySelector(".prev"),
        },

      })
    }

  }


  const newsBanner = document.querySelector(".news_banner");
  if (newsBanner) {
    var mySwiperNewsLf = new Swiper(newsBanner.querySelector(".mySwiperNewsLf"), {
      speed: 1200,
      slidesPerView: "auto",

      effect: "fade",
      // loop:true,
      allowTouchMove: false,
      fadeEffect: { crossFade: true },
      pagination: {
        el: newsBanner.querySelector(".swiper-pagination"),
        clickable: !0,
      },

    })

    var mySWiperNewsBgs = new Swiper(newsBanner.querySelector(".mySWiperNewsBgs"), {
      speed: 1200,
      slidesPerView: "auto",
      pagination: {
        el: newsBanner.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      effect: "fade",
      // loop:true,
      allowTouchMove: true,
      fadeEffect: { crossFade: false },

    })

    var mySwiperNewsRt = new Swiper(newsBanner.querySelector(".mySwiperNewsRt"), {
      speed: 1200,
      slidesPerView: "auto",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },


    })


    if(window.screen.width > 800){

      mySwiperNewsLf.controller.control = mySwiperNewsRt;
      mySwiperNewsRt.controller.control = mySwiperNewsLf;
    }else{
      mySwiperNewsLf.controller.control = mySWiperNewsBgs;
      mySWiperNewsBgs.controller.control = mySwiperNewsLf;
    }


    mySWiperNewsBgs.on("slideChange", () => {

      const activedIndex = mySWiperNewsBgs.activeIndex;

      mySwiperNewsRt.slideTo(activedIndex)

    })

    mySwiperNewsRt.on("slideChange", () => {

      const activedIndex = mySwiperNewsRt.activeIndex;

      mySWiperNewsBgs.slideTo(activedIndex)

    })
  }


  const homeBn = document.querySelector(".home_bn");
  if (homeBn) {
    var mySwiperHomeBgs = new Swiper(homeBn.querySelector(".mySwiperHomeBgs"), {
      speed: 800,
      slidesPerView: "auto",
      allowTouchMove: true,
      loop:true,
    
    })

    var mySwiperHomeContents = new Swiper(homeBn.querySelector(".mySwiperHomeContents"), {
      speed: 800,
      slidesPerView: "auto",
      allowTouchMove: false,
      loop:true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: homeBn.querySelector(".next"),
        prevEl: homeBn.querySelector(".prev"),
      },



    })


    mySwiperHomeBgs.controller.control = mySwiperHomeContents;
    mySwiperHomeContents.controller.control = mySwiperHomeBgs;


  }


}


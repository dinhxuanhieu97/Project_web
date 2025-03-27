export default function GSAPJS() {
    const homeStore = document.querySelector(".home_store");

    if (homeStore) {


        if (window.screen.width >= 1200) {
          
            // const top = homeStore.offsetTop;
            // console.log(top);
            gsap.to(".home_store", {
                scrollTrigger: {
                    trigger: ".home_store",
                    scrub: 0.5,
                    markers: false,
                    start: "top center",
                    end: "bottom bottom",
                },
                
                width:"100%",
                borderRadius:"0rem",
            })


        }
    }
}








export default function HoverJs() {
    const homeDesItems = document.querySelectorAll(".home_des--item")
    if (homeDesItems) {
        window.addEventListener("load", () => {
            homeDesItems.forEach((homeDesItem) => {
                const content = homeDesItem.querySelector(".home_des--item-content");
                // const btn = homeDesItem.querySelector(".home_des--item-link");
                const heightItem1 = content.clientHeight * -1;




                content.style.marginBottom = heightItem1 + "px";


            })
        })

    }

    const productCt = document.querySelector(".product_ct");
    if (productCt) {
        if (window.screen.width > 800) {
            window.addEventListener("load", () => {
                const wrap = productCt.querySelector(".product_ct--rt-wrap");
                const info = productCt.querySelector(".product_ct--rt-info");
                const tabs = productCt.querySelector(".product_ct--cs-tabs")
                const content = productCt.querySelector(".product_ct--cs-contents");
                const header = document.querySelector(".header");

                if(wrap && info && tabs && content && header){

                    const heightTotal = wrap.clientHeight - info.clientHeight - tabs.clientHeight - (header.clientHeight / 1.5);
                    content.style.maxHeight = heightTotal + "px";
                }
    
            })

          
            
        }
    }

}
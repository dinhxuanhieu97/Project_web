export default function cart() {
    const cart = document.querySelector(".cartBox");
    if (cart) {
        

        

        function heightBoxCart() {

            const cartTop = cart.querySelector(".cartBox_top");
            const cartCenter = cart.querySelector(".cartBox_center");
            const cartBottom = cart.querySelector(".cartBox_bottom");
            const cartList = cart.querySelector(".cartBox_list");

            if (cartTop || cartCenter || cartBottom || cartList) {
                let height = cart.clientHeight - cartTop.clientHeight - cartBottom.clientHeight - cartCenter.offsetTop;
                cartList.style.height = height + "px";
            }

        }

        window.addEventListener("load", () => {
            heightBoxCart();

        })

        const box = cart.querySelector(".widget_shopping_cart_content");
        if(box){
            window.addEventListener("DOMContentLoaded", () => {
                heightBoxCart();
    
            })
        }


        const btnAddCart = cart.querySelector(".btn.cl-3");
        if (btnAddCart) {

            heightBoxCart();
        }

        // const btnRemoveCarts = cart.querySelectorAll(".remove_from_cart_button");
        // if (btnRemoveCarts) {

        //     btnRemoveCarts.forEach((btnRemoveCart) => {
        //         btnRemoveCart.addEventListener("click", () => {
        //         setTimeout(()=>{
        //             heightBoxCart();
        //         },5000)

        //         })
        //     })


        // }


        const btnCart = document.querySelector(".btn-cart");
        if (btnCart) {
            btnCart.addEventListener("click", () => {
                cart.classList.add("showed");
                document.body.style.overflowY = "hidden";
                btnCart.style.pointerEvents = "none";
                heightBoxCart();
            })
        }




        const btnEx = cart.querySelector(".cartBox_ex");
        if (btnEx) {
            btnEx.addEventListener("click", () => {
                cart.classList.remove("showed");
                document.body.style.overflowY = "auto";
                btnCart.style.pointerEvents = "visible";


            })
        }


        const modalCart = document.querySelector(".cartBox_modal")
        modalCart.addEventListener("click", () => {
            cart.classList.remove("showed");
            document.body.style.overflowY = "auto";
            btnCart.style.pointerEvents = "visible";


        })
    }

    const his = document.querySelector(".his");
    if (his) {
        const items = his.querySelectorAll(".his_table--item")
        items.forEach((item) => {
            const btn = item.querySelector(".btn-more")

            btn.addEventListener("click", () => {
                btn.classList.toggle("actived")

                const itemCart = item.querySelector(".his_table--item-cart")
                $(itemCart).slideToggle(500);
            })
        })
    }
}
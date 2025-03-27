export default function Sign() {
    const sign = document.querySelector(".sign");
    if (sign) {
        const ops = sign.querySelectorAll(".sign_op");
        ops.forEach((op, index) => {
            op.addEventListener("click", (e) => {
                e.preventDefault();
                const items = sign.querySelectorAll(".sign_item")
                const itemShowed = sign.querySelector(".sign_item.showed")
                itemShowed.classList.remove("showed");
                items[index].classList.add("showed");

                if (op.classList.contains("dk")) {
                    document.body.classList.add("signIn");
                } else {
                    document.body.classList.remove("signIn");
                }
            })
        })

        const links = sign.querySelectorAll(".linkChange")
        links.forEach((link, index) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                if (link.classList.contains("dk")) {
                    document.body.classList.add("signIn");
                    const itemDk = sign.querySelector(".sign_item.dk")
                    const itemDn = sign.querySelector(".sign_item.dn")
                    itemDk.classList.add("showed");
                    itemDn.classList.remove("showed");

                } else {
                    document.body.classList.remove("signIn");

                    const itemDk = sign.querySelector(".sign_item.dk")
                    const itemDn = sign.querySelector(".sign_item.dn")
                    itemDk.classList.remove("showed");
                    itemDn.classList.add("showed");

                }
            })
        })
    }
}
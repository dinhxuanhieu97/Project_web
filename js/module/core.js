export default function Core() {
    const core = document.querySelector(".core");
    if (core) {
        const items = core.querySelectorAll(".core_item");

        items.forEach((item, index) => {
            if (index === items.length - 1) {
                items[items.length - 1].classList.add("end");

                const end = core.querySelector(".core_item.end");
                if (end) {
                    window.addEventListener("scroll", (e) => {


                        if (window.scrollY > (end.clientHeight * 2)) {
                            end.classList.add("actived")
                        } else {
                            end.classList.remove("actived")

                        }
                    })
                }
            }
        });

    }

    const btnFinds = document.querySelectorAll(".btn-find");
    if (btnFinds) {
        btnFinds.forEach((btn) => {
            const findMenu = document.querySelector(".find_menu");
            const findEx = findMenu.querySelector(".find_ex");
            const modalFind = document.querySelector(".find_menu--modal");
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                findMenu.classList.add("showed");
                document.body.style.overflowY = "hidden";
            })
            findEx.addEventListener("click", (e) => {
                e.preventDefault();
                findMenu.classList.remove("showed");
                document.body.style.overflowY = "auto";

            })

            modalFind.addEventListener("click", (e) => {
                e.preventDefault();
                findMenu.classList.remove("showed");
                document.body.style.overflowY = "auto";

            })

        })
    }
}    
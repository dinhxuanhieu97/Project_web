export default function popup() {

    const popupForms = document.querySelectorAll(".popup-form");
    if (popupForms) {
        const popupBtns = document.querySelectorAll(".popup-btn");
        const popupModals = document.querySelectorAll(".popup-modal");
        const popupExs = document.querySelectorAll(".popup-ex");

        popupForms.forEach((popupForm)=>{
            if(popupForm.classList.contains("showed")){
                document.body.style.overflow = "hidden";
            }else{
                document.body.style.overflow = "auto";

            }
        })
       


        if (popupBtns) {
            popupBtns.forEach((popupBtn) => {
                popupBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    const idString = popupBtn.getAttribute("data-popup");
                    if (popupForms) {
                        popupForms.forEach((popupForm) => {
                            const dataPopupId = popupForm.getAttribute("data-popup-id")

                            if (dataPopupId == idString) {
                                popupForm.classList.add("showed");
                                document.body.style.overflow = "hidden";
                            }
                        })
                    }
                })
            })

        }

        if (popupModals) {
            popupModals.forEach((popupModal) => {
                popupModal.addEventListener("click", () => {
                    popupForms.forEach((popupForm) => {
                        popupForm.classList.remove("showed");
                    })
                    document.body.style.overflow = "auto";
                })
            })
        }

        if (popupExs) {
            popupExs.forEach((popupEx) => {
                popupEx.addEventListener("click", () => {
                    popupForms.forEach((popupForm) => {
                        popupForm.classList.remove("showed");
                    })
                    document.body.style.overflow = "auto";
                })
            })

        }




    }



}
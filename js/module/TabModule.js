export default function TabModule() {

    const tabBoxs = document.querySelectorAll(".tab-box")
    if(tabBoxs){
        tabBoxs.forEach((tabBox) => {
            const tabBtns = tabBox.querySelectorAll(".tab-btn");
            const tabContents = tabBox.querySelectorAll(".tab-content");
            
        
            if (tabBtns) {
                tabBtns.forEach((tabBtn, index) => {
                   
                    tabBtn.addEventListener("click", () => {
                        const tabBtnActived = tabBox.querySelector(".tab-btn.actived");
                        tabBtnActived.classList.remove("actived");
        
                        const tabContentShowed = tabBox.querySelector(".tab-content.showed");
                        tabContentShowed.classList.remove("showed");
        
        
                        tabBtn.classList.add("actived");
                        tabContents[index].classList.add("showed");
                    })
                })
            }
        })
    }

    

}
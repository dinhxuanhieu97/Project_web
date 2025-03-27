export default function scrollAni() {

    
  
    const itemAnis = document.querySelectorAll(".item-ani");

    if (itemAnis) {
        if(window.screen.width > 1200){
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 3 / 4;
            
                itemAnis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;
    
                    if(triggerBottom > boxTop){
                        itemAni.classList.add("showed");
                    }
                })
            })
        }
        
       
    }
}
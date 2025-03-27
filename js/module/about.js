export default function aboutHanh(){
    const abItemSaids = document.querySelectorAll(".about_said--item");
    
    if(abItemSaids){
        const abSaidContents = document.querySelectorAll(".about_said--content");
        abItemSaids.forEach((abItemSaid,index)=>{
            abItemSaids[0].addEventListener("click",()=>{
                abItemSaids[0].classList.add("active1");
                abItemSaids[1].classList.add("active1");
                abItemSaids[2].classList.add("active1");
                abSaidContents[0].classList.add("actived");
            })

            abItemSaids[1].addEventListener("click",()=>{
                abItemSaids[1].classList.add("active2");
                abItemSaids[0].classList.add("active2");
                abItemSaids[2].classList.add("active2");
                abSaidContents[1].classList.add("actived");
            })

            abItemSaids[2].addEventListener("click",()=>{
                abItemSaids[2].classList.add("active3");
                abItemSaids[0].classList.add("active3");
                abItemSaids[1].classList.add("active3");
                abSaidContents[2].classList.add("actived");
            })

            window.addEventListener("click",(e)=>{
                if (!e.target.closest(".about_said--item")) {
                    abItemSaids[0].classList.remove("active1");
                    abItemSaids[1].classList.remove("active1");
                    abItemSaids[2].classList.remove("active1");

                    abItemSaids[0].classList.remove("active2");
                    abItemSaids[1].classList.remove("active2");
                    abItemSaids[2].classList.remove("active2");

                    abItemSaids[0].classList.remove("active3");
                    abItemSaids[1].classList.remove("active3");
                    abItemSaids[2].classList.remove("active3");

                    abSaidContents[0].classList.remove("actived");
                    abSaidContents[1].classList.remove("actived");
                    abSaidContents[2].classList.remove("actived");
                }
            })
        })

        
        
    }
}
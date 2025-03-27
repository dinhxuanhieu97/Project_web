export default function seeMore() {

  const parentWrapper = document.querySelector(".parent-wrapper");
  if (parentWrapper) {
    var heightParent = parentWrapper.clientHeight;
    var itemChilds = parentWrapper.querySelectorAll(".item-child");

    var itemChild = parentWrapper.querySelector(".item-child");
    var itemView = itemChilds.length - 2;

    var itemChildLength = itemView;


    var itemChildHeight = heightParent - (itemChild.clientHeight * itemChildLength);

    var offsetBottom = 24;


    var total = heightParent - itemChildHeight + offsetBottom + "px";

    parentWrapper.style.height = total;

    const btnSeeMore = document.querySelector(".btn-see-more");
    if (btnSeeMore) {

      const btnExitMore = document.querySelector(".btn-exit-more");
      btnSeeMore.addEventListener("click", () => {
        window.onload();

        btnSeeMore.style.display = "none";
        btnExitMore.style.display = "flex";
        parentWrapper.style.height = heightParent + "px";

      });
    }

    const btnExitMore = document.querySelector(".btn-exit-more");
    btnExitMore.style.display = "none";

    if (btnExitMore) {
      const btnSeeMore = document.querySelector(".btn-see-more");

      btnExitMore.addEventListener("click", () => {
        window.onload();
        btnSeeMore.style.display = "flex";

        btnExitMore.style.display = "none";
        parentWrapper.style.height = total;


      });
    }
  }

  // const listShow = document.querySelector(".list-show")
  // if(listShow) {
  //   const itemShow = listShow.querySelector(".item-show");
   
  //   const heightItem = itemShow.clientHeight * 2 + 8;
  //   console.log(heightItem);


  //   listShow.style.height = heightItem + "px"; 
    
    
    

  // }







}

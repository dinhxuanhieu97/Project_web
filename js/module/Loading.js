export default function LoadModule() {
    const load = document.querySelector('.loading')
    window.addEventListener('load', () => {

        if (load) {
            load.classList.add('loaded');
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                load.classList.add('final');
            }, 1000)
            document.body.style.overflow = "auto";

        }
      

    })

  
  

 

    // window.onbeforeunload = function(e) {
    //     if (loadSecond) {
    //         loadSecond.classList.add('from')
    //     }
    // }
}
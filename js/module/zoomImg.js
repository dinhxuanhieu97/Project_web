export default function zoomImg(){
    const productCt = document.querySelector(".product_ct");
    if(productCt){
        if(window.screen.width > 1200){
            $(document).ready(function() {
                $('.zoom').magnify();
                
            });
        }
        
    }
}
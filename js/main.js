import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import SwiperProduct from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import HeaderModule from "./module/HeaderModule.js";
import footer from "./module/footer.js";
import faq from "./module/faq.js";
import seeMore from "./module/seeMore.js";
import selectPhone from "./module/selectPhone.js";
import popup from "./module/popup.js";
import scrollAni from "./module/scrollAni.js";
import Pagi from "./module/pagi.js";
import CountUpModule from "./module/CountUpModule.js";
import filterSp from "./module/filterSp.js";
import GSAPJS from "./module/gsap.js";
import LinksMain from "./module/linksMain.js";
import Ip from "./module/ip.js";
import zoomImg from "./module/zoomImg.js";
import LoadModule from "./module/Loading.js";
import PasswordJS from "./module/Password.js";
import ScrollToSectionModule from "./module/ScrollToSectionModule.js";
import Quantity from "./module/quantity.js";
import cart from "./module/cart.js";
import uploadCV from "./module/uploadCV.js";
import Core from "./module/core.js";
import Sign from "./module/Sign.js";
import HoverJs from "./module/hover.js";

window.addEventListener("DOMContentLoaded", () => {
    Pagi();
    // Animation
    AosModule();
    // Tab
    TabModule();
    // Select
    // Component
    SwiperModule();
    GalleryModule();
    HeaderModule();
    footer();
    faq();
    seeMore();
    selectPhone(); 
    popup();
    scrollAni();
    CountUpModule();
    Select2Module();
    filterSp();
    GSAPJS();
    LinksMain();
    Ip();
    zoomImg();
    LoadModule();
    PasswordJS();
    ScrollToSectionModule();
    Quantity();
    cart();
    uploadCV();
    Core();
    Sign();
    HoverJs();
    SwiperProduct();
});
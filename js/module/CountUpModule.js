export default function CountUpModule() {
   
        const homeStore = document.querySelector(".home_store");
        if (homeStore) {
          $('.home_store--num .num').countUp({
            'time': 3000,
            'delay': 10
          });
        }

      
}

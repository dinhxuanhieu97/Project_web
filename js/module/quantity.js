export default function Quantity() {


    var event = new Event("change");
    const count = document.querySelectorAll('.box-quantity')
    if (count) {
        count.forEach(item => {
            const input = item.querySelector('.ip-value');
            const number = item.querySelector('.number-change');
            number.innerHTML = `${input.value < 10 && input.value > 0 ? "0" : " "}` + input.value;
        })
    }

    document.addEventListener('click', (e) => {

            const count = e.target.closest('.box-quantity');
            const countBtnPlus = e.target.closest('.quantity-btn.btn-plus');
            const countBtnMinus = e.target.closest('.quantity-btn.btn-minus');

            if (count) {
                const countNumber = count.querySelector('.number-change');
                const countInput = count.querySelector('.ip-value');



                if (countBtnPlus) {
                    if (parseInt(countInput.value) < parseInt(countInput.max)) {
                        countInput.value++;
                        countNumber.innerHTML =
                            `${countInput.value < 10 && countInput.value > 0 ? "0" : " "}` + countInput.value;
                        if ($("[name='update_cart']")) {
                            $("[name='update_cart']").removeAttr('disabled');
                            $("[name='update_cart']").trigger("click");
                            console.log("ádasdasdas")
                        }
                        countInput.dispatchEvent(event);

                        console.log(countInput.value);

                    }
                }
                if (countBtnMinus) {
                    if (parseInt(countInput.value) > parseInt(countInput.min)) {
                        countInput.value--;
                        countNumber.innerHTML =
                            `${countInput.value < 10 && countInput.value > 0 ? "0" : " "}` + countInput.value;

                        if ($("[name='update_cart']")) {
                                $("[name='update_cart']").removeAttr('disabled');
                                $("[name='update_cart']").trigger("click");
                            }
                            countInput.dispatchEvent(event);

                            console.log(countInput.value);

                        }
                    }

                }
            })



    }
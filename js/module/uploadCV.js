export default function uploadCV() {



  const btnUploads = document.querySelectorAll(
    ".btn-upload"
  );
  if (btnUploads) {
    btnUploads.forEach((btnUpload, i) => {
      btnUpload.addEventListener("click", () => {
        var fileupload = btnUpload.querySelector(".fileUpload");
        var textFileUpload = btnUpload.querySelector(
          ".text-file-upload"
        );
        var imgSrc = btnUpload.querySelector(".img-src");
        fileupload.click();

        fileupload.addEventListener("change", (e) => {
          let file = e.target.files[0];

          if (file) {
            imgSrc.setAttribute("src", URL.createObjectURL(file));
            console.log(imgSrc)
            fileupload.setAttribute("value", imgSrc.src)
          }

          if (textFileUpload) {
            textFileUpload.innerHTML = file.name;
          }
        });
        const signCsUpload = document.querySelector(".sign_cs--upload");
        if(signCsUpload){
          checkEx();

        }
      });


    })

  }



  var boxs = document.querySelectorAll(".sign_cs--upload-box");

  if (boxs) {
    boxs.forEach((box, i) => {
      const ex = box.querySelector(".close");
      const btnUpload = box.querySelector(
        ".btn-upload"
      );
  
      if (ex) {

        ex.addEventListener("click", (e) => {
          var fileupload = btnUpload.querySelector(".fileUpload");
          var img = btnUpload.querySelector(".img-src");
          fileupload.setAttribute("value", "");
          var newFileList = new DataTransfer().files;
          e.files = newFileList;
          img.setAttribute("src","../template/assets/images/uploadCs.png");
          const closesShowed = box.querySelector(".close.showed");
          if (closesShowed) {
            closesShowed.classList.remove("showed")
          }
        })
      }

    })


  }

  function checkEx() {
    var fileUploads = document.querySelectorAll(".fileUpload");
    if (fileUploads) {
      fileUploads.forEach((fileupload, i) => {
        fileupload.addEventListener("change", (e) => {
          console.log(fileupload.value)
          const boxs = document.querySelectorAll(".sign_cs--upload-box");
          if (fileupload.value !== "") {
            const closes = boxs[i].querySelector(".close");
            closes.classList.add("showed");
          }
        });
      })
    }
  }







  const chooseDate = document.querySelector(".choose-date");
  if (chooseDate) {
    
    $("#datepicker").datepicker({
      firstDay: 1,
      showOtherMonths: true,
      changeMonth: true,
      changeYear: true,
      format: 'dd/mm/yyyy',
      language: 'en',

    });

  }
}
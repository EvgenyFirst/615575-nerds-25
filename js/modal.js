var link = document.querySelector(".write-form-button");
  
  var popup = document.querySelector(".modal-write");
  var close = popup.querySelector(".modal-close");
  
  var form = popup.querySelector("form");
  var writeusr = popup.querySelector("[name=writeusr]");
  var usremail = popup.querySelector("[name=usremail]");
  var usrtext = popup.querySelector("[name=usrtext]");
  
  var isStorageSupport = true;
  var storage = "";

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      writeusr.value = storage;
      writeusr.focus();
    } else {
      writeusr.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

    form.addEventListener("submit", function (evt) {
    if (!writeusr.value || !usremail.value || !usrtext.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("writeusr", writeusr.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.height = "4rem";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.height = "5rem";
    document.getElementById("logo").style.fontSize = "25px";
  }
}

function validateForm() {
  let x = document.forms["myForm"]["fullname"].value;
  let y = document.forms["myForm"]["email"].value;
  let z = document.forms["myForm"]["pesan"].value;
  let name = document.getElementById("fullname").value;
  if (x == "" || y == "" || z == "") {
    alert("Ada field yang belum terisi");
    return false;
  } else {
    document.getElementById("message").innerHTML =
      "Terima Kasih " + name + " pesanmu telah terkirim";
    return false;
  }
}

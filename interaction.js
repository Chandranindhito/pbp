window.onscroll = function () {
  scrollFunction();
};

// Fungsi untuk memperkecil ukuran navigasi bar saat dilakukan scrollTop sebesar 80px
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

// Fungsi untuk memvalidasi form pesan
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

// untuk menampilkan pada tanggal berapa user mengakses halaman website
var today = new Date();
var day = String(today.getDate());
const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
var month = monthNames[today.getMonth()];
var year = today.getFullYear();

document.getElementById("date").innerHTML =
  "Hai, Kamu mengakses halaman web ini pada " + day + " " + month + " " + year;

// Mengubah tampilan layar menjadi mode gelap / dark mode
const profile = document.querySelector("#profil");
const contact = document.querySelector(".contact");
const nav = document.querySelector(".navbar");
const rowTitle = document.querySelector(".row");
const card1 = document.querySelector("#abyan");
const card2 = document.querySelector("#atika");
const card3 = document.querySelector("#dhito");
const card4 = document.querySelector("#hana");
const card5 = document.querySelector("#el");
const contactTitle = document.querySelector("#contactTitle");
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const pesan = document.querySelector("#pesan");
const toggle = document.querySelector(".toggle");
const button = document.querySelector(".far");

toggle.addEventListener("click", () => {
  nav.classList.toggle("dark");
  button.classList.toggle("dark");
  rowTitle.classList.toggle("dark");
  card1.classList.toggle("dark");
  card2.classList.toggle("dark");
  card3.classList.toggle("dark");
  card4.classList.toggle("dark");
  card5.classList.toggle("dark");
  contactTitle.classList.toggle("dark");
  contact.classList.toggle("dark");
  nama.classList.toggle("dark");
  email.classList.toggle("dark");
  pesan.classList.toggle("dark");
  profile.classList.toggle("dark");
});

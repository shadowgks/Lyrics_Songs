// DATATABLE
$(document).ready(function() {
    $('#example1,#example2,#example3,#example4,#example6').DataTable({
      responsive: true
    }).columns.adjust().responsive.recalc();
});


//Dashboard TABLES
//=====================================================================
//select Element fron dashboard
const btn_add_show_modal = document.querySelectorAll('.add_show_modal');
const btn_edit_show_modal = document.querySelectorAll('.edit_show_modal');
const btn_update = document.querySelector('#update');
const btn_add = document.querySelector('#add');

//Select Element Modal
const name_form_modal = document.querySelector('#name');
const Fname_form_modal = document.querySelector('#Fname');
const Lname_form_modal = document.querySelector('#Lname');
const date_birthday_form_modal = document.querySelector('#birthday_date');
const date_release_form_modal = document.querySelector('#release_date');
const password_form_modal = document.querySelector('#password');
const c_password_form_modal = document.querySelector('#c_password');
const picture_form_modal = document.querySelector('#picture');
const gener_form_modal = document.querySelector('#gener');
const artist_form_modal = document.querySelector('#artist');
const email_form_modal = document.querySelector('#email');
const descriprion_form_modal = document.querySelector('#descriprion');
const gender_form_modal = document.querySelector('#gender');


//loop btn add show modal 
btn_add_show_modal.forEach((item)=>{
  item.addEventListener("click",()=>{
    btn_update.style.display = "none";
    btn_add.style.display = "block";
  });
});
//Btn Clients
btn_add_show_modal[0].addEventListener("click",()=>{
  //Show
    gender_form_modal.style.display = "block";
    Fname_form_modal.style.display = "block";
    Lname_form_modal.style.display = "block";
    password_form_modal.style.display = "block";
    c_password_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
    email_form_modal.style.display = "block";
    date_birthday_form_modal.style.display = "block";
  //hide
    name_form_modal.style.display = "none";
    gener_form_modal.style.display = "none";
    artist_form_modal.style.display = "none";
    descriprion_form_modal.style.display = "none";
    date_release_form_modal.style.display = "none";
});
//Btn Artists
btn_add_show_modal[1].addEventListener("click",()=>{
  //Show
    name_form_modal.style.display = "block";
    date_birthday_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
  //hide
    password_form_modal.style.display = "none";
    c_password_form_modal.style.display = "none";
    email_form_modal.style.display = "none";
    gener_form_modal.style.display = "none";
    artist_form_modal.style.display = "none";
    descriprion_form_modal.style.display = "none";
    gender_form_modal.style.display = "none";
    Fname_form_modal.style.display = "none";
    Lname_form_modal.style.display = "none";
    date_release_form_modal.style.display = "none";
});
//Btn Songs
btn_add_show_modal[2].addEventListener("click",()=>{
  //Show
    name_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
    date_release_form_modal.style.display = "block";
    gener_form_modal.style.display = "block";
    artist_form_modal.style.display = "block";
    descriprion_form_modal.style.display = "block";
  //hide
    gender_form_modal.style.display = "none";
    password_form_modal.style.display = "none";
    c_password_form_modal.style.display = "none";
    email_form_modal.style.display = "none";
    date_birthday_form_modal.style.display = "none";
});
//Btn Geners
btn_add_show_modal[3].addEventListener("click",()=>{
  //Show
    name_form_modal.style.display = "block";
  //hide
    gender_form_modal.style.display = "none";
    password_form_modal.style.display = "none";
    c_password_form_modal.style.display = "none";
    picture_form_modal.style.display = "none";
    email_form_modal.style.display = "none";
    date_release_form_modal.style.display = "none";
    date_birthday_form_modal.style.display = "none";
    gener_form_modal.style.display = "none";
    artist_form_modal.style.display = "none";
    descriprion_form_modal.style.display = "none";
});



//loop btn edit show modal 
btn_edit_show_modal.forEach((item)=>{
  item.addEventListener("click",()=>{
    btn_update.style.display = "block";
    btn_add.style.display = "none";
  });
});
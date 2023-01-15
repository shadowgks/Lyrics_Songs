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


//Function show & hide inputs forms
function ClientsShowHide(){
  //Show
    gender_form_modal.style.display = "block";
    Fname_form_modal.style.display = "block";
    Lname_form_modal.style.display = "block";
    password_form_modal.style.display = "block";
    c_password_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
    email_form_modal.style.display = "block";
    date_birthday_form_modal.style.display = "block";
    //add Atrribute name submit data
    btn_add.setAttribute('name','add_user');
    btn_update.setAttribute('name','update_user');
  //hide
    name_form_modal.style.display = "none";
    gener_form_modal.style.display = "none";
    artist_form_modal.style.display = "none";
    descriprion_form_modal.style.display = "none";
    date_release_form_modal.style.display = "none";
}
function ArtistsShowHide(){
  //Show
    name_form_modal.style.display = "block";
    date_birthday_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
    //add Atrribute name submit data
    btn_add.setAttribute('name','add_artist');
    btn_update.setAttribute('name','update_artist');
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
}
function SongsShowHide(){
  //Show
    name_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
    date_release_form_modal.style.display = "block";
    gener_form_modal.style.display = "block";
    artist_form_modal.style.display = "block";
    descriprion_form_modal.style.display = "block";
    //add Atrribute name submit data
    btn_add.setAttribute('name','add_song');
    btn_update.setAttribute('name','update_song');
  //hide
    gender_form_modal.style.display = "none";
    password_form_modal.style.display = "none";
    c_password_form_modal.style.display = "none";
    email_form_modal.style.display = "none";
    date_birthday_form_modal.style.display = "none";
}
function GenersShowHide(){
  //Show
    name_form_modal.style.display = "block";
    //add Atrribute name submit data
    btn_add.setAttribute('name','add_gener');
    btn_update.setAttribute('name','update_gener');
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
}
//loop btn add show modal 
btn_add_show_modal.forEach((item)=>{
  item.addEventListener("click",()=>{
    btn_update.style.display = "none";
    btn_add.style.display = "block";
  });
});

//Btn add Clients
btn_add_show_modal[0].addEventListener("click",()=>{
  ClientsShowHide();
});
//Btn add Artists
btn_add_show_modal[1].addEventListener("click",()=>{
  ArtistsShowHide();
});
//Btn add Songs
btn_add_show_modal[2].addEventListener("click",()=>{
  SongsShowHide();
});
//Btn add Geners
btn_add_show_modal[3].addEventListener("click",()=>{
  GenersShowHide();
});



//loop btn edit show modal 
btn_edit_show_modal.forEach((item)=>{
  item.addEventListener("click",()=>{
    btn_update.style.display = "block";
    btn_add.style.display = "none";
  });
});

//Condition if buttons edit items exist or not
if(document.querySelector('#btn_edit_client')){
  //Btn add Clients
  document.querySelector('#btn_edit_client').addEventListener("click",()=>{
    ClientsShowHide();
  });
}
if(document.querySelector('#btn_edit_artist')){
  //Btn add Artists
  document.querySelector('#btn_edit_artist').addEventListener("click",()=>{
    ArtistsShowHide();
  });
}
if(document.querySelector('#btn_edit_song')){
  //Btn add Songs
  document.querySelector('#btn_edit_song').addEventListener("click",()=>{
    SongsShowHide();
  });
}
if(document.querySelector('#btn_edit_gener')){
  //Btn add Geners
  document.querySelector('#btn_edit_gener').addEventListener("click",()=>{
    GenersShowHide();
  });
}

// DATATABLE
$(document).ready(function() {
    $('#example1,#example2,#example3,#example4,#example6').DataTable({
      responsive: true
    }).columns.adjust().responsive.recalc();
});


//Dashboard TABLES
//=====================================================================
//Form 1 Select
const form1 = document.forms['form1'];

//select Element fron dashboard
const btn_add_show_modal = document.querySelectorAll('.add_show_modal');
const btn_edit_show_modal = document.querySelectorAll('.edit_show_modal');
const btn_update = document.querySelector('#update');
const btn_add = document.querySelector('#add');
const btn_create = document.querySelector('#create');
const inputs_form_id = document.querySelector('#inputs_form_id');
const anotherdiv = document.querySelector('#anotherdiv');
const btn_close_all = document.querySelectorAll('.close');

//Select Element Modal
const name_form_modal = document.querySelector('#name');
const date_birthday_form_modal = document.querySelector('#birthday_date');
const date_release_form_modal = document.querySelector('#release_date');
const picture_form_modal = document.querySelector('#picture');
const cat_form_modal = document.querySelector('#categorie');
const artist_form_modal = document.querySelector('#artist');
const descriprion_form_modal = document.querySelector('#descriprion');

const names_inpute = document.querySelectorAll('.input_names');

//Function show & hide inputs forms
function ArtistsShowHide(){
  //Show
    name_form_modal.style.display = "block";
    date_birthday_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";

    //add Atrribute name submit data
    btn_add.setAttribute('name','add_artist');
    btn_update.setAttribute('name','update_artist');
  //hide
    cat_form_modal.style.display = "none";
    artist_form_modal.style.display = "none";
    descriprion_form_modal.style.display = "none";
    date_release_form_modal.style.display = "none";
}
function SongsShowHide(){
  //Show
    name_form_modal.style.display = "block";
    picture_form_modal.style.display = "block";
    date_release_form_modal.style.display = "block";
    artist_form_modal.style.display = "block";
    descriprion_form_modal.style.display = "block";
    cat_form_modal.style.display = "block";

    //add Atrribute name submit data
    btn_add.setAttribute('name','add_song');
    btn_update.setAttribute('name','update_song');
  //hide
    date_birthday_form_modal.style.display = "none";
    
}
function GenersShowHide(){
  //Show
    name_form_modal.style.display = "block";
    
    //add Atrribute name submit data
    btn_add.setAttribute('name','add_gener');
    btn_update.setAttribute('name','update_gener');
  //hide
    picture_form_modal.style.display = "none";
    date_release_form_modal.style.display = "none";
    date_birthday_form_modal.style.display = "none";
    cat_form_modal.style.display = "none";
    artist_form_modal.style.display = "none";
    descriprion_form_modal.style.display = "none";
}
//loop btn add show modal 
let index = 1;
btn_add_show_modal.forEach((item)=>{
  item.addEventListener("click",()=>{
    btn_update.style.display = "none";
    btn_add.style.display = "block";
    btn_create.style.display = "block";
    form1.reset();

    //loop namas inputs
    names_inpute.forEach(element => {
      element.name = 'name_'+index++;
    });
  });
});


//Btn add Artists
btn_add_show_modal[0].addEventListener("click",()=>{
  ArtistsShowHide();
});
//Btn add Songs
btn_add_show_modal[1].addEventListener("click",()=>{
  SongsShowHide();
});
//Btn add Geners
btn_add_show_modal[2].addEventListener("click",()=>{
  GenersShowHide();
});


//loop btn edit show modal 
btn_edit_show_modal.forEach((item)=>{
  item.addEventListener("click",()=>{
    btn_update.style.display = "block";
    btn_add.style.display = "none";
    btn_create.style.display = "none";
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


//Duplcate form Multiple

let inputs_form_all_class;
btn_add.addEventListener('click',()=>{
  anotherdiv.append(inputs_form_id.cloneNode(true));
  names_inpute.forEach((element) => {  
    element.name = 'name_'+index;
    index++;  
  });
  //Node form added
  inputs_form_all_class = document.querySelectorAll('.inputs_form_all_class');
})


//Remove data from model
btn_close_all.forEach((item1)=>{
  item1.addEventListener('click',()=>{
    
    inputs_form_all_class.forEach((item,index)=>{
        if(index!=0){
          item.remove();
          index=0;
        }
    });
    index=1
  })
});

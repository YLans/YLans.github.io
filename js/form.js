
let headerBtn=document.querySelector('.header_btn');let headerInfo=document.querySelector('.header_form_info');let mainBtn=document.querySelector('.form_btn');let mainInfo=document.querySelector('.form_info');let getResponse=(form,divInfo,source)=>{let xhr=new XMLHttpRequest();xhr.open('POST',source);xhr.send(form);xhr.onload=function(){let obj=xhr.response;for(key in obj){if(obj==='success'){divInfo.classList.remove('hidden');divInfo.textContent='Спасибо! Заявка успешно отправлена!';}else{divInfo.classList.remove('hidden');divInfo.textContent='Произошла ошибка';}}}};headerBtn.addEventListener('click',(e)=>{e.preventDefault();let source='headerMail.php';let headreData=new FormData(document.forms.headerForm);getResponse(headreData,headerInfo,source);});mainBtn.addEventListener('click',(e)=>{e.preventDefault();let source='mainMail.php';let mainData=new FormData(document.forms.formSendMail);getResponse(mainData,mainInfo,source)});
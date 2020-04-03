
let works={exterier:{1:'../img/works/ex1.png',2:'../img/works/ex2.png',3:'../img/works/ex3.png',4:'../img/works/ex4.png',},rooms:{1:'../img/works/room1.jpg',2:'../img/works/room2.jpg',3:'../img/works/room3.jpg',4:'../img/works/room4.jpg',},street:{1:'../img/works/street1.jpg',2:'../img/works/street2.jpg',2:'../img/works/street3.jpg',},};let mainContainer=document.querySelector('.main_works');let worksContainer=mainContainer.querySelector('.work_container');let allBtn=mainContainer.querySelectorAll('.work_list_item');function removeCurrentImg(){let child=worksContainer.children;for(let i=0;i<child.length;i++){while(child.length!==0){child[i].remove();}}}
function addChecked(clickedBtn){clickedBtn.classList.add('btn_checked');}
function exploreBtns(){for(let i=0;i<allBtn.length;i++){if(allBtn[i].classList[1]=='btn_checked'){allBtn[i].classList.remove('btn_checked');removeCurrentImg();}}}
function createItem(source){for(let key in source){let photoContainer=document.createElement('div');photoContainer.classList.add('work_item');let photo=document.createElement('img');photo.src=source[key];photoContainer.append(photo);worksContainer.append(photoContainer);}}
function invBtn(sourceObj){for(let i=0;i<allBtn.length;i++){if(allBtn[i].classList[1]==='btn_checked'&&allBtn[i].textContent==='экстерьеры'){sourceObj=works.exterier;}else if(allBtn[i].classList[1]==='btn_checked'&&allBtn[i].textContent==='жилые интерьеры'){sourceObj=works.rooms;}else if(allBtn[i].classList[1]==='btn_checked'&&allBtn[i].textContent==='общественные интерьеры'){sourceObj=works.street;}else if(allBtn[i].classList[1]==='btn_checked'&&allBtn[i].textContent==='все проекты'){sourceObj=showAll();}}
createItem(sourceObj);}
function showAll(){let ex=works.exterier;let room=works.rooms;let street=works.street;let newArr=[];for(let key in ex){newArr.push(ex[key]);}
for(let i in room){newArr.push(room[i]);}
for(let y in street){newArr.push(street[y]);}
return newArr;}
window.addEventListener('load',el=>{el.preventDefault;invBtn();});allBtn.forEach(btn=>{btn.addEventListener('click',el=>{exploreBtns();addChecked(btn);invBtn(btn);});});
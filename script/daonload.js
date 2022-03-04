const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
        
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
            
		})
		li.classList.add('active');
		let text=li.innerText;
	
	})
});










let parentDawn=document.querySelector(".list-dawnload");
for(let i =0; i <=100;i++){

let divChild =document.createElement("div");
let image =document.createElement("img");
let divText =document.createElement("div");
divText.className="text";
let elSpan =document.createElement("span");
let elh3 =document.createElement("h3");
let elP =document.createElement("p");

image.src = 'images/img6.jpg';



elSpan.appendChild(document.createTextNode("جديد"));

elh3.appendChild(document.createTextNode("عنوان المقطع الصوتييكتب عنوان المقالة هنا بخط"));

elP.appendChild(document.createTextNode("عيكتب هنا جزء من المقالة كمقطع تشويقي يحث ?"));

divText.appendChild(elSpan);
divText.appendChild(elh3);
divText.appendChild(elP);

divChild.className="parent-dawn";
divChild.appendChild(image);
divChild.appendChild(divText);
parentDawn.appendChild(divChild);
console.log(parentDawn);

}
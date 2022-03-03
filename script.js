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

let parent=document.querySelector(".list")
for(let i =0; i <=100;i++){

let divChild =document.createElement("div");
let divText =document.createElement("div");
divText.className="text";
let image =document.createElement("img");
let elh3 =document.createElement("h3");
elh3.appendChild(document.createTextNode("عنوان المقطع الصوتي"));
let elP =document.createElement("p");
elh3.appendChild(document.createTextNode("عنوان المقطع الصوتي"));
divText.appendChild(elh3);


divText.appendChild(elP);

image.src = 'images/img6.png';
image.className="image";
divChild.className="parent";
divChild.appendChild(image);
divChild.appendChild(divText);
parent.appendChild(divChild);
console.log(parent);

}








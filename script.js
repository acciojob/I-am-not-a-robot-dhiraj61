//your code here
let img = document.querySelectorAll('img');
let imgContainer = document.querySelector('.flex');
let reset = document.getElementById('reset');
let verify = document.getElementById('verify');
let selectedElements;

reset.style.display = "none";
verify.style.display = "none";

for(let i = img.length - 1; i > 0; i--){
	let j = Math.floor(Math.random() * (i + 1));
	let temp = img[i].className;
	img[i].className = img[j].className;
	img[j].className = temp;
}

let lastImgIndx = Math.floor(Math.random() * (img.length) + 1);
let lastImg = document.createElement('img');
lastImg.className = "img" + lastImgIndx;
imgContainer.appendChild(lastImg);

let img1 = document.querySelectorAll('img');
let clickCount = 0;
img1.forEach(element => {
			element.addEventListener('click',()=>{
				if(element.classList[1] !== 'selected' && clickCount <2){
					element.classList.add('selected');
					clickCount++;
					selectedElement(clickCount);
				}	
			});
});

function selectedElement(num){
	if(num == 0){
		reset.style.display = "none";
		verify.style.display = "none";
	}
	if(num < 2 && num > 0){
		reset.style.display = "block";
	}else if(num == 2){
		verify.style.display = "block";
	}
	selectedElements = document.querySelectorAll('.selected');
}

reset.addEventListener('click',()=>{
	selectedElements?.forEach(element =>{
		element.classList.remove('selected');
	})
	clickCount = 0;
	selectedElement(clickCount);
})

verify.addEventListener('click',()=>{
	clickCount = 0;
	selectedElement(clickCount);
	if(selectedElements[0]?.classList[0] == selectedElements[1]?.classList[0]){
		alert("You are a human. Congratulations!");
	}else{
		alert("We can't verify you as a human. You selected the non-identical tiles.");
	}
	selectedElements?.forEach(element =>{
		element.classList.remove('selected');
	})
})
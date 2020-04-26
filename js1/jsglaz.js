//js1
let firstSection = document.createElement("h1");
firstSection.innerText = "1. document.write";
document.body.append(firstSection);
let docWrite = document.write("glazunov anton"); 	//1.1
let text = "glazunov anton";
document.write("<br/>");
document.writeln(text.split(" ").length, (' '), text.split(" ").join("").length);	//1.2
document.write("<br/>");

let hrefLocal = window.location.href;			// 1.5
let ssylka = "https://ru.wikipedia.org/wiki/DTMF";
document.write(hrefLocal);
document.write("<br/>");
document.write(hrefLocal.split(":")[0]);
document.write("<br/>");
document.write(hrefLocal.split(".")[1]);
document.write("<br/>");
document.write(hrefLocal.split("//")[1].split(".")[0]);
document.write("<br/>");

let hrefParam = "https://www.youtube.com/?gl=RU&hl=ru";	// 1.6
function getQueryParams(href) {
	let queryParams = {};
	href.substring(href.indexOf('?') + 1, href.length).split('&')
	.forEach(param => {
		const paramKeyValue = param.split('=');
		queryParams[paramKeyValue[0]] = paramKeyValue[1];
	});
	return queryParams;
}

let secondSection = document.createElement("h1"); 	// 2
secondSection.innerText = "2. tags";
document.body.append(secondSection);
let anchorHref = "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics";
for (let i = 0; i < 3; i++) { 	
	let anchor = (document.createElement('a'));
	anchor.href = anchorHref.concat(`/${i}`);
	anchor.innerText = `ssylka ${i + 1}`;
	anchor.style.marginRight = '5px';
	document.body.append(anchor);
}

document.write('<br/>');				// 2.3
for (let i = 0; i < 5; i++) {
	let img = (document.createElement('img'));
	img.id = `value${i+1}`;
   	img.src = "https://sun9-22.userapi.com/c855324/v855324578/2209a4/pVkcuXH7VKs.jpg";
	img.style.height = 50 + i * 15 + 'px';
	img.style.width = 80 + i * 15 + 'px';
	img.style.marginRight = '5px';
	document.body.append(img);
}

document.write('<br/>');				// 2.4-2.8
document.write('kolichestvo anchorov = ' + document.body.getElementsByTagName('a').length);
console.log('kolichestvo anchorov cherez JS = '+ document.body.getElementsByTagName('a').length);
document.write('<br/>');
document.write('kol-vo link = ',
    document.getElementsByTagName('link').length);
console.log('kol-vo link v html = : ',
    document.getElementsByTagName('link').length);
document.write('<br/>');
document.write(document.body.getElementsByTagName('a').item(0).innerText);
document.write('<br/>');
document.write('kol-vo img ' + document.body.getElementsByTagName('img').length);
document.write('<br/>');
document.write('first img width '.concat(document.body.getElementsByTagName('img').item(0).width));

let images = document.querySelectorAll('img');		// 2.9
let maxWidth = images[0].width;
images.forEach((img) => {
    if (img.width > maxWidth) {
        maxWidth = img.width;
    }
});
document.write('<br/>');
document.write("samaya shirokaya kartinka imeet shirinu ", maxWidth);
console.log("samaya shirokaya kartinka imeet shirinu ", maxWidth);

let imagesHeightSum = 0;				// 2.10
images.forEach((img) => {
    imagesHeightSum += img.height;
});
document.write('<br/>');
document.write("summa visot kartinok = ", imagesHeightSum);
console.log("summa visot kartinok = ", imagesHeightSum);

let thirdSection = document.createElement("h1");	// 3. Основные тэги
thirdSection.innerText = "3. forms";
document.body.append(thirdSection);

let forms = [];						// 3.1 
for (let i = 0; i < 10; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `formValue${i+1}`;
    forms.push(form);
    document.body.append(form);
}

let evenFormsNames = forms.filter((form) => form.id.substring(9, form.id.length) % 2 == 0)	// 3.2
    .map((evenForm) => evenForm.id);
document.write(evenFormsNames);

let formsHTML = document.body.getElementsByTagName('form');	// 3.3
for (let i = 0; i < formsHTML.length ; i++) {
    	let inputText = document.createElement('input');
    	let inputPass = document.createElement('input');
    	let inputMail = document.createElement('input');
    	inputText.type = "login";
    	inputText.style.margin = "5px";
    	inputPass.type = "password";
    	inputPass.style.margin = "5px";
    	inputMail.type = "email";
    	inputMail.style.margin = "5px";
    	formsHTML[i].appendChild(inputText);
    	formsHTML[i].appendChild(inputPass);
    	formsHTML[i].appendChild(inputMail);
}

for (let i = 0; i < formsHTML.length ; i++) {		// 3.4
    	let button = document.createElement('button');
    	button.type = 'button';
    	button.innerText = "Show form name";
    	button.style.margin = "5px";
   	button.onclick = () => alert(button.innerText);
    	formsHTML[i].appendChild(button);
}

for (let i = 0; i < formsHTML.length ; i++) {		// 3.5
    	let button = document.createElement('button');
    	button.type = 'button';
    	button.innerText = "Prinadlejnost";
    	button.style.margin = "5px";
    	button.onclick = () => alert(button.parentNode.id);
    	formsHTML[i].appendChild(button);
}

for (let i = 0; i < formsHTML.length ; i++) {		// 3.6
    	let button = document.createElement('button');
    	button.type = 'reset';
    	button.innerText = "Reset whole form";
    	button.style.margin = "5px";
    	formsHTML[i].appendChild(button);
}

for (let i = 0; i < formsHTML.length ; i++) {		// 3.7
    	let button = document.createElement('button');
    	button.type = 'button';
    	button.innerText = "show kol-vo poley";
    	button.style.margin = "5px";
    	button.onclick = () => {
        	alert(`kol-vo poley ${button.parentNode.childNodes.length}`);
    	};
    	formsHTML[i].appendChild(button);
}

document.body.querySelectorAll('button').forEach((button)=> {	// 3.8
    	button.style.padding = '10px';
    	button.style.borderRadius = '10px';
    	button.style.backgroundColor = '#aa00aa';
    	button.style.border = '1px solid rgb(255, 0, 0)';
    	button.style.cursor = 'pointer';
    	button.onmouseover = () => {
        	button.style.backgroundColor = '#110011';
        	button.style.color = "white";
    };
    	button.onmouseout = () => {
        	button.style.color = 'black';
        	button.style.backgroundColor = '#aa00aa';
    };
    	let image = document.createElement('img');
   	image.style.width = '20px';
    	image.style.height = '20px';
    	image.style.verticalAlign = 'bottom';
    	switch (button.innerText) {
        	case "Show form name": image.src = 'sh.png';
            	break;
       		case "Prinadlejnost":image.src = 'lan.png';
            	break;
        	default:
            	image.src = 'emj.png';
    }
    button.prepend(image);
});

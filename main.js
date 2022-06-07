canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
window.addEventListener('keydown', my_keydown);
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escreva um código para obter o evento key-pressed

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		aplhabetkey();
		document.getElementById('d1').innerHTML='You pressed a aplhabet key';
		console.log("aplhabetkey");
	}
	if((keyPressed >=48 && keyPressed<=57)){
		numberkey();
		document.getElementById('d1').innerHTML='You pressed a number key';
		console.log("numberkey");
	}
	if((keyPressed >=37 && keyPressed<=40)){
		arrowkey();
		document.getElementById('d1').innerHTML='You pressed a arrow key';
		console.log("arrowkey");
	}
	if((keyPressed == 17)|| (keyPressed == 18)|| (keyPressed == 27)){
		specialkey();
		document.getElementById('d1').innerHTML='You pressed a number key';
		console.log("numberkey");
	}

}

function aplhabetkey()
{
	img_image='alfabeto.png'
add()
}
function numberkey()
{
	img_image='numero.png'
	add()
}
function arrowkey()
{
	img_image='direcional.png'
	add()
}
function specialkey()
{
	img_image='especial.png'
	add()
}
function otherkey()
{
	img_image="outras.png";
	add();
}
	

//console.log('page loaded');

console.log(document);

//document.getElementById('save').onclick = save;
document.querySelector('#userForm').onkeypress = function() {
	console.log('updating');
	var email = document.querySelector('#userForm input[type="email"]').value;
	var text = document.querySelector('#userForm input[type="text"]').value;
	var password = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary p').innerHTML = email + " " + text + " " + password;
};

document.querySelector('#userForm').onclick = function() {
//function save() {
		//console.log('save');
		// get a DOM object representing a form field.
		var name = document.querySelector('#userForm input[type="text"]');
		console.log(name);
		var email = document.querySelector('#userForm input[type="email"]');
		console.log(email);
		var password = document.querySelector('#userForm input[type="password"]');
		console.log(password);
		document.querySelector('#summary h1').innerHTML = name.value + " " + email.value + " " + password.value;
		var data = document.querySelectorAll('#userForm input');
		console.log(data);

		var paragraphs = document.querySelectorAll('#summary p');
		console.log('found ' + paragraphs.length + ' p tags');

		paragraphs[1].innerHTML = 'Hello World!';
};
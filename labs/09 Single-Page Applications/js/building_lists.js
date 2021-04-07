
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);
console.log(document);

var books = data.books;

var list = document.createElement('ul');
var headings = document.createElement('ul');

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	console.log(books[i].year);

	var item = document.createElement('column');
	var heading = document.createElement('column');

	heading.innerHTML = " | " + "OTSIKKO" + " | ";
	item.innerHTML = " | " + books[i].title + " " + books[i].year + " | ";

	headings.appendChild(heading);
	list.appendChild(item);
}


document.body.appendChild(headings);
document.body.appendChild(list);


var list = document.getElementById('list');
var listAdd = document.getElementById('add');
addElem.addEventListener('click', function(e) {
    function checkOnclickEvent(param) { console.log(param);
};
var element = document.createElement('li');
var element = document.getElementsByTagName("LI");
console.log(element.length);
element.innerHTML = 'item';

var navigation = document.getElementById('list');
var newElem = document.createElement('li');

newElem.innerHTML = element.innerHTML+(element.length);

navigation.appendChild(newElem);

});
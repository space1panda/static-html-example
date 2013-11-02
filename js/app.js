document.getElementById('foo').addEventListener('click', function(){
  alert('Hello Foo');
});
document.getElementById('bar').addEventListener('click', function(){
  var name = prompt('What is your name?');
  alert('Hello ' + name);
});
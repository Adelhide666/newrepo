let div = document.createElement('div');
  div.innerHTML='<b>Максименко Алина Дмитриевна</b>';
  div.style.cssText  = "color:black;background:gray;";
  document.body.prepend(div);

let elem = document.createElement('p');
  elem.innerHTML='<b>06.04.1999</b>';
  elem.style.cssText  = "color:black;background:gray;";
  some_div.append(elem);

document.body.style.background = 'rgb(25,25,112)';
setTimeout(() => document.body.style.background ='', 3000);
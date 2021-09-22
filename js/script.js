var listName = ['Marco','Federica','Alessio','Sergio','Andrea','Ilaria']
var listSurname = ['Piras','Deidda','Carta','Lecca','Meloni','Erriu'];
var list =[];
var a = listName.length - 1 ;
var b = listSurname.length - 1;
var printOut = document.getElementById('fakeList');

for(var i = 0;i < 3;i++){
    list.push(' ' + listName[Math.round(Math.random() * a )] + ' ' + listSurname[Math.round(Math.random() * b )]);
}


printOut.innerHTML = list ;
//!Variables
/*
degisken olusturmak icin
var: mutable   (degistirilebilir) global scope
let:mutable (degistirilebilir)
const:immutable (degistirlemez)
*/
var ilkDegisken='merhaba'; /*; zorunlu degil ancak duzen icin olsa iyi olur*/
ilkDegisken='selam'; /*icerik degistitlebilir */
let ilk='hello';

console.log(ilk);

const ilk1='Ha';
console.log(ilk1);
//ilk1='yenideger';
/* stringler */
const kim='Davut';
const ne='javaScript';
console.log(kim,' '+ne);
console.log(kim,ne);//Aradaki fark yukaridaki ile virgul otomatik iki degisken arasina bosluk atar


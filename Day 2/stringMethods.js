//methodes of string
//lenght
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(txt, sln);
//indexOf()
var str = "Please locate where 'locate' occurs!";
var pos9 = str.indexOf("locate");
console.log(str, pos9);
//lastIndexOf()
let str9 = "Please locate where 'locate' occurs!";
let pos = str9.lastIndexOf("locate");
console.log(str9, pos);
//search()
var str1 = "Please locate where 'locate' occurs!";
var pos1 = str1.search("locate");
console.log(str1, pos1);
//slice()
var str2 = "Apple, Banana, Kiwi";
var res = str2.slice(7, 13);
console.log(str2, res);
//substring()
let str8 = "Apple, Banana, Kiwi";
let res8 = str8.substring(7, 13);
console.log(str8, res8);
//replace()
let str3 = "Please visit Microsoft!";
var n = str3.replace("Microsoft", "W3Schools");
console.log(str3, n);
//concat()
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text1, text2, text3);
//trim()
var str4 = "       Hello World!        ";
alert(str4.trim());
//charAt()
var str5 = "HELLO WORLD";
console.log(str5.charAt(0));
//charCodeAt()
var str6 = "HELLO WORLD";
console.log(str.charCodeAt(0));
//split()
var txt = "a,b,c,d,e";
console.log(txt.split(","));
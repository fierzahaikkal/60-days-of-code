//lanjutan materi quirk pada js

// 'typeof' dan 'object.prototype.toString'
/**
digunakan saat kita ingin melihat tipe dari nilai yang
di lempar oleh fungsi

Terdapat dua opsi:
- typeof (tidak terlalu membantu)
- object.prototype.toString (lebih akurat)

*/

//contoh typeof:
typeof { foo: "bar" };
//output: object
typeof ["foo", "bar"];
//output: object
typeof "foobar";
//output: string
typeof /foo|bar/;
//output: object

// memang cukup informatif karena string memang bagian dari object, array
// dan regular expression

// contoh Object.prototype.toString :
Object.prototype.toString.call({ foo: "bar" });
//output: '[object Object]'
Object.prototype.toString.call(["foo", "bar"]);
//output: '[object Array]'
Object.prototype.toString.call("foobar");
//output: '[object String]'
Object.prototype.toString.call(/foo|bar/);
//output: '[Object RegExp]'

// kenapa menggunakan toString?
/*
karena mungkin saja pada code terdapat sesuatu yang bukan merupakan string
sehingga dengan begitu kita ingin menampilkan sesuatu tersebut kedalam string
jadi toString akan override sesuatu menjadi string
*/

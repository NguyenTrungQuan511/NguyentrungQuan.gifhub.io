var a = 10;
var x = --a + a++;
       
console.log(x);
// a là 18 bởi vì: --a lúc này là 9.  còn a++ thì giá trị trả về lúc này chưa tăng nên nó bằng 9. lúc này x = 9+9=18
// còn nếu gọi a ra thì a lúc này sẽ là 10 
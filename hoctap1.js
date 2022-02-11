var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
/*
       10   + b++ - ++b - ++a   :  a-- = 10 bởi vì lúc này giá trị a in ra trước rồi mới -- (giá trị thật lúc này là 9 bưởi vì sau khi in ra 10 thì nó mới bắt đầu --)
       10   + 18  - ++b - ++a   :  b++ = 18 (tương tự trên), giá trị thật lúc này là 19
       10   + 18  - 20  - ++a   :  ++b = 20 bởi vì lúc này ++ trước rồi mới in ra b
       10   + 18  - 20  -  10   :  ++a = 10 (tương tự trên)
*/
console.log(x);
// Nhấn Run để chạy code
// Thêm các dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
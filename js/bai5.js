/**
 ** Đầu vào
  - Một số có 2 chữ số
 ** Xử lý
  - Tạo biến
   + so: Nhập vào số có 2 chữ số
   + hangDonVi = so % 10
   + hangChuc = so / 10
   + tong = hangDonVi + hangChuc
 ** Đầu ra: Thông báo kết quả 
 */

var so = 31;
var hangDonVi = Math.floor(so % 10);
var hangChuc = Math.floor(so / 10);
var tong = hangDonVi + hangChuc;
console.log("Tổng 2 ký số là: " + tong);

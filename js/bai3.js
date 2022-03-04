/**
 ** Đầu vào
  - Số tiền USD
 ** Xử lý
  - Tạo biến:
   + soTienUSD: Cho người dùng nhập vào số tiền USD
   + tyGia: gán giá trị = 23500
   + quyDoiVND = soTienUSD * tyGia
 ** Đầu ra: Thông báo kết quả 
 */

var soTienUSD = 100;
var tyGia = 23500;
var quyDoiVND = soTienUSD * tyGia;
console.log("Số tiền sau quy đổi là: " + quyDoiVND + " VND");

// file script chung cho các trang html
mybutton = document.getElementById("myBtn");
//dòng 2 được hiểu là lấy phần tử có ID là myBtn ở dòng 159 trong file
//index.html để chỉnh sửa
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    //thẻ này được hiểu là nút cuộn lên đầu màn hình sẽ hiện lên (ở dạng
    // block) khi kéo xuống dưới màn hình 1 đoạn dài 20px. còn khi nhỏ
    //hơn 20px thì màn hình sẽ không hiển thị nút cuộn lên nữa (none)
  } else {
    mybutton.style.display = "none";
  }
}
//khi cuộn xuống được 20px thì hiện nút ra còn không thì ẩn nút đi

function topFunction() {
  document.documentElement.scrollTop = 0;
}
//chức năng cuộn về đầu trang
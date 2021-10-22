// file script chung cho các trang html
mybutton = document.getElementById("myBtn");
//lấy phần tử cái nút trở về đầu trang từ html
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//khi cuộn xuống được 20px thì hiện nút ra còn không thì ẩn nút đi

function topFunction() {
  document.documentElement.scrollTop = 0;
}
//chức năng cuộn về đầu trang
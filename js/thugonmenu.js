var thugon = document.getElementsByClassName("group-collapse-title");
var i;
// biến thu gọn được dùng để gọi phần tử có class là group-collaspe-title
// trong file html của người dùng. 
for (i = 0; i < thugon.length; i++) {
  thugon[i].addEventListener("click", function() {
    //hành động này nhằm xác định chỉ thực hiện chức năng với các nút thu
    //gọn đã được ấn click vào. các nút còn lại sẽ bị vô hiệu hóa
    this.classList.toggle("active");
    //phần active này có tác dụng biến dấu cộng ở bên phải của hàng
    //được ấn vào trở thành dấu trừ. nhằm phân biệt hàng đã được mở
    //rộng và hàng chưa được mở rộng. cụm active này khác với group-collaspe-title
    //ở bên trên. active là cụm từ được lấy từ file thongtindiadiem.css
    //ở dòng 83
    var noidung = this.nextElementSibling;
    if (noidung.style.maxHeight){
      noidung.style.maxHeight = null;
      //hiểu 1 cách đơn giản là ở trong file thongtindiadiem.css
      //ta đã xác định thuộc tính maxHeight (hiểu là chiều cao tối đa)
      //của đoạn văn bản là bằng 0 rồi. nên những đoạn đó sau khi
      //ấn click vào sẽ chuyển xuống đoạn else phía dưới và tiến hành
      //cộng px (pixel điểm ảnh) vào thuộc tính maxHeight để hiển thị
      //được văn bản theo chiều dọc.
      //Các đoạn đã hiện rồi thì điều kiện trong vế if sẽ trở thành đúng
      //khi đó ta ấn click 1 lần nữa thì sẽ thực hiện điều trong
      //ngoặc kép phía trên là thay đổi giá trị maxHeight từ px sang null
      //(null là rỗng) để xóa đi chiều cao của đoạn văn bản.
      //nhưng mắt người thì sẽ hiểu đó là thu gọn menu.
    } else {
      noidung.style.maxHeight = noidung.scrollHeight + "px";
    } 
  });
}
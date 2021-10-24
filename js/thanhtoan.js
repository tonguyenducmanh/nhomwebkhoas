const tentheEl = document.querySelector('#tenthe');
const sotheEl = document.querySelector('#sothe');
const matheEl = document.querySelector('#mathe');
const ngayhethanEl = document.querySelector('#ngayhethan');

const form = document.querySelector('#purchase');

//mấy cái bên trên là mình đang gọi các phần tử có trong html để tiến hành
// lập trình bằng javascript
//bắt đầu đọc từ dòng 83 trước để hiểu rõ hơn
const checktenthe= () => {

    let valid = false;
    //câu trên nghĩa là không được phép bỏ trống ô điền tên
    const min = 3,
        max = 25;
    //câu trên nghĩa là giới hạn số ký tự tối thiểu và tối đa
    const tenthe = tentheEl.value.trim();

    if (!isRequired(tenthe)) {
        showError(tentheEl, 'Tên không được bỏ trống.');
    } else if (!isBetween(tenthe.length, min, max)) {
        showError(tentheEl, `Tên phải nằm trong khoảng từ ${min} đến ${max} ký tự.`)
    } else {
        showSuccess(tentheEl);
        valid = true;
    }
    return valid;
};

    //các hàm check bên dưới đều có nghĩa tương tự

const checksothe = () => {
    let valid = false;
    const min2 = 10,
    max2 = 12;
    const sothe = sotheEl.value.trim();
    if (!isRequired(sothe)) {
        showError(sotheEl, 'Số thẻ không được để trống.');
    } else if (!isBetween(sothe.length, min2, max2)) {
        showError(sotheEl, `Số thẻ nằm trong khoảng từ ${min2} đến ${max2} ký tự.`)
    } else {
        showSuccess(sotheEl);
        valid = true;
    }
    return valid;
};

const checkmathe = () => {

    let valid = false;
    const min3 = 3;
    max3 = 6;
    const mathe = matheEl.value.trim();

    if (!isRequired(mathe)) {
        showError(matheEl, 'Mã thẻ không được để trống.');
    } else if (!isBetween(mathe.length, min3, max3)) {
        showError(matheEl, `Mã thẻ phải nằm trong khoảng từ ${min3} đến ${max3} ký tự.` );
    } else {
        showSuccess(matheEl);
        valid = true;
    }

    return valid;
};
const checkngayhethan = () => {

    let valid = false;
    const min4 = 4;
    max4 = 6;
    const ngayhethan = ngayhethanEl.value.trim();

    if (!isRequired(ngayhethan)) {
        showError(ngayhethanEl, 'Ngày hết hạn không được để trống.');
    } else if (!isBetween(ngayhethan.length, min4, max4)) {
        showError(ngayhethanEl, `ngày hết hạn phải nằm trong khoảng từ ${min4} đến ${max4} ký tự.` );
    } else {
        showSuccess(ngayhethanEl);
        valid = true;
    }

    return valid;
};

//quan trọng chú ý
//phần bên dưới là những thành phần cơ bản cấu tạo nên các chức năng cụ thể bên trên
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
// 2 cái này cái 1 là xác thực hàm nhập vào là yêu cầu bắt buộc
// cái thứ 2 là xác định số lượng chữ cái mà mình nhập vào ở input nó có nhiều hơn hay ít
// hơn mức quy định hay không?



const showError = (input, message) => {
    const formField = input.parentElement;
    // trước tiên chúng ta sẽ lấy phần tử cha của input là phần tử div có class là form field

    formField.classList.remove('success');
    formField.classList.add('error');
    // hàm này được dùng để thêm class success hoặc error vào các phần tử ở trong thẻ html
    // khi thêm success thì sẽ dùng định dạng của class này trong css để cho người dùng biết là
    // đã nhập đúng mẫu. còn khi thêm error thì sẽ định dạng trong css để cho người dùng biết là
    // định dạng sai. trong trường hợp hiện tại cứ thêm error.
    const error = formField.querySelector('small');
    // giờ chúng ta gọi phần tử small ở trong đó. đây chính là nơi hiện thông báo
    // cho chúng ta biết cần phải nhập như thế nào cho đúng. ví dụ như Số thẻ thì cần có 12 chữ số
    //ở đây chúng ta dùng formField là biến đã đặt tên bên trên để mình lấy thẻ small là
    //thẻ con của thẻ div. nếu chúng ta gọi như những dòng đầu tiên là từ document thì
    //nó sẽ lấy toàn bộ thẻ small. điều đó trả về kq là tất cả các thẻ input đều cần nhập lại
    error.textContent = message;
    //cái này là nội dung báo lỗi được thêm vào trong thẻ small của html hiển thị lên web
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
    // đây là chức năng báo nhập thành công. về cơ bản y bên trên. đổi class từ lỗi thành
    //thành công để áp dụng css báo thành công; bên cạnh đó đoạn văn bản lỗi được thay thế thành
    //cụm từ '' có nghĩa là không báo lỗi gì cả.
}

//sau khi kiểm tra rồi thì chúng ta sẽ quay lại can thiệp vào file html để báo cho người dùng biết
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //hàm phía trên có tác dụng ngăn trình duyệt gửi luôn thông tin sau khi
    //người dùng ấn vào nút gửi, nút đăng nhập. phải tạm hoãn để mình còn dùng
    //javascript xác định xem nó có lỗi hay không.

    let istentheValid = checktenthe(),
        issotheValid = checksothe(),
        ismatheValid = checkmathe();
        isngayhethanValid = checkngayhethan();

    let isFormValid = istentheValid &&
        issotheValid  && ismatheValid && isngayhethanValid;
    if (isFormValid) {
        document.getElementById("purchase").submit();
        //bên trên mình ngăn không cho nó thực hiện nút đăng ký để mình còn
        //check đầu vào. check xong rồi thì mình cho nó gửi thôi :v
    }
});

//đoạn bên dưới có nghĩa là cứ sau nửa giây hoãn người dùng nhập thì nó sẽ auto check lỗi
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'tenthe':
            checktenthe();
            break;
        case 'sothe':
            checksothe();
            break;
        case 'mathe':
            checkmathe();
            break;
        case 'ngayhethan':
            checkngayhethan();
            break;
    }
}));
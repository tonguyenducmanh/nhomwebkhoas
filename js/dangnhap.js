const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');

const form = document.querySelector('#signin');

//mấy cái bên trên là mình đang gọi các phần tử có trong html để tiến hành
// lập trình bằng javascript
//bắt đầu đọc từ dòng 40 trước để hiểu rõ hơn
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email không được để trống.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email không hợp lệ.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Mật khẩu không được để trống.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Mật khẩu phải có ít nhất 8 ý tự bao gồm 1 chữ cái viết thường, 1 chữ cái viết hoa, 1 số, 1 ký tự đặc biệt trong khoảng (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};
//quan trọng chú ý
//phần bên dưới là những thành phần cơ bản cấu tạo nên các chức năng cụ thể bên trên
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
//phần phía trên gọi là biểu thức chính quy. là 1 tập những quy tắc được người khác
//chứng minh sẵn rồi cứ lấy dùng thôi.
// ^	Mật khẩu bắt đầu
// (? =. * [az])	Mật khẩu phải chứa ít nhất một ký tự viết thường
// (? =. * [AZ])	Mật khẩu phải chứa ít nhất một ký tự viết hoa
// (?=.*[0-9])	Mật khẩu phải chứa ít nhất một số
// (? =. * [! @ # $% ^ & *])	Mật khẩu phải chứa ít nhất một ký tự đặc biệt.
// (?=.{8,})	Mật khẩu phải có tám ký tự trở lên

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
    // cho chúng ta biết cần phải nhập như thế nào cho đúng. ví dụ như email thì cần có @
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

    let isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();

    let isFormValid = 
        isEmailValid &&
        isPasswordValid;

    if (isFormValid) {
        document.getElementById("signin").submit();
        //bên trên mình ngăn không cho nó thực hiện nút đăng ký để mình còn
        //check đầu vào. check xong rồi thì mình cho nó gửi thôi :v
    }
});

//đoạn bên dưới có nghĩa là cứ sau nửa giây hoãn người dùng nhập thì nó sẽ auto check lỗi
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // bỏ qua thời gian cũ
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // tạo thời gian lưu ms
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
    }
}));
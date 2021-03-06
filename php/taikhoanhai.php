<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập - Hang Sơn Đoòng</title>
    <!--tùy chỉnh tiêu đề-->
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <!--logo trên thanh địa chỉ-->
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../css/taikhoanhai.css">
    <!--mỗi trang sẽ bao gồm 1 link tới file css chung là style.css và 1 file css riêng-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet">
    <!--địa chỉ icon-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet">
    <!--toàn bộ font chữ được dùng-->   
</head>
<body>
    <div class="box-text-link">
        <a href="../php/datvedattour.php">Mua vé</a>
    <!--nút mua vé ngay-->
    </div>
    <div id="main">
        <div class="header-container">
            <!-- phần header trên cùng của trang web, gồm logo, menu và liên hệ mxh-->
                <div class="header-logo">
                    <a href="../index.php">SON DOONG</a>  
                </div>
                <div class="header-space">
                    <hr>
                </div>
                <div class="header-menu">
                    <ul class="header-menu-list">
                        <!-- menu của trang web -->
                        <li><a href="../index.php">trang chủ</a></li>
                        <li><a href="../php/datvedattour.php">Đặt vé</a></li>
                        <li><a href="../php/thongtingioithieu.php">Giới thiệu</a></li>
                        <li><a href="../php/thongtindiadiem.php">Địa điểm</a></li>
                        <li><a href="../php/thongtintour.php">Lướt xem Tour</a></li>
                        <li><a href="taikhoan.php">Tài khoản</a></li>
                    </ul>
                </div>
                <div class="header-contact">
                    <ul class="header-contact-list">
                        <!-- các địa chỉ liên hệ tới mạng xã hội -->
                        <li>
                            <a href="https://www.instagram.com/explore/locations/2010123542607419/son-doong-cave/">
                                <i class="fab fa-instagram-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/sondoongcavevn/">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/sondoongvn">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/midori_nguyen94/son-doong-cave/">
                                <i class="fab fa-pinterest"></i>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
        <div class="main-container">
            <!--nội dung chính của trang web-->
            <br><br><br>
            <div class="bold-text-one">
                Đăng nhập
            </div>
            <br>
            <div class="text-container">
            <form id="signin" class="text-form" method="get" class="form" action="thongtincanhan.php">
                        <div class="form-field">
                            <label for="Email"></label>
                            <input type="text" name="email" id="email" autocomplete="off" placeholder="Email"><br>
                            <small></small>
                        </div>
            
                        <div class="form-field">
                            <label for="password"></label>
                            <input type="password" name="password" id="password" autocomplete="off"
                                placeholder="Mật khẩu"><br>
                            <small></small>
                        </div>
                        <button class="send-info" type="submit">
                            Đăng nhập
                        </button>
                    <div class="text-box-signin">
                        <a href="taikhoan.php">Bạn chưa có tài khoản? Đăng ký</a>
                    </div>
                </form>
                <div class="text-box">
                    <div class="text-box-title">
                        Hãy kết nối với chúng tôi
                    </div>
                    <div class="text-box-content">
                        Mọi thông tin cá nhân của khách hàng chỉ nhằm mục đích
                        xác nhận danh tính và đủ trên 18 tuổi để tham gia cuộc
                        tham hiểm này. <br> Chúng tôi cam kết không cung cấp thông tin
                        cho bất cứ bên thứ ba nào mà không có sự đồng ý của khách
                        hàng.
                    </div>
                </div>
            </div>
            <div class="straight-line-two"> <br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br>
            </div>
            <div class="three-column-two">
                <img src="../images/anh10.png" class="image-last" alt="">
                <img src="../images/anh12.png" class="image-last" alt="">
                <img src="../images/anh11.png" class="image-last" alt="">
            </div>
            <div class="three-column-two-text">
                @nhomwebnhokhoas
            </div>

            
        </div>
        <div class="footer-container">
            <div class="footer-container-left">
                <div>Bản quyền thuộc <i class="far fa-copyright"></i> 2021
                     Khoa hệ thống thông tin trường đại học Thương Mại
                </div>
                <div>Địa chỉ:79 Đ. Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội 122868</div>
                <div>Giấy phép ĐKKD số 412024181, đăng ký lần đầu ngày 21/10/2021.</div>
                <div>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội - Phòng đăng ký kinh doanh.</div>
                <div>Giấy phép Kinh doanh lữ hành quốc tế số 44-002/2021/TCDL-GPLHQT 
                do <br> Tổng Cục Du Lịch cấp ngày 10/10/2021.</div>
                <div>Email: nhomwebnho@tmu.edu.com</div>
            </div>
            <div class="footer-container-right">
                <img src="../images/anh13.png" alt="">
            </div>
        </div>
    </div>  
    <button onclick="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-chevron-up"></i></button>
    <!--tạo nút quay về đầu trang bằng javaScript-->
    <script src="../script.js"></script>
    <script src="../js/dangnhap.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nhóm web nhỏ - Hang Sơn Đoòng</title>
    <!--đây là file trang chủ-->
    <!--tùy chỉnh tiêu đề-->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!--logo trên thanh địa chỉ-->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/index.css">
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
    <a href="php/datvedattour.php">Mua vé</a>
<!--nút mua vé ngay-->
</div>
<div id="main">
    <div class="header-container">
        <!-- phần header trên cùng của trang web, gồm logo, menu và liên hệ mxh-->
            <div class="header-logo">
                <a href="index.php">SON DOONG</a>  
            </div>
            <div class="header-space">
                <hr>
            </div>
            <div class="header-menu">
                <ul class="header-menu-list">
                    <!-- menu của trang web -->
                    <li><a href="index.php">trang chủ</a></li>
                    <li><a href="php/datvedattour.php">Đặt vé</a></li>
                    <li><a href="php/thongtingioithieu.php">Giới thiệu</a></li>
                    <li><a href="php/thongtindiadiem.php">Địa điểm</a></li>
                    <li><a href="php/thongtintour.php">Lướt xem Tour</a></li>
                    <li><a href="php/taikhoan.php">Tài khoản</a></li>
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
        <img src="images/anh1.png" alt="" class="image-one">
        <div class="straight-line"> <br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="bold-text-one">
            Hang động tự nhiên<br>lớn nhất thế giới
        </div>
        <div class="straight-line"> 
            <div class="box-text-one">
                <div class="box-text-one-title">
                    HO KHANH, HOWARD LIMBERT AND DEB
                </div>
                <div class="box-text-one-content">
                    Là những người đầu tiên khảo sát về hang động này, cũng mở đường cho các chuyến khảo sát
                    kỹ hơn sau này. Cùng với sức mạnh truyền thông, Việt Nam và những nhóm chuyên gia này đã
                    chính thức giới thiệu hang Sơn Đoòng tới toàn thế giới.
                </div>
                <div class="box-text-one-link">
                    <a href="php/thongtingioithieu.php">tìm hiểu thêm</a>
                </div>
            </div>
        </div>
        <img src="images/anh2.png" alt="" class="image-one">
        <div class="three-column-text">
            cac dia diem noi bat
        </div>
        <div class="three-column">
            <div class="image-two"><a href="php/thongtindiadiem.php" class='image-link'>Xem thêm</a></div>
            <div class="image-three"><a href="php/thongtindiadiem.php" class='image-link'>Xem thêm</a></div>
            <div class="image-four"><a href="php/thongtindiadiem.php" class='image-link'>xem thêm</a></div>
        </div>
        <div class="straight-line"> <br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <img src="images/anh9.png" alt="" class="image-five">
        <div class="straight-line"> <br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="container-text-two">
            <div class="bold-text-two">
                Chúng tôi có những gì?
            </div>
            <div class="box-text-two">
                <div class="box-text-two-title">
                    tour du lich
                </div>
                <div class="box-text-two-content">
                    Chúng tôi có rất nhiều gói dịch vụ<br> bao gồm tour trong ngày
                    tua 2 ngày,...
                </div>
                <div class="box-text-two-link">
                    <a href="php/thongtintour.php">xem ngay</a>
                </div>
            </div>  
        </div>
        <div class="straight-line-two"> <br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="three-column-two">
            <img src="images/anh10.png" class="image-last" alt="">
            <img src="images/anh12.png" class="image-last" alt="">
            <img src="images/anh11.png" class="image-last" alt="">
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
            <img src="images/anh13.png" alt="">
        </div>
    </div>
    <button onclick="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-chevron-up"></i></button>
    <!--tạo nút quay về đầu trang bằng javaScript-->
    <script src="script.js"></script>
</div>
</body>
</html>
<?php
?>
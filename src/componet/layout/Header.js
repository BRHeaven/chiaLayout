import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className='header_top'>
                        <div className="header_logo">
                            <img src="./Image/logo.png" alt />
                        </div>
                        <div className="header_slogan">
                            <img src="./Image/slogan.png" alt />
                        </div>
                    </div>
                    <div className="header_bottom">
                        <ul>
                            <li><a href="#">TRANG CHỦ</a></li>
                            <li><a href="#">GIỚI THIỆU</a></li>
                            <li><a href="#">THÀNH TỰU</a></li>
                            <li><a href="#">CÁC KHOÁ HỌC</a></li>
                            <li><a href="#">TIN TỨC &amp; SỰ KIỆN</a></li>
                            <li><a href="#">CHẤT LƯỢNG GIẢNG DẠY</a></li>
                            <li><a href="#">GÓC HỌC VIÊN</a></li>
                            <li><a href="#">GALLERY</a></li>
                            <li><a href="#">CƠ HỘI NGHỀ NGHIỆP</a></li>
                            <li><a href="#">LIÊN HỆ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

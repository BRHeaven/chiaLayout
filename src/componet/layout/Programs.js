import React, { Component } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default class
    extends Component {
    render() {
        return (
            <div>
                <div className="programs">
                    <h2>CÁC CHƯƠNG TRÌNH TẠI VUS</h2>
                    <div className="line" />
                    <div>
                        <a href="#">
                            <img src="./Image/chuong_trinh_1.png" alt />
                            <p>ANH NGỮ MẪU GIÁO SMARTKIDS</p>
                            <span>Dành cho học viên trẻ em từ 4 đến 6 tuổi</span>
                        </a>
                        <a href="#">
                            <img src="./Image/chuong_trinh_2.png" alt />
                            <p>ANH NGỮ THIẾU NHI SUPERKIDS</p>
                            <span>Dành cho học viên trẻ em từ 6 đến 11 tuổi</span>
                        </a>
                        <a href="#">
                            <img src="./Image/chuong_trinh_3.png" alt />
                            <p>ANH NGỮ THIẾU NIÊN YOUNG LEADERS</p>
                            <span>Dành cho học viên từ 11 đến 15 tuổi</span>
                        </a>
                        <a href="#">
                            <img src="./Image/chuong_trinh_4.png" alt />
                            <p>ANH NGỮ GIAO TIẾP QUỐC TẾ EIC</p>
                            <span>Dành cho học viên người lớn từ 17 tuổi</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

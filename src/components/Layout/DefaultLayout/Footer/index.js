import "./footer.scss"
function Footer() {
    return <div className="container-fluid">
        <div className="row wrap-footer">
            <div className="col-xl-4 describe">
                <h3>Công ty</h3>
                <a href="#">Giới thiệu</a> <br />
                <a href="#">Trung tâm trợ giúp</a> <br />
                <a href="#">Liên hệ</a> <br />
                <a href="#">Quy chế</a> <br />
                <a href="#">Điều khoản sử dụng</a> <br />
                <a href="#">Giải quyết khiếu nại</a> <br />
                <a href="#">Đăng ký quán</a>
            </div>
            <div className="col-xl-4 content-footer">
                <h3>Hệ thống website đặt món ăn NOBORE</h3>
                <img src={require("~/image/Logo.png")} alt="Logo" />
            </div>
            <div className="col-xl-auto info-company">
                <h3>Địa chỉ công ty</h3>
                <p>Công ty cổ phần NOBORE</p>
                <p>Lầu AF, tòa nhà Jabes1,</p>
                <p>số 222 đường Công Quỳnh, phường Phạm Ngũ Lão, Quận 1, TP. HCM</p>
                <p>Giấy CN ĐKDN số: 0311828035</p>
                <p>do Sở Kế hoạch đầu tư TP.HCM cấp ngày 14/11/2022</p>
                <p>Email: <a href="#">support@nobore.vn</a></p>
            </div>
        </div>
    </div>;
}

export default Footer;


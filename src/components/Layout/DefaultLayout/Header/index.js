import "./header.scss";
function Header() {
    const RedirectOrder = () => {
        window.location = "http://localhost:3000/order";
    }
    const RedirectPayment = () => {
        window.location = "http://localhost:3000/payment";
    }
    return (
        <div class="container-fluid">
            <div className="row wrap-header">
                <div className="col-xl-3 col-md-3 logo" onClick={RedirectOrder}>
                    <img src={require("~/image/Logo.png")} alt="Logo" />
                    <p>NOBORE</p>
                </div>
                <div className="col-xl-1 dr-location">
                    <select name="location">
                        <option value="TPHCM">TP.HCM</option>
                        <option value="HaNoi">Hà Nội</option>
                        <option value="DaNang">Đà Nẵng</option>
                        <option value="QuangNgai">Quảng Ngãi</option>
                    </select>
                </div>
                <div className="col-md-auto more">
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Xem thêm
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a href="#" className="dropdown-item food">Đồ ăn</a></li>
                            <li><a href="#" className="dropdown-item trendy">Bán chạy</a></li>
                            <li><a href="http://localhost:3000/" className="dropdown-item aboutus">Về chúng tôi</a></li>
                            <li><a href="http://localhost:3000/" className="dropdown-item help">Hỗ trợ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-5 homeopt">
                    <a href="http://localhost:3000/order" className="food">Đồ ăn</a>
                    <a href="http://localhost:3000/order" className="trendy">Bán chạy</a>
                    <a href="http://localhost:3000/" className="aboutus">Về chúng tôi</a>
                    <a href="http://localhost:3000/" className="help">Hỗ trợ</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="1.8rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div className="col-xl-auto col-md-auto info">
                    <div className="detail-info">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/a/a7/Happier_Than_Ever.jpeg" alt="avatar" />
                        <div className="btn-group">
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Thiên Băng
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="http://localhost:3000/infomation">Thông tin cá nhân</a></li>
                                <li><a className="dropdown-item" href="http://localhost:3000/manageorder">Quản lý đơn hàng</a></li>
                                <li><a className="dropdown-item" href="http://localhost:3000/">Đăng xuất</a></li>
                            </ul>
                        </div>
                        <div className="bt-cart-xs">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="3rem" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bt-cart">
                        <button type="button" onClick={RedirectPayment}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="3rem" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;

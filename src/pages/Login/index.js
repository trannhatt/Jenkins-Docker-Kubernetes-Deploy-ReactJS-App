import './login.scss';
import Logo_Nobore from "~/image/logo_nobore";
function Login() {
  return <div id="login-page">
    <div id="img-login-res">
      <img src={Logo_Nobore.image} height="200px" width="251px" alt="" />
    </div>
    <div class="form">
      <form id="login-form" action="http://localhost:3000/order">
        <div class="input-login">
          <input type="text" placeholder="TÊN ĐĂNG NHẬP" />
          <i class="user-icon ti-user"></i>
        </div>
        <div class="pass-login">
          <input type="password" placeholder="MẬT KHẨU" />
          <i class="key-icon ti-key"></i>
        </div>
        <button class="btn-login">ĐĂNG NHẬP</button>
        <p class="message">Quên mật khẩu? <a href="#">Nhấn vào để đặt lại</a></p>
        <button class="btn-create">TẠO MỘT TÀI KHOẢN MỚI</button>
      </form>
    </div>
  </div>
}

export default Login;


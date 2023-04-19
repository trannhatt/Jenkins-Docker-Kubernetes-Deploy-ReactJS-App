import './Form.scss'
import FormItem from "./FormItem";
function FormInfo() {
    const RedirectOrder = () => {
        window.location = "http://localhost:3000/order";
    }
    return (
        <div class="wrapper wrapperform">
            <p class="ttcn">Thông Tin Cá Nhân</p>
            <FormItem label="Họ và tên" placehoder="Họ và tên" value="Lãnh Hàn Thiên Băng" />
            <FormItem label="Email" placehoder="Họ và tên" value="hmmm@gmail.com" />
            <div class="item">
                <label> Ngày sinh</label>
                <input type="date" value="2022-11-25" />
            </div>
            <FormItem label="Số điện thoại" placehoder="Họ và tên" value="0123456789" />
            <FormItem label="Số CCCD/CMND" placehoder="Họ và tên" value="111155557777" />
            <FormItem label="Địa chỉ" placehoder="Họ và tên" value="KTX Khu A, ĐHQG TP - HCM" />

            <div class="listbtn">
                <input type="submit" class="Btn0" value="Sửa avatar" />
                <input type="submit" class="Btn" value="Sửa hồ sơ" />
                <input type="submit" class="Btn1" value="Quay lại" onClick={RedirectOrder} />
            </div>

        </div>

    );
}

export default FormInfo;
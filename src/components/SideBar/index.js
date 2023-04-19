import React from 'react';
import {Link} from'react-router-dom'
//import "antd/dist/antd.css";
import './SideBar.scss'
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faUtensils } from '@fortawesome/free-solid-svg-icons';
const { SubMenu } = Menu;
  
export default function SideBar() {
  
  return (
    <div class="ctsidebar">
      <div class={StyleSheet.sideBar}>
      <Menu
        //defaultOpenKeys={['1']}
        defaultSelectedKeys={['1']}
        style={{ width: 220 }}
        mode="inline"
      >
        <SubMenu key="1" title="QUẢN LÝ MENU" >
          <Menu.Item key="1.2"><Link to="/managemenu">
            {/* <Icon type="fire" /> */}
            <span>Menu Quán ăn</span>
          </Link></Menu.Item>
          <Menu.Item key="1.3"><Link to="/managemenu/editmenu">
            {/* <Icon type="fire" /> */}
            <span>Chỉnh sửa món ăn</span>
          </Link></Menu.Item>
          
        </SubMenu>
        <SubMenu key="2" title="QUẢN LÝ ĐƠN HÀNG">
          <Menu.Item key="2.1">
          <Link to="/manageorder/orderlist">
            {/* <Icon type="fire" /> */}
            <span>Danh sách đơn</span>
          </Link></Menu.Item>

          <Menu.Item key="2.2">
          <Link to="/manageorder/waitingverify">
            {/* <Icon type="fire" /> */}
            <span>Chờ xác nhận</span>
          </Link></Menu.Item>

          <Menu.Item key="2.3">
          <Link to="/manageorder/delivery">
            {/* <Icon type="fire" /> */}
            <span>Đang giao</span>
          </Link></Menu.Item>
          <Menu.Item key="2.4">
          <Link to="/manageorder/deliveried">
            {/* <Icon type="fire" /> */}
            <span>Đã giao</span>
          </Link></Menu.Item>

          <Menu.Item key="2.5">
          <Link to="/manageorder/cancelled">
            {/* <Icon type="fire" /> */}
            <span>Đã hủy</span>
          </Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="3"><Link to="/managemenu/chatbox">
            {/* <Icon type="fire" /> */}
            <span>Tin nhắn</span>
          </Link></Menu.Item>
      </Menu>
    </div>
    </div>
    
  );
}
import './WaitingVerify.scss'

import React, { Component, useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function WaitingVerify() {
  const [OrderList, setOrderList] = useState([]);

  return (
    <div class="table1">
      <p class="qldh">Quản Lý <span>Đơn Chờ Xác Nhận</span></p>
      <p class="ddh"><FontAwesomeIcon icon={faClipboardList} /> Quản lý đơn hàng  <FontAwesomeIcon icon={faAngleRight} /> Đơn chờ xác nhận</p>
      <Table>
        <thead class="thead-dark" >
          <tr class="tbhd">
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên món ăn</th>
            <th>Tổng tiền</th>
            <th>Thời gian đặt hàng</th>
            <th>Trạng thái thanh toán</th>
            <th>Chi tiết đơn hàng</th>
            <th>Xác nhận </th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>SD12345</td>
            <td>Gà rán</td>
            <td>100000</td>
            <td>22/12/2022 14:17 am</td>
            <td>đã hoàn thành</td>
            <td>
              <a href="#"> chi tiết</a>
            </td>
            <td>
              <Button> xác nhận
              </Button>
            </td>
            <td>
              <Button>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>SD12346</td>
            <td>sushi cá hồi</td>
            <td>185000</td>
            <td>20/12/2022 11:00 am</td>
            <td>đã hoàn thành</td>
            <td>
              <a href="#"> chi tiết</a>
            </td>
            <td>
              <Button class="verify"> xác nhận
              </Button>
            </td>
            <td>
              <Button>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>

        </tbody>
      </Table>
    </div>

  )
}


export default WaitingVerify;
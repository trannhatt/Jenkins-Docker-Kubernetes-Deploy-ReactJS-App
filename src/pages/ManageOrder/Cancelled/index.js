import './Cancelled.scss'

import React, { Component, useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function Cancelled() {
  const [OrderList, setOrderList] = useState([]);

  return (
    <div class="table1">
      <p class="qldh">Quản Lý <span>Đơn Đã Hủy</span></p>
      <p class="ddh"><FontAwesomeIcon icon={faClipboardList} /> Quản lý đơn hàng  <FontAwesomeIcon icon={faAngleRight} /> Đơn đã hủy</p>
      <Table>
        <thead class="thead-dark" >
          <tr class="tbhd">
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên món ăn</th>
            <th>Tổng tiền</th>
            <th>Thời gian đặt hàng</th>
            <th>Nguyên nhân </th>
            <th>Chi tiết đơn hàng</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>SD12345</td>
            <td>Gà rán</td>
            <td>100000</td>
            <td>22/12/2022 14:17 am</td>
            <td>Hết tiền</td>
            <td>
              <a href="#"> chi tiết</a>
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
            <td>20/11/2022 10:00 am</td>
            <td>Shop hủy</td>
            <td>
              <a href="#"> chi tiết</a>
            </td>
            <td>
              <Button>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>SD12346</td>
            <td>bánh kem</td>
            <td>255000</td>
            <td>20/12/2022 1:00 am</td>
            <td>Sai địa chỉ</td>
            <td>
              <a href="#"> chi tiết</a>
            </td>
            <td>
              <Button>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>SD12346</td>
            <td>Vịt quay </td>
            <td>225000</td>
            <td>10/12/2022 12:00 am</td>
            <td>Hết hàng</td>
            <td>
              <a href="#"> chi tiết</a>
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


export default Cancelled;
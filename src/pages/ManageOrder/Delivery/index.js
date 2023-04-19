import './Delivery.scss'

import React, { Component, useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function Delivery() {
  const [OrderList, setOrderList] = useState([]);

  return (
    <div class="table1">
      <p class="qldh">Quản Lý <span>Đơn Đang Giao</span></p>
      <p class="ddh"><FontAwesomeIcon icon={faClipboardList} /> Quản lý đơn hàng  <FontAwesomeIcon icon={faAngleRight} /> Đơn đang giao</p>
      <Table>
        <thead class="thead-dark" >
          <tr class="tbhd">
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên món ăn</th>
            <th>Tổng tiền</th>
            <th>Thời gian đặt hàng</th>
            <th>Đơn vị vận chuyển </th>
            <th>Chi tiết đơn hàng</th>
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
            <td>Gojek</td>
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
            <td>20/12/2022 11:00 am</td>
            <td>Grab</td>
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
            <td>SD12347</td>
            <td>Bò nướng</td>
            <td>250000</td>
            <td>22/12/2022 14:17 am</td>
            <td>Gojek</td>
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
            <td>SD12348</td>
            <td>Cơm chiên</td>
            <td>103000</td>
            <td>22/12/2022 1:17 am</td>
            <td>Gojek</td>
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
            <td>5</td>
            <td>SD12345</td>
            <td>bánh kem</td>
            <td>200000</td>
            <td>22/12/2022 4:17 am</td>
            <td>Grab</td>
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
            <td>6</td>
            <td>SD12345</td>
            <td>Gà luộc</td>
            <td>105000</td>
            <td>22/12/2022 14:7 am</td>
            <td>Gojek</td>
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


export default Delivery;
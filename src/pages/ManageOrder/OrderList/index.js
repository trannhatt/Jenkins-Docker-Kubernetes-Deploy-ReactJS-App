import './OrderList.scss'

import React, { Component, useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function OrderList() {
  const [OrderList, setOrderList] = useState([]);

  return (
    <div class="table1">
      <p class="qldh">Quản Lý <span>Danh sách đơn hàng</span></p>
      <p class="ddh"><FontAwesomeIcon icon={faClipboardList} /> Quản lý đơn hàng  <FontAwesomeIcon icon={faAngleRight} /> Danh sách đơn hàng</p>
      <Table>
        <thead class="thead-dark" >
          <tr class="tbhd">
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên món ăn</th>
            <th>Tổng tiền</th>
            <th>Thời gian đặt hàng</th>
            <th>Trạng thái</th>
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
            <td>đã hoàn thành</td>
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
            <td>đã hoàn thành</td>
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
            <td>sushi cá mập</td>
            <td>225000</td>
            <td>10/12/2022 11:00 am</td>
            <td>đang vận chuyển</td>
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
            <td>Thịt xông khói</td>
            <td>122000</td>
            <td>15/12/2022 11:30 am</td>
            <td>chờ xác nhận</td>
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
            <td>SD12349</td>
            <td>mì xào bò</td>
            <td>285000</td>
            <td>31/12/2022 18:30 am</td>
            <td>chờ vận chuyển</td>
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
            <td>SD12350</td>
            <td>bing chilling</td>
            <td>15000</td>
            <td>31/12/2022 20:35 pm</td>
            <td>chờ xác nhận</td>
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
            <td>7</td>
            <td>SD12350</td>
            <td>sườn nướng</td>
            <td>15000</td>
            <td>31/12/2022 20:35 pm</td>
            <td>chờ xác nhận</td>
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
            <td>8</td>
            <td>SD12350</td>
            <td>trà sữa</td>
            <td>15000</td>
            <td>31/12/2022 20:35 pm</td>
            <td>chờ xác nhận</td>
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
            <td>9</td>
            <td>SD12350</td>
            <td>thịt rồng</td>
            <td>15000</td>
            <td>31/12/2022 20:35 pm</td>
            <td>Đang vận chuyển</td>
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
            <td>10</td>
            <td>SD12350</td>
            <td>bò xào</td>
            <td>15000</td>
            <td>31/12/2022 20:35 pm</td>
            <td>chờ xác nhận</td>
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
            <td>11</td>
            <td>SD12350</td>
            <td>gà nướng</td>
            <td>15000</td>
            <td>31/12/2022 20:35 pm</td>
            <td>Đã hủy</td>
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
    </div >

  )
}


export default OrderList;
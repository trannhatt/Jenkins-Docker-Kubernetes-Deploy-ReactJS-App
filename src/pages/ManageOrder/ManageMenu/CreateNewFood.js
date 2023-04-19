import React, { Component } from 'react';
import CED from './CED';
import './s.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';
/* -----------------------------------Phần đầu của-Thêm - Xoá - Sửa Món Ăn------------------------------------ */
function CreateNewFood() {
    return (
        <div className="aaa">
            <br></br>
            <br></br>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{
                    backgroundColor: '#d3d3d3',
                }}
            >
                <h1 className=" titleCreate navbar-brand titleMenu ">Thông tin <span style={{color: '#0ddd79'}}>món ăn</span></h1>
            </nav>
            <p class="ddh"><FontAwesomeIcon icon={faClipboardList} /> Quản lý Menu  <FontAwesomeIcon icon={faAngleRight} /> Chỉnh sửa món ăn</p>
            
            <CED />
        </div>
    );
}

export default CreateNewFood;

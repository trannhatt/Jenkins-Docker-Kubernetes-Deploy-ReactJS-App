import React, { Component } from "react";
import styles from './Tittle.module.scss';


function Title() {
  return (
    <nav class={styles.Wrapper}>
      <p class={styles.Tittle}>
        QUẢN LÝ THÔNG TIN VỀ <span>THỰC ĐƠN</span> và <span>ĐƠN HÀNG</span>
      </p>
    </nav>
  );
}

export default Title;

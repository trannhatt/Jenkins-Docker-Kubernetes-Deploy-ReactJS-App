import React, { Component, useState } from "react";
// import isEmpty from "validator/lib/isEmpty";
import "./s.scss"
{
  /* ------------------------------------Thêm - Xoá - Sửa Món Ăn------------------------------------ */
}
function CED() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [title, setTitle] = useState([
    "Mã món ăn",
    "Tên",
    "Giá",
    "Số lượng",
    "Thao tác",
  ]);
  {
    /* ------------------------------------Data mẫu------------------------------------ */
  }
  const [ListFood, setListFood] = useState([
    {
      _id: 102,
      ten: "Cơm tấm",
      gia: 55000,
      soluong: "100",
      donvivanchuyen: "BAEMIN",
      danhmuc: "Thức ăn",
      mota: "Thành phần: Tôm, mực, thịt, chả cua, nghêu, cá viên",
      hinhanh: "",
      mocua: "",
      dongcua: "",
    },
    {
      _id: 101,
      ten: "Cơm gà xối mỡ",
      gia: 65000,
      soluong: "100",
      donvivanchuyen: "BAEMIN",
      danhmuc: "Thức ăn",
      mota: "Thành phần: Đùi gà",
      hinhanh: "",
      mocua: "",
      dongcua: "",
    },
    {
      _id: 105,
      ten: "Nước cam",
      gia: 20000,
      soluong: "100",
      donvivanchuyen: "BAEMIN",
      danhmuc: "Đồ uống ",
      mota: "",
      hinhanh: "",
      mocua: "",
      dongcua: "",
    },
    {
      _id: 103,
      ten: "Bún bò Huế",
      gia: 80000,
      soluong: "100",
      donvivanchuyen: "BAEMIN",
      danhmuc: "Thức ăn",
      mota: "",
      hinhanh: "",
      mocua: "",
      dongcua: "",
    },
    {
      _id: 107,
      ten: "CoCaCoLa",
      gia: 30000,
      soluong: "100",
      donvivanchuyen: "BAEMIN",
      danhmuc: "Đồ uống",
      mota: "",
      hinhanh: "",
      mocua: "",
      dongcua: "",
    },
    {
      _id: 108,
      ten: "Sinh tố xoài",
      gia: 55000,
      soluong: "100",
      donvivanchuyen: "BAEMIN",
      danhmuc: "Đồ uống",
      mota: "",
      hinhanh: "",
      mocua: "",
      dongcua: "",
    },
  ]);
  const [newId, setNewId] = useState("");
  const [newFood, setNewFood] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newShip, setNewShip] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newOpen, setNewOpen] = useState("");
  const [newClose, setNewClose] = useState("");
  const [editingRow, setEditingrow] = useState("");

  const onClickAddFood = () => {
    if (!newId) {
      alert("Mã món ăn không được để trống");
      return;
    }
    if (!newPrice) {
      alert("Giá món ăn không được để trống");
      return;
    }
    if (!newNumber) {
      alert("Số lượng món ăn không được để trống");
      return;
    }
    if (!newFood) {
      alert("Tên món ăn không được để trống");
      return;
    }
    if (!newCategory) {
      alert("Danh mục không được để trống");
      return;
    }
    if (!newShip) {
      alert("Đơn vị vận chuyển không được để trống");
      return;
    }
    // console.log(newFood);
    let foodCopy = [...ListFood];
    foodCopy.push({
      _id: newId,
      ten: newFood,
      gia: newPrice,
      soluong: newNumber,
      donvivanchuyen: newShip,
      danhmuc: newCategory,
      mota: newComment,
      hinhanh: newImage,
      mocua: newOpen,
      dongcua: newClose,
    });
    setListFood(foodCopy);
    setNewId("");
    setNewFood("");
    setNewPrice("");
    setNewNumber("");
    setNewShip("");
    setNewCategory("");
    setNewComment("");
    setNewOpen("");
    setNewClose("");
    setNewImage("");
  };
  const onClickUpdateFood = () => {
    if (!newId) {
      alert("Mã món ăn không được để trống");
      return;
    }
    if (!newPrice) {
      alert("Giá món ăn không được để trống");
      return;
    }
    if (!newNumber) {
      alert("Số lượng món ăn không được để trống");
      return;
    }
    if (!newFood) {
      alert("Tên món ăn không được để trống");
      return;
    }
    if (!newCategory) {
      alert("Danh mục không được để trống");
      return;
    }
    if (!newShip) {
      alert("Đơn vị vận chuyển không được để trống");
      return;
    }
    let index = ListFood.findIndex((s) => s._id === editingRow);
    let foodCopy = [...ListFood];
    foodCopy[index] = {
      _id: newId,
      ten: newFood,
      gia: newPrice,
      soluong: newNumber,
      donvivanchuyen: newShip,
      danhmuc: newCategory,
      mota: newComment,
      hinhanh: newImage,
      mocua: newOpen,
      dongcua: newClose,
    };
    setListFood(foodCopy);
    setNewId("");
    setNewFood("");
    setNewPrice("");
    setNewNumber("");
    setNewShip("");
    setNewCategory("");
    setNewComment("");
    setNewImage("");
    setNewOpen("");
    setNewClose("");
    setEditingrow("");
  };
  const onChangeNewId = (e) => {
    setNewId(e.currentTarget.value);
  };
  const onChangeNewFood = (e) => {
    // console.log(e.currentTarget.value);
    setNewFood(e.currentTarget.value);
  };

  const onChangeNewPrice = (e) => {
    // console.log(e.currentTarget.value);
    setNewPrice(e.currentTarget.value);
  };
  const onChangeNewNumber = (e) => {
    // console.log(e.currentTarget.value);
    setNewNumber(e.currentTarget.value);
  };
  const onChangeNewShip = (e) => {
    // console.log(e.currentTarget.value);
    setNewShip(e.currentTarget.value);
  };
  const onChangeNewCategory = (e) => {
    // console.log(e.currentTarget.value);
    setNewCategory(e.currentTarget.value);
  };
  const onChangeNewComment = (e) => {
    // console.log(e.currentTarget.value);
    setNewComment(e.currentTarget.value);
  };
  const onChangeNewImage = (e) => {
    // console.log(e.currentTarget.value);
    setNewImage(e.currentTarget.value);
  };
  const onChangeNewOpen = (e) => {
    setNewOpen(e.currentTarget.value);
  };
  const onChangeNewClose = (e) => {
    setNewClose(e.currentTarget.value);
  };
  const onPressEditingRow = (ListFood) => {
    setNewId(ListFood._id);
    setNewFood(ListFood.ten);
    setNewPrice(ListFood.gia);
    setNewNumber(ListFood.soluong);
    setNewShip(ListFood.donvivanchuyen);
    setNewCategory(ListFood.danhmuc);
    setNewComment(ListFood.mota);
    setNewImage(ListFood.hinhanh);
    setEditingrow(ListFood._id);
    setNewOpen(ListFood.mocua);
    setNewClose(ListFood.dongcua);
  };

  const onPressDeleteRow = (_id) => {
    let foodCopy = [...ListFood];
    let index = ListFood.findIndex((s) => s._id === _id);
    foodCopy.splice(index, 1);
    setListFood(foodCopy);
  };
  return (
    <div className="aaa">
      <section className="secCreateNeewFood">
        <form className="form3">
          <div className="detail1">
            <h4>Danh mục</h4>
            <div class="contact__form--group">
              <form action="/action_page.php">
                <input
                  list="danhmuc"
                  name="danhmuc"
                  className="selectCreateNewFood"
                  placeholder="Hãy chọn Thức ăn / Đồ uống"
                  value={newCategory}
                  onChange={onChangeNewCategory}
                />
                <datalist id="danhmuc">
                  <option value="Thức ăn"></option>
                  <option value="Đồ uống"></option>
                </datalist>
              </form>
            </div>

            <br></br>
            <h4>Tên món ăn</h4>
            <div class="contact__form--group">
              <input
                name="ten"
                type="text"
                placeholder="Hãy nhập tên món ăn"
                onChange={onChangeNewFood}
                value={newFood}
              />
            </div>
            <br></br>

            <div className="form11">
              <div className="detail11">
                <h4>Thời gian mở cửa</h4>
                <div class="contact__form--group">
                  <input
                    type="time"
                    class="form-control input-md"
                    name="mocua"
                    onChange={onChangeNewOpen}
                    value={newOpen}
                  />
                </div>
              </div>
              <div className="detail12">
                <h4>Thời gian đóng cửa</h4>
                <div class="contact__form--group">
                  <input
                    type="time"
                    class="form-control input-md"
                    name="dongcua"
                    onChange={onChangeNewClose}
                    value={newClose}
                  />
                </div>
              </div>
            </div>
            <br></br>
            <h4>Đơn vị vận chuyển</h4>
            <div class="contact__form--group">
              <form action="/action_page.php">
                <input
                  list="donvivanchuyen"
                  name="donvivanchuyen"
                  className="selectCreateNewFood"
                  placeholder="Hãy chọn đơn vị vận chuyển"
                  value={newShip}
                  onChange={onChangeNewShip}
                />
                <datalist id="donvivanchuyen">
                  <option value="TẤT CẢ ĐƠN VỊ VẬN CHUYỂN"></option>
                  <option value="GRAB FOOD"></option>
                  <option value="BAEMIN"></option>
                  <option value="SHOPPE FOOD"></option>
                  <option value="GO FOOD"></option>
                </datalist>
              </form>
            </div>
            <br></br>
            <h4>Mô tả</h4>
            <div class="contact__form--group w-full">
              <textarea
                value={newComment}
                name="mota"
                onChange={onChangeNewComment}
                placeholder="Hãy ghi chú về món ăn của bạn"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div className="detail2">
            <h4 style={{ textAlign: "left" }}>Hình ảnh món ăn </h4>
            <br></br>
            <input type="file" onChange={handleChange} />
            <br></br>
            <br></br>
            <div className="upImg">
              <img
                src={file}
                style={{ width: "100%" }}
                value={newImage}
                name="hinhanh"
                onChange={onChangeNewImage}
              />
            </div>
          </div>
        </form>
        <br></br>
        <form className="form3">
          <div className="detail3">
            <h4>Mã món ăn</h4>
            <div class="contact__form--group3">
              <input
                disabled={editingRow}
                name="id"
                value={newId}
                type="text"
                placeholder="Hãy nhập mã món ăn"
                onChange={onChangeNewId}
              />
            </div>
          </div>
          <div className="detail31">
            <h4>Giá</h4>
            <div class="contact__form--group">
              <input
                value={newPrice}
                name="gia"
                type="text"
                placeholder="VND"
                onChange={onChangeNewPrice}
              />
            </div>
          </div>
          <div className="detail32">
            <h4>Số lượng</h4>
            <div className="regionNumber">
              <div class="contact__form--group--number">
                <input
                  value={newNumber}
                  name="soluong"
                  type="text"
                  placeholder="1-50"
                  min="1"
                  max="50"
                  onChange={onChangeNewNumber}
                />
              </div>
              <div className="addButton">
                {editingRow ? (
                  <button
                    type="button"
                    class=" btn btn-success"
                    onClick={onClickUpdateFood}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    class=" btn btn-success"
                    onClick={onClickAddFood}
                  >
                    Thêm
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
        <br></br>
        <br></br>
        {/* <div className="aaa"> */}
        <div className="table-div">
          <form className="form3">
            {/* <div className="row"> */}
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2> 
                        DANH SÁCH <b style={{color: 'white'}}>MÓN ĂN</b>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="#deleteEmployeeModal"
                        className="btn btn-danger"
                        data-toggle="modal"
                      >
                        <i className="bi bi-trash"></i> <span>XÓA</span>
                      </a>
                    </div>
                  </div>
                </div>
                <table
                  id="tableMonAn"
                  className="table table-striped table-hover"
                >
                  <thead>
                    {title.map((t) => {
                      return <th key={t}>{t}</th>;
                    })}
                    <tr></tr>
                  </thead>
                  {ListFood.map((s) => {
                    return (
                      <tr key={s._id}>
                        <td key={s._id}>{s._id}</td>
                        <td key={s.ten}>{s.ten}</td>
                        <td key={s.gia}>{s.gia}</td>
                        <td key={s.soluong}>{s.soluong}</td>
                        <td>
                          <a
                            href="#editEmployeeModal"
                            className="edit"
                            data-toggle="modal"
                            onClick={(e) => onPressEditingRow(s)}
                          >
                            <i
                              className="bi bi-pen"
                              data-toggle="tooltip"
                              title="Edit"
                            ></i>
                          </a>

                          <a
                            href="#deleteEmployeeModal"
                            className="bi bi-trash"
                            data-toggle="modal"
                            onClick={(e) => onPressDeleteRow(s._id)}
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            ></i>
                          </a>
                        </td>
                        <td>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox5"
                              name="options[]"
                              defaultValue={1}
                            />
                            <label htmlFor="checkbox5" />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  <tbody></tbody>
                </table>
              </div>
            {/* </div> */}
          </form>
        </div>
        {/* </div> */}
      </section>
     </div>
  );
}

export default CED;

import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ChatAdmin() {
  return (
    <div className="aaa editWidth"> 
    <br></br>
    <br></br>
      {/* ------------------------------------Nội dung------------------------------------- */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{
        backgroundColor: '#d3d3d3',
        
      }}>
        <a className=" titleMenu navbar-brand" href="#" style={{color: '#0ddd79'}}>
          Tin nhắn
        </a>
      </nav>
      <p class="ddh"><FontAwesomeIcon icon={faClipboardList} /> Tin nhắn </p>
    
      {/* ------------------------------------Box chat------------------------------------- */}
      <div id="container23">
        <aside>
          <header>
            <input type="text" placeholder="Tìm kiếm mọi người..." />
          </header>
          <ul>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                alt=""
              />
              <div>
                <h2>Nguyen Anh</h2>
                <h3>
                  <span className="status orange" />
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg"
                alt=""
              />
              <div>
                <h2>Tran Viet</h2>
                <h3>
                  <span className="status green" />
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg"
                alt=""
              />
              <div>
                <h2>Nam Tran</h2>
                <h3>
                  <span className="status orange" />
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg"
                alt=""
              />
              <div>
                <h2>Anh Thu</h2>
                <h3>
                  <span className="status green" />
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg"
                alt=""
              />
              <div>
                <h2>Tuan Anh</h2>
                <h3>
                  <span className="status green" />
                  online
                </h3>
              </div>
            </li>
          </ul>
        </aside>
        <main>
          <header>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt=""
            />
            <div>
              <h2>Trò chuyện với Nguyen Anh</h2>
              <h3>15 đoạn tin nhắn</h3>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
              alt=""
            />
          </header>
          <ul id="chat">
            <li className="you">
              <div className="entete">
                <span className="status green" />
                <h2>Nguyen Anh</h2>
                <h3>10:12AM, Hôm nay</h3>
              </div>
              <div className="triangle" />
              <div className="message">
                Đồ ăn của quán rất ngon!
              </div>
            </li>
            <li className="me">
              <div className="entete">
                <h3>10:12AM, Hôm nay</h3>
                <h2>Tôi</h2>
                <span className="status blue" />
              </div>
              <div className="triangle" />
              <div className="message">
               Cảm ơn bạn.
              </div>
            </li>
            <li className="me">
              <div className="entete">
                <h3>10:12AM, Hôm nay</h3>
                <h2>Tôi</h2>
                <span className="status blue" />
              </div>
              <div className="triangle" />
              <div className="message">OK</div>
            </li>
            <li className="you">
              <div className="entete">
                <span className="status green" />
                <h2>Nguyen Anh</h2>
                <h3>10:30AM, Hôm nay</h3>
              </div>
              <div className="triangle" />
              <div className="message">
                Nhưng Shipper giao lâu quá ạ!
              </div>
            </li>
            <li className="me">
              <div className="entete">
                <h3>10:45AM, Hôm nay</h3>
                <h2>Tôi</h2>
                <span className="status blue" />
              </div>
              <div className="triangle" />
              <div className="message">
                Vậy à
              </div>
            </li>
            <li className="me">
              <div className="entete">
                <h3>10:46AM, Hôm nay</h3>
                <h2>Tôi</h2>
                <span className="status blue" />
              </div>
              <div className="triangle" />
              <div className="message">Bạn thông cảm nha</div>
            </li>
          </ul>
          <footer>
            <textarea
              placeholder="Nhập tin nhắn của bạn tại đây..."
              defaultValue={""}
            />
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
              alt=""
            />
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
              alt=""
            />
            <a href="#">GỬI</a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default ChatAdmin;

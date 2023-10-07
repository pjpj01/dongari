import { Link } from "react-router-dom";
import "./LoginComponent.css";
import axios from "axios";

function RegisterComponent() {
  return (
    <div>
      <div className="container">
        <div className="login-box">
          <p className="login">로그인</p>
          <p className="info">가입하신 아이디와 패스워드를 입력해주세요</p>
          <input
            type="text"
            className="id-input"
            placeholder="아이디를 입력하세요"
          />
          <input
            type="text"
            className="pw-input"
            placeholder="비밀번호를 입력하세요"
          />
          <div className="save-container">
            <input type="checkbox" />
            <span>아이디 저장하기</span>
          </div>
          <button className="login-click">로그인</button>
          <div className="container1">
            <button className="find">아이디/비밀번호 찾기</button>
            <Link to="/signup">
              <button className="signup">회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;

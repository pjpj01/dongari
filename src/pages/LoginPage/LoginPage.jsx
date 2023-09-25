import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div>
      <HeaderComponent headerText="로그인" bannerText="로그인" />
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
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

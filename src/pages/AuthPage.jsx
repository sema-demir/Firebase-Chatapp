import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase/config";

const AuthPage = ({ setIsAuth }) => {
  //Giriş yap butonuna tıklanırsa
  const handleClick = () => {
    //Başarılı giriş yapılırsa çalısır
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user);

      // kullanıcının  yetkisini true ya çek
      setIsAuth(true);

      // kullanıcı bilgisini localstorage de sakla
      localStorage.setItem("token", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam Etmek için Giriş Yapın</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" alt="" />
          <span>Google ile gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;

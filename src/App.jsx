import "./App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase/config";
import { useState, useEffect } from "react";

function App() {
  //kullanıcı bilgilerini state te tuttuk
  const [user, setUser] = useState();

  //buttona tıklanınca calıssın
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>
        {user ? (
          <div>
            <img src={user.photoURL} width={100} />
            <h2>{user.displayName}</h2>
          </div>
        ) : (
          <button onClick={handleLogin}>Google İle Giriş Yap</button>
        )}
      </h2>
    </>
  );
}

export default App;

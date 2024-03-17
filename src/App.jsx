import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullacının seçtiği oda
  const [room, setRoom] = useState(null);
  // kullanıcının yetkisi varsa giriş yap
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // yetkisi yoksa  giriş sayfasına yönlendir
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  //yetkisi varsa oda seçme sayfasına giriş yapar
  return (
    <div className="container">
      {!room ? (
        // oda seçilmediyse > oda seçme sayfası
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        // oda seçildiyse sohbet sayfasına yönlendir
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;

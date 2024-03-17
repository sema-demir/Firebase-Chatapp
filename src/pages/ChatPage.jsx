import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../Firebase/config";
import { useEffect, useState } from "react";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  // mesaj gönderme fonksiyonu
  const sendMessage = async (e) => {
    e.preventDefault();
    // kolleksiyonun referansını alma
    const messagesCol = collection(db, "messages");

    // kolleksiyona yeni döküman ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    // formu sıfırla
    e.target.reset();
  };

  // mevcut odada gönderilen mesajları anlık olarak alır
  useEffect(() => {
    // kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // anlık olarak bir kolleksiyondaki değişimleri izler
    // kolleksiyon her değiştiğinde verdiğimiz fonkisyon ile kolleksiyondaki bütün dökümanlara erişiriz yani yeni mesajlara erişiriz

    onSnapshot(messagesCol, (snapshot) => {
      // verilerin geçici olarak tutulacağı boş dizi oluştur
      const tempMsg = [];

      // dökümanlar dönüp verilerine erişdik
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });
      // mesajları state e aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        <p>mesaj</p>
      </main>
      <form onSubmit={sendMessage}>
        <input type="text" required placeholder="mesajınızı yazınız" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;

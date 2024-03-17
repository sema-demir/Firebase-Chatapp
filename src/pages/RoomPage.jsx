const RoomPage = ({ setRoom, setIsAuth }) => {
  // form gönderilince calışır
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki değeri al
    const room = e.target[0].value;

    // kullancının seçtiği odayı state e aktar
    setRoom(room.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>
      <input type="text" placeholder="Ör: 10. sınıf" required />
      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          //yetki state ini false cekerek oda logine yönlendir
          setIsAuth(false);
          //lokaldeki kullanıcı kaydını kaldır
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Çıkıs Yap
      </button>
    </form>
  );
};

export default RoomPage;

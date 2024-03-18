import { auth } from "../Firebase/config";

const Message = ({ data }) => {
  //oturumu acık olan kullanıcının id si mesajı atan kullanıcının id sine eşitse
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }
  //eşit değilse kullanıcı bilgis ve mesaj içeriğini bas
  return (
    <div className="msg-other">
      <div className="user-info">
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </div>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;

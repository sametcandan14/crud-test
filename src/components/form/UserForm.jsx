import { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">İsim</label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className="form-control my-3"
          />
        </div>
        <div>
          <label htmlFor="mail">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="mail"
            type="email"
            className="form-control my-3"
          />
        </div>
        <button className="btn btn-primary">Kullanıcı Ekle</button>
      </form>
    </div>
  );
};

export default UserForm;

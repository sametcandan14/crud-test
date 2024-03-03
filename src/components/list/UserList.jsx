import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

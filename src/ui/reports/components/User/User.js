import React from "react";

export default ({ user }) => {
  return (
    <div className="user" style={{ display: "flex", justifyContent: "center" }}>
      <p>
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
};

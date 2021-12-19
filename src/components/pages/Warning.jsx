import React from "react";
import "../css/warning.css";

export default function Warning()
{
  return (
    <div className="warning">
      Deleting account cannot be undone <b>John</b>! You should confirm your
      password to delete your account.
    </div>
  );
}

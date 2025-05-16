// import {useState} from "react";

export default function Conditional() {
  // const [unreadMessages, setUnreadMessages] = useState(["a", "b"]);
  const unreadMessages = ["a", "b"];
//   const unreadMessages = [];
  return (
    <div>
      {/* {unreadMessages.length > 0 && <h1> You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <p> No unread messages</p>} */}

      {unreadMessages.length > 0 ? (
        <h1> You have {unreadMessages.length} unread messages!</h1>
      ) : (
        <p> No unread messages</p>
      )}
    </div>
  );
}

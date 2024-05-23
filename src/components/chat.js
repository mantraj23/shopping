import {
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../components_css/chat.css";

const ChatDialog = ({ open, setopen }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div className="chatContainer">
          <div className="chathead">
            <p className="font-bold">ChatBox</p>
            <button className="btn chatbtn" onClick={handleClose}>Close Chat</button>
          </div>
          <div className="messageContainer">
            {messages.map((message, index) => (
              <div key={index} className="messageBubble">
                <Typography variant="body1">{message.text}</Typography>
              </div>
            ))}
          </div>
          <div className="inputContainer">
            <input
              variant="outlined"
              placeholder="Type a message"
              fullWidth
              className="inputField"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
            <button
              className="btn sendbtn"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;

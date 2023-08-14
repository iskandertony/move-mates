import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import { Input, Button } from "antd";
import ArrowBack from "../../components/arrow-back";
import "./style.scss";
const SERVER_URL = "<your-server-url>";

const ChatDetails = () => {
  const [yourID, setYourID] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef();
  const peersRef = useRef([]);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socketRef.current = io.connect(SERVER_URL);

    socketRef.current.on("your id", (id) => {
      setYourID(id);
    });

    socketRef.current.on("user connected", (id) => {
      const peer = createPeer(id, socketRef.current.id);
      peersRef.current.push({
        peerID: id,
        peer,
      });
    });

    socketRef.current.on("signal", (data) => {
      let peer = addPeer(data.signal, data.id);
      peer.signal(data.signal);
    });

    socketRef.current.on("message", (data) => {
      setMessages((oldMsgs) => [...oldMsgs, data]);
    });
  }, []);

  function createPeer(userID, callerID) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("call user", {
        userToCall: userID,
        signalData: signal,
        from: callerID,
      });
    });

    peer.on("data", (data) => {
      setMessages((oldMsgs) => [
        ...oldMsgs,
        { body: data.toString(), id: callerID },
      ]);
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("accept call", { signal, to: callerID });
    });

    peer.on("data", (data) => {
      setMessages((oldMsgs) => [
        ...oldMsgs,
        { body: data.toString(), id: callerID },
      ]);
    });

    peer.signal(incomingSignal);
    return peer;
  }

  function sendMessage(e) {
    e.preventDefault();
    if (message !== "") {
      const messageObject = {
        body: message,
        id: yourID,
      };
      setMessage("");
      setMessages((oldMsgs) => [...oldMsgs, messageObject]);
      peersRef.current.forEach((peerInfo) => {
        peerInfo.peer.send(message);
      });
    }
  }

  return (
    <div className={"chat_details"}>
      <div className={"header_chat"}>
        <ArrowBack />
      </div>
      <div className={"content container_mobile"}>
        {messages.map((message, index) => {
          if (message.id === socketRef.current?.id) {
            return (
              <p
                key={index}
                style={{ textAlign: "right", marginRight: "10px" }}
              >
                {message.body}
              </p>
            );
          }
          return (
            <p key={index} style={{ textAlign: "left", marginLeft: "10px" }}>
              {message.body}
            </p>
          );
        })}
        <div ref={scrollRef}></div>
      </div>
      <form onSubmit={sendMessage} className={"footer_chat"}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default ChatDetails;

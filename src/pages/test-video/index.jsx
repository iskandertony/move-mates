import React, { useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";

const TestVideo = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const pc = useRef(
    new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    })
  );

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: "ws://localhost:8080/ws",
    });

    stompClient.onConnect = () => {
      console.log("STOMP client connected");

      stompClient.subscribe("/user/queue/candidate", (message) => {
        const candidate = JSON.parse(message.body);
        pc.current.addIceCandidate(new RTCIceCandidate(candidate));
      });

      stompClient.subscribe("/user/queue/offer", (message) => {
        const offer = JSON.parse(message.body);
        pc.current.setRemoteDescription(new RTCSessionDescription(offer));
        pc.current
          .createAnswer()
          .then((answer) => pc.current.setLocalDescription(answer))
          .then(() => {
            stompClient.publish({
              destination: "/app/answer",
              body: JSON.stringify(pc.current.localDescription),
            });
          });
      });
    };

    stompClient.activate();

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream
          .getTracks()
          .forEach((track) => pc.current.addTrack(track, stream));
      });

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        stompClient.publish({
          destination: "/app/candidate",
          body: JSON.stringify(event.candidate),
        });
      }
    };

    pc.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    pc.current
      .createOffer()
      .then((offer) => pc.current.setLocalDescription(offer))
      .then(() => {
        stompClient.publish({
          destination: "/app/offer",
          body: JSON.stringify(pc.current.localDescription),
        });
      });

    return () => {
      stompClient.deactivate();
    };
  }, []);

  return (
    <div className={"back_ground container_mobile"}>
      <h1>WebRTC Video Chat with STOMP</h1>
      <video
        ref={localVideoRef}
        autoPlay
        muted
        style={{ width: "50%", border: "2px solid black" }}
      ></video>
      <video
        ref={remoteVideoRef}
        autoPlay
        style={{ width: "50%", border: "2px solid red" }}
      ></video>
    </div>
  );
};

export default TestVideo;

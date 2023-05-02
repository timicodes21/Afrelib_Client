import { Box } from "@mui/material";

import styles from "./styles.module.css";
import ChatInput from "../chat-input/ChatInput";

import { messageType } from "../../../../types/messages";

import EachChatBoardMessage from "./EachMessage";

const ChatMessagesBoard = () => {
  const messages = [
    {
      name: "John Doe",
      avatar:
        "https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000",
      message:
        "Lorem ipsum dolor sit amet. Aut dolorem ipsa qui dolorem corporis est corrupti dolor et consequatur voluptatem aut obcaecati dolorem. At obcaecati sapiente aut ducimus ducimus eos quia animi qui aspernatur cumque et soluta nemo ex rerum repudiandae sit quidem optio.",
      time: "",
      isSent: false,
    },
    {
      name: "David Mark",
      avatar:
        "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg?w=2000",
      message:
        "Est pariatur illo et aliquam natus ex asperiores ducimus. Qui expedita voluptatem et delectus molestias eum harum debitis qui obcaecati quidem ea adipisci omnis.",
      time: "",
      isSent: false,
    },
    {
      name: "Katniss Everdeen",
      avatar:
        "https://cdn4.vectorstock.com/i/1000x1000/78/48/female-avatar-icon-young-attractive-woman-vector-14807848.jpg",
      message:
        "delectus molestias eum harum debitis qui obcaecati quidem ea adipisci omnis.",
      time: "",
      isSent: false,
    },
    {
      name: "John Wick",
      avatar:
        "https://pbs.twimg.com/media/EXyU-RAWAAMUDse?format=jpg&name=4096x4096",
      message:
        "Et pariatur sequi cum consequuntur dolor non dignissimos laborum! Qui expedita rerum nam placeat alias ad facilis ipsam et similique cupiditate. Non nobis blanditiis ab amet animi est maxime minima ab tempora beatae id error explicabo?",
      time: "",
      isSent: false,
    },
    {
      name: "Thomas Shelby",
      avatar:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/961f37143423043.627a6eabd75df.jpg",
      message:
        "Qui expedita rerum nam placeat alias ad facilis ipsam et similique cupiditate.",
      time: "",
      isSent: false,
    },
    {
      name: "John Doe",
      avatar:
        "https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000",
      message:
        "Est pariatur illo et aliquam natus ex asperiores ducimus. Qui expedita voluptatem et delectus molestias eum harum debitis qui obcaecati quidem ea adipisci omnis.",
      time: "",
      isSent: false,
    },
    {
      name: "Jeremy Angel",
      avatar: "",
      message:
        "Ceci est un message dans une bulle de chat envoyé par un autre utilisateur qui écrit vraiment beaucoup beaucoup beaucoup.",
      time: "",
      isSent: true,
    },
    {
      name: "Jeremy Angel",
      avatar: "",
      message:
        "Ceci est un message dans une bulle de chat envoyé par l’utilisateur",
      time: "",
      isSent: true,
    },
    {
      name: "Michael Scofield",
      avatar:
        "https://mir-s3-cdn-cf.behance.net/projects/404/04805998425217.Y3JvcCwyNTMzLDE5ODEsMCwxOA.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      time: "",
      isSent: false,
    },
    {
      name: "John Wick",
      avatar:
        "https://pbs.twimg.com/media/EXyU-RAWAAMUDse?format=jpg&name=4096x4096",
      message:
        "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      time: "",
      isSent: false,
    },
    {
      name: "John Doe",
      avatar:
        "https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000",
      message:
        "dolor non dignissimos laborum! Qui expedita rerum nam placeat alias ad facilis ipsam et similique cupiditate. Non nobis blanditiis ab amet animi est maxime minima ab",
      time: "",
      isSent: false,
    },
  ];
  return (
    <Box className={styles.chatBoardContainer}>
      <Box className={styles.chatBoardMessagesContainer}>
        {messages.map((msg: messageType) => {
          return (
            <>
              <EachChatBoardMessage message={msg} />
            </>
          );
        })}
      </Box>
      <Box>
        <ChatInput />
      </Box>
    </Box>
  );
};

export default ChatMessagesBoard;

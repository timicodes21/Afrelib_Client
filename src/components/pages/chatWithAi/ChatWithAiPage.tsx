import { chatAiApi } from "@/api/chatWithAi";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import PageHeader from "@/components/molecules/headers/PageHeader";
import ChatMessageWrapper from "@/components/molecules/wrappers/ChatMessageWrapper";
import Wrapper from "@/components/templates/Wrapper";
import { queryClient, queryKeys } from "@/data/constants";
import { useGetChatHistory } from "@/hooks/chatWithAi/useChatWithAi";
import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatWithAiPage = () => {
  const { data: history, isFetching } = useGetChatHistory();
  const [message, setMessage] = useState("");
  const [tempUserMessage, setTempUserMessage] = useState("");
  const [tempChatResponse, setTempChatResponse] = useState("");

  const chatHistory = useMemo(() => {
    return typeof history === "object" && Array.isArray(history?.data)
      ? history?.data
      : [];
  }, [history]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (text: string) => {
    console.log("hello here");
    setTempChatResponse("");

    if (text.trim().length === 0) return;
    setTempUserMessage(message);
    if (scrollRef.current) {
      const scroll =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;

      scrollRef.current.scrollTo({
        top: scroll,
        behavior: "smooth",
      });
    }

    setMessage("");
    const response = await chatAiApi({ prompt: text });
    if (typeof response === "object" && response?.gpt_response) {
      setTempUserMessage("");
      queryClient.invalidateQueries([queryKeys.getChatHistory]);
      return;
    }
    if (typeof response === "string") {
      setTempChatResponse(response);
      return;
    }
    setTempChatResponse("An error occured, Please try again later");
  };

  useEffect(() => {
    if (scrollRef.current) {
      const scroll =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;

      scrollRef.current.scrollTo({
        top: scroll,
        behavior: "smooth",
      });
    }

    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        handleSendMessage(message);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollRef, history, handleSendMessage]);

  console.log("chat history", chatHistory.reverse());

  return (
    <Wrapper relative>
      <PageHeader headerText="Chat With Ai" />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 3,
        }}
      >
        <Box sx={{ width: { xs: "95%", md: "75%", lg: "70%" } }}>
          <AuthInput
            icon={
              <FiSend
                className="pointer font-24"
                style={{ color: "#5F738C" }}
                onClick={() => handleSendMessage(message)}
              />
            }
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          overflowY: "scroll",
          paddingRight: "5px",
        }}
        className="chat_scroll_container"
        ref={scrollRef}
      >
        <Box sx={{ mt: 2 }}>
          {isFetching && <LinearProgress sx={{ color: "#213F7D" }} />}

          {!isFetching && chatHistory.length === 0 && (
            <Typography
              className="text-center font-20 font-600 text-center"
              sx={{ color: "secondary.main" }}
            >
              You have no chat history
            </Typography>
          )}

          {chatHistory.length > 0 &&
            [...chatHistory].reverse().map((item, index) => (
              <React.Fragment key={index}>
                <ChatMessageWrapper
                  userResponse
                  time={item?.created_at}
                  message={item?.search}
                />
                <ChatMessageWrapper
                  time={item?.created_at}
                  message={item?.gpt_response}
                />
              </React.Fragment>
            ))}

          {tempUserMessage.trim().length > 0 && (
            <ChatMessageWrapper
              userResponse
              time={""}
              message={tempUserMessage}
              now
            />
          )}
          {tempChatResponse.trim().length > 0 && (
            <ChatMessageWrapper time={""} now message={tempChatResponse} />
          )}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default ChatWithAiPage;

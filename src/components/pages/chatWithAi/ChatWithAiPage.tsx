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
  const [isLoading, setIsLoading] = useState(false);

  const chatHistory = useMemo(() => {
    return typeof history === "object" && Array.isArray(history?.data)
      ? history?.data
      : [];
  }, [history]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (text: string) => {
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
    setIsLoading(true);
    const response = await chatAiApi({ prompt: text });
    if (typeof response === "object" && response?.gpt_response) {
      setTempUserMessage("");
      queryClient.invalidateQueries([queryKeys.getChatHistory]);
      setIsLoading(false);
      return;
    }
    if (typeof response === "string") {
      setTempChatResponse(response);
      setIsLoading(false);
      return;
    }
    setTempChatResponse("An error occured, Please try again later");
    setIsLoading(false);
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
            placeholder={isLoading ? "Sending Message..." : ""}
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            disabled={isLoading}
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
                  message={
                    JSON.parse(item?.gpt_response)?.content
                      ? JSON.parse(item?.gpt_response)?.content
                      : ""
                  }
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
          {isLoading && (
            <ChatMessageWrapper time={""} now message={"Wait..."} />
          )}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default ChatWithAiPage;

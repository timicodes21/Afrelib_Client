export type messageType = {
  [key: string]: any;
  messageId: string | number;
  chatId: string | number;
  content: string;
  mediaType: "text" | "image" | "audio" | "video" | "document";
  mediaUrl: string;
  senderId: string;
  senderName: string;
  timestamp: string;
  status: any;
};

export type chatType = {
  [key: string]: any;
  chatId: number | string;
  chatName: string;
  chatType: string;
  firstName: string;
  userId: string | number;
};

export type mediaType = "audio" | "video" | "image" | "document";

export type messagesContextType = {
  chat: chatType | null;
  selectChat: (chat: chatType) => void;
  unselectChat: () => void;
  chatModal: "create-group" | "show-members" | "add-members" | null;
  openChatModal: (
    open: "create-group" | "show-members" | "add-members",
  ) => void;
  closeChatModal: () => void;
  sendMedia: null | mediaType;
  setSendMedia: React.Dispatch<React.SetStateAction<mediaType | null>>;
};

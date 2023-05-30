export type messageType = {
  [key: string]: any;
  messageId: string | number;
  chatId: string | number;
  content: string;
  mediaType: mediaType;
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
  chatDescription: string;
  lastMessage: {
    mediaType: mediaType;
    content: string;
    senderName: string;
    timestamp: string;
  };
};

export type mediaType = "text" | "audio" | "video" | "image" | "document";

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
  chatMembers: chatMemberType[] | null;
  selectChatMembers: (members: chatMemberType[] | null) => void;
};

export type chatMemberType = {
  id: string | number;
  chatId: string | number;
  chatName: string;
  chatDescription: string;
  userId: string | number;
  chatType: string;
  firstName: string;
  lastName: string;
  email: string;
  created_at: string;
  updated_at: string;
  avatar: string;
};

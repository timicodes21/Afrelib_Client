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
  // message: string;
  // avatar: string;
  // name: string;
  // time: string;
  // isSent: boolean;
};

export type chatType = {
  [key: string]: any;
  chatId: number | string;
  chatName: string;
  chatType: string;
  firstName: string;
  userId: string | number;
};

export type messagesContextType = {
  chat: chatType | null;
  selectChat: (chat: chatType) => void;
  unselectChat: () => void;

  chatModal: "create-group" | "show-members" | "add-members" | null;
  openChatModal: (
    open: "create-group" | "show-members" | "add-members",
  ) => void;
  closeChatModal: () => void;
};

// "messageId": "87557334",
// "chatId": "8755",
// "content": "Hello, this is a message",
// "mediaType": "text",
// "mediaUrl": "https://example.com/image.jpg",
// "senderId": "1234",
// "senderName": "John Doe",
// "timestamp": "2023-04-01T12:00:00Z",
// "status": "UnRead"

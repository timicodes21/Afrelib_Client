export type messageType = {
  message: string;
  avatar: string;
  name: string;
  time: string;
  isSent: boolean;
};

export type chatType = {
  [key: string]: any;
};

export type messagesContextType = {
  chat: chatType | null;
  selectChat: (artist: chatType) => void;
  unselectChat: () => void;
};

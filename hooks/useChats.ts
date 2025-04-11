import { useChatsDb, Chat, Message } from './db/useChatsDb';

export { Chat, Message };

export function useChats(currentUserId: string | null) {
  const { 
    chats, 
    createChat, 
    sendMessage,
    updateMessage,
    deleteMessage,
    loadChats,
    loading 
  } = useChatsDb(currentUserId);

  return {
    chats,
    createChat,
    sendMessage,
    updateMessage,
    deleteMessage,
    loadChats,
    loading,
  };
} 
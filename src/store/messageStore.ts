import { initialUserMessages } from '@/utils/constants';
import { MessageType } from '@/utils/types';
import { create } from 'zustand';

type MessageStore = {
  messages: MessageType[];
  appendMessage: (message: MessageType) => void;
};

export const messageStore = create<MessageStore>((set) => ({
  messages: initialUserMessages,
  appendMessage: (message: MessageType) =>
    set((state) => ({
      messages: [message, ...state.messages],
    })),
}));

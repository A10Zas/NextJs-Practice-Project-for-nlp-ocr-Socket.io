// chatStore.js
import {create} from 'zustand';

const useChatStore = create((set) => ({
    receivedMessages: [],
    addMessage: (message) =>
        set((state) => ({ receivedMessages: [...state.receivedMessages, message] })),
}));

export default useChatStore;

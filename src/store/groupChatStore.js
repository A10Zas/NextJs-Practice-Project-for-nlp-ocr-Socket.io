import {create} from "zustand"

const useGroupChatStore = create((set) => ({
    messages: [],
    language: 'en', // Default language
    setLanguage: (lang) => set({ language: lang }),
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));

export default useGroupChatStore
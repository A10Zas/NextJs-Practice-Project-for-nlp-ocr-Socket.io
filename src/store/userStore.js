import { create } from 'zustand'


const userStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
}));

export default userStore;
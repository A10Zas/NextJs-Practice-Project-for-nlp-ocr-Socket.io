import { io } from 'socket.io-client';

const socket = io('https://nlpappserver.onrender.com/groupChat'); // Replace with your Socket.IO server URL

export default socket;

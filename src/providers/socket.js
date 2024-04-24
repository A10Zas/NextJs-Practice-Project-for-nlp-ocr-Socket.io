import { io } from 'socket.io-client';

const socket = io('http://localhost:6969/groupChat'); // Replace with your Socket.IO server URL

export default socket;

import { getChats } from 'apis/chat.api';
import React, { useEffect, useState } from 'react';

const ChatSideBar = () => {

    const [chats, setChats] = useState([]);

useEffect(() => {
    const getChatAll = async () => {
        const res = await getChats();
        setChats(res?.data);
    }
    getChatAll();
}, []);

console.log(chats);

    return (
        <div>
            
        </div>
    );
};

export default ChatSideBar;
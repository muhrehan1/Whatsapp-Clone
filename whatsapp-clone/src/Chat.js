import React ,  { useState ,useEffect }  from 'react';
import { Avatar } from "@material-ui/core";
import "./Chat.css"

function Chat() {

   const [seed, setSeed] = useState("");
    useEffect(() => {
       
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            
            <div className="chat__header">
                        <Avatar src="https://avatars.dicebear.com/api/human/${seed}.svg" />
                        <div className="chat__headerInfo">
                            <h3>Room Name</h3>
                            <p>Last name</p>
                        
                        </div>
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">


            </div>

        </div>
    )
}

export default Chat

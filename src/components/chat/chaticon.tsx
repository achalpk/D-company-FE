import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import './chaticon.css'
function ChatIcon(){
    const [isChat, setIsChat] = useState(false);
    return(
        <div>
            {isChat?
            <ChatBox setIsChat={setIsChat} />
            :<button onClick={()=>setIsChat(true)} className='chatIcon'><b>Chat</b></button>}
        </div>
    )
}
export default ChatIcon

export function ChatBox(props:{setIsChat:(value : boolean)=>void}) {
    const [msg,setMsg] = useState({'message':''});
    const [fetchMsgs,setFetchMsgs] = useState<{'ask':string,'reply':string|React.ReactNode}[]>([]);
    const [count,setCount] = useState(1);
    const Username = sessionStorage.getItem('username')?.toUpperCase()

    const message=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setMsg({'message':e.target.value.trimStart()});
    }

    const saveMessage=()=>{
        let reply  = '';
        if(msg.message !== null && msg.message.match(/^ *$/) === null){
            switch(count){
                case 1:
                    reply ='What Kind Of Information Do You Need?';
                    break;
            }
            setFetchMsgs([...fetchMsgs,{'ask':msg.message,'reply':reply}])
            setCount(count+1);
            setMsg({'message':''})
        }
    }

    const more=()=>{
        setCount(count+1);
        const reply=<p>For More Information, <br/>Please Contact Our HR.<br/>Phone No. - 0123456789 <br/>Email - d.company@mail.com</p>
        setFetchMsgs([...fetchMsgs,{'ask':'More Information','reply':reply}])
    }

    return (
        <div className='chatBox'>  
            <nav className='chatBoxHead'>
                <b>Quick Chat</b>
                <button style={{width:20}} onClick={()=>props.setIsChat(false)}>
                    <b>__</b>
                </button>
            </nav>
            <div className='chatMsgs'>
                <div className='replyDiv'>
                    <p className='reply'>Hi, {Username}</p>
                    <p className='reply'>Welcome To D-company!<br/><br/>Please Provide Your Email Address.</p>
                </div>
                {fetchMsgs.map((fetchmsg:{'ask':string,'reply':string|React.ReactNode},index:number)=>
                                    <div key={index}>
                                        <p className='message'>{fetchmsg.ask}</p>
                                        <div className='replyDiv'>
                                            <p className='reply'>{fetchmsg.reply}</p>
                                        </div>
                                    </div>
                )}
                {count===2?
                <>
                    <Link to='/home/Service'><button className='replybtn' onClick={()=>props.setIsChat(false)}>Our services</button></Link>
                    <Link to='/home/About us'><button className='replybtn' onClick={()=>props.setIsChat(false)}>About us</button></Link>
                    <Link to='/employees'><button className='replybtn' onClick={()=>props.setIsChat(false)}>Our teams</button></Link><br/>
                    <Link to='/home/Contact us'><button className='replybtn' onClick={()=>props.setIsChat(false)}>Contact us</button></Link>
                    <Link to='/feedback'><button className='replybtn' onClick={()=>props.setIsChat(false)}>Send feedback</button></Link>
                    <button className='replybtn' onClick={more}>More Information</button>
                </>
                :null}
            </div>
            {count<2?
                <div>
                    <input id='chatTextBox' type="text" value={msg.message} onChange={(e)=>message(e)} placeholder='Type your email address...'/>
                    <button id='sendButton' onClick={saveMessage}><b>Send</b></button>
                </div>
            :null}
        </div>
    )
}
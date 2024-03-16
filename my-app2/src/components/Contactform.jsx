import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import './Contactform.css';
const Contantform = () => {
    const send = (event) => {
        console.log(event);

    }
    const oncall = () => {
        console.log('call');
    }
    const onmsg = () => {
        console.log('msg');
    }

    return (
        <div className="contact">
        <div  className="contactinside">
        <div className="msg-call">
            <button onClick={onmsg} className ="button"><MdMessage />  message</button>
            <button onClick={oncall}
             className="button"><IoMdCall />   call</button>
        </div>
        <div className="form">
            <form send={send}>
                <input type="text" placeholder="Name" />    
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" />
                <button>Send</button>
            </form>
        </div>
        </div>
        <div className="contactpic"><img src="contact1.png"/></div>
        </div>
       
    )   
}
export default Contantform; 
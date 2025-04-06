import user from "../images/user.jpg";

const ContactCard = (props) => {
    // const name = "Mohit";
    // const email = "reachmohit@gmail.com";

    console.log(props, 'PROPS_CARD');
    
    return (
        <div>
            <img className="ui avatar image" src={user} alt="user" />

            <div className="content">
                <div className="header">{props.contact.name}</div>
                <div className="header">{props.contact.email}</div>
            </div>
        </div>
    );
}

export default ContactCard;

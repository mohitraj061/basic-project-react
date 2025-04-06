import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const renderList = props.contactsToDisplay.map((contact) => {
        return <ContactCard key={contact.email} contact={contact} />
    });

    return <div className="ui celled list">{renderList}</div>
}

export default ContactList;

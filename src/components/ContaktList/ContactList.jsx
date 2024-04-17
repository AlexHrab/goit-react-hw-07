
import {selectFilteredContactsMemo} from "../../redux/contactsSlice"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { useSelector } from "react-redux"

function ContactList(){

    const filteredContacts = useSelector(selectFilteredContactsMemo)

    return (
        <ul className={css.list}>
            {filteredContacts.map(el => <Contact key={el.id} {...el}/>)}
        </ul>
    )
}

export default ContactList
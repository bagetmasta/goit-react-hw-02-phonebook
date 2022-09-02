import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Container/Container';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const oneContact = {
      id: nanoid(),
      name,
      number,
    };

    this.checkForTheSameName(oneContact);
  };

  checkForTheSameName = oneContact => {
    const { contacts } = this.state;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === oneContact.name.toLowerCase()) {
        alert(`${oneContact.name} is already in contacts`);

        return;
      }
    }

    this.setState(({ contacts }) => ({
      contacts: [oneContact, ...contacts],
    }));
  };

  filterChange = value => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.filterChange} />
        <ContactsList contacts={visibleContacts} />
      </Container>
    );
  }
}

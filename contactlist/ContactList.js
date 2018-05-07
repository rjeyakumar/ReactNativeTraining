import React from "react";
import ContactListItem from "./ContactListItem";
import { View, ScrollView } from "react-native";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data.results });
      });
  }

  renderItems() {
    return this.state.contacts.map((c, index) => {
      const { name, picture } = c;
      const { title, first, last } = name;
      const { thumbnail } = picture;
      const isEven = (index % 2 === 0);
      const displayedName = `${title} ${first} ${last}`;
      return (<ContactListItem
        name={displayedName}
        profileImage={thumbnail}
        isEven={isEven}
      />);
    });
  }

  render() {
    return <ScrollView>{this.renderItems()}</ScrollView>;
  }
}

export default ContactList;



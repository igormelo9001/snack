import React, { useState, useEffect } from "react"
import {Box, FlatList} from 'native-base'
import axios from "axios"
import { ListItem, Avatar } from 'react-native-elements';

const YOUR_ACCESS_TOKEN = "1c33ae0c2498354a2ea6b6d1b9449cb4"

const API_ACCESS = f2d112bb7cc3ee2e3453ad01955b207e

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${YOUR_ACCESS_TOKEN}`
      );
      setUsers(response.data.data);
    };

    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.media_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.caption}</ListItem.Title>
        <ListItem.Subtitle>{item.permalink}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default UserList;
import React, { useState, useEffect } from "react"
import {Box, FlatList} from 'native-base'
import axios from "axios"

const YOUR_ACCESS_TOKEN = "134963599425482"


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
    
}

const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.media_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.caption}</ListItem.Title>
        <ListItem.Subtitle>{item.permalink}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

const Facebook = () => {
        return(
            <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column" paddingX={4}>
                 <FlatList 
                  data={UserList}
                  renderItem={renderItem}
                  showsHorizontalScrollIndicator={false}
                  />
            </Box>
        )
}

export default Facebook
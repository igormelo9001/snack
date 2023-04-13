import React from "react";
import { Box, HStack, Pressable, Icon, Avatar, FlatList } from "native-base";
import Storys from "../components/Storys";
import Feed from "../components/Feed"

import { Feather } from "@expo/vector-icons"


const data = [
    {
        id:"1",
        fullname: "chi",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/avatars-000232587407-s1d5yt-t500x500.jpg" 
    },
    {
        id:"2",
        fullname: "suckorgoze",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/avatars-000614546898-u61ojf-t500x500.jpg" 
    },
    {
        id:"3",
        fullname: "hman",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/avatars-lSsz70A6TfnzMMUo-6vX0Bw-t500x500.jpg"
    },
    {
        id:"4",
        fullname: "lagartixas picantes",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/avatars-000316276529-6fjwff-t500x500.jpg" 
    },
    {
        id:"5",
        fullname: "fuzi",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/avatars-000245858616-qrwrwz-t500x500.jpg" 
    },
    {
        id:"6",
        fullname: "hemanz",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/avatars-xcOL8nJ9VvTlWNVS-r4tLyQ-t500x500.jpg"
    },
    {
        id:"7",
        fullname: "nice shoegaze",
        timeStamp: "12:47 PM",
        recentText: "Good Day",
        avatarUrl:"https://i1.sndcdn.com/artworks-000172119238-9bggam-t500x500.jpg"
    },


]

const Home = () => {
    return(
        <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column">

            <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea>
                <Box>
                    <Pressable>
                        <Icon
                          as={Feather}
                          name="menu"
                          size={7}
                          color="#000"
                        />
                    </Pressable>
                </Box>
                <Box rounded="md" flexDir="row" alignItems="center">
                    <Pressable>
                        <Icon
                            as={Feather}
                            name="bell"
                            size={7}
                            color="#000"
                            marginRight={4}
                        />
                    </Pressable>
                    <Pressable>
                        <Avatar
                            source={{ uri: "https://i1.sndcdn.com/avatars-xcOL8nJ9VvTlWNVS-r4tLyQ-t500x500.jpg"}}
                            height={12}
                            width={12}
                        />
                    </Pressable>
                </Box>
            </HStack>

            <Box paddingX={4}>
               <FlatList 
                horizontal={true}
                data={data}
                renderItem={({item}) => <Storys data={item} /> }
                showsHorizontalScrollIndicator={false}
               />
            </Box>

            <Box paddingX={4}>
               <FlatList 
                data={data}
                renderItem={({item}) => <Feed data={item} /> }
                showsHorizontalScrollIndicator={false}
               />
            </Box>
            
        </Box>
    );
}


export default Home 
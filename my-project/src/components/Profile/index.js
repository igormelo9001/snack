import React from "react"
import {Box, HStack, Pressable, Icon, Avatar, FlatList} from 'native-base'
import { Feather } from "@expo/vector-icons"
import Facebook from "../Facebook"

const Profile = () => {
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
                                        <Avatar
                                            source={{ uri: "https://i1.sndcdn.com/avatars-xcOL8nJ9VvTlWNVS-r4tLyQ-t500x500.jpg"}}
                                            height={12}
                                            width={12}
                                        />
                                    </Pressable>
                                </Box>
                            </HStack>

                            <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column" paddingX={4}>
                                <Facebook />
                            </Box>
                            
        </Box>
    )
}


export default Profile
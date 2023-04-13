import React from "react";
import { Box, Image, Heading, Text, Icon } from "native-base"

import { Feather } from "@expo/vector-icons"

export default function feed({ data }){
    return(
        <Box 
            flex={1} 
            flexDirection="column" 
            marginBottom={4} 
            backgroundColor="#FFF"  
            padding={2}
            borderRadius={4}
        >
            <Box>
               <Image
                source={{ uri: data.avatarUrl }}
                alt="Post feed"
                w="100%"
                h={120}
               /> 
            </Box> 

            <Box marginY={3}>
                <Heading>{data.timeStamp}</Heading>
                <Text numberOfLines={2}>{data.recentText}</Text>
            </Box>   
            <Box 
            marginY={1}
            flexDir="row"
            backgroundColor="rgba(226, 232, 240, 0.4)"
            alignSelf="flex-start"
            borderRadius="6"
            paddingX={3}
            paddomgY={1}
            >
                <Icon
                    as={Feather}
                    name="user"
                    size={5}
                    color="#000"
                    marginRight={2}
                />
                <Text numberOfLines={1}>
                    {data.fullname}
                </Text>
            </Box>   

        </Box>
    )
}
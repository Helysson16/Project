import React, {useState} from "react";
import {Button, Text, View} from 'react-native'

const cliques = () => {
    const [cliques, setCliques] = useState(0)

    return(
        <View style={{flex: 1, justifyContent:'center'}}>
            <Button title='OK' onPress={() => {
                setCliques(cliques + 1);
            
            }} />
            <Text>Quantidade de cliques: {cliques}</Text>
        </View>
    )
}

export default cliques;
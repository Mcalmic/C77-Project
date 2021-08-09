import React, {Component} from 'react';
import { render } from 'react-dom';
import { Text, View } from 'react-native';

export default class SpaceCraftsScreen extends Component {
    render(){
        return(
            <View> style = {styles.text}
                <Text>
                    Space Crafts Screen
                </Text>
            </View>
        )
    }
}

const styles = {
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
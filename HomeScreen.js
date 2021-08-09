import React, {Component} from 'react';
import { render } from 'react-dom';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, Image, ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {styles.text}>
            <ImageBackground source={require('./assets/space.gif')} style={styles.backgroundImage}>
                <Text style={styles.titleText}>
                    Home Screen
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
                    <Text style={styles.buttonText}>
                        Space Crafts
                    </Text>        
                    <Image style={styles.iconImage} source = {require('./assets/space_crafts.png')}/>                                                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DailyPic')}>
                    <Text style={styles.buttonText}>
                        Daily Picture
                    </Text>        
                    <Image style={styles.iconImage} source = {require('./assets/daily_pictures.png')}/>                                                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('StarMap')}>
                    <Text style={styles.buttonText}>
                        Star Map
                    </Text>        
                    <Image style={styles.iconImage} source = {require('./assets/star_map.png')}/>                                                  
                </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}

const styles = {
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: 1000,
        resizeMode: 'contain'
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center"
    },
    button: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center"
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
}
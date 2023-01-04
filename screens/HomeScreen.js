import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../.expo/components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode:"contain",
                    }}
                    source={{
                        uri: "https://thumbs.dreamstime.com/b/uber-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210443791.jpg"
                    }}
                />
                
            </Text>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';

class Loading extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <CircularProgress color ="primary" />
                <Text style={styles.text}>Getting whether now...</Text>
            </View>
        ) 

    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:30,
        paddingBottom: 100,
        backgroundColor: '#00de7a',
        alignItems:"center"
    },
    text:{
        fontSize:25
    }
})

export default Loading;
import React from 'react';
import {GenericItem} from './GenericItem'
import './MyProduct.css'
import constants from '../constants';
import { View,Text } from 'react-native';
import {StockScreen} from '../containers/StockScreen';
import { StyleSheet} from 'react-native';
import MyButton from './UI/MyButton';
import { COLORS } from "../constants";
import { Constants } from 'expo-constants';

export default function MyProduct(props) {
    console.log(props)
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
                <View>
                    <Text style={{ ...styles.text, color: COLORS.black }}>{props.name} para</Text>
                    <Text style={{ ...styles.text, color: COLORS.black }}>{props.customer}</Text>
                </View>
                {props.buttonText.map(element => (
                    <MyButton
                    width="20%"
                    
                    title={element}
                    onPress={() => {
                    console.log("button");
                    }}
                    />
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 8,
      backgroundColor: '#ecf0f1',
      padding: 8,
      position: 'relative',
    },
    rectangle: {
      height: "50%",
      flex: 1,
      width: "100%",
      flexDirection: 'row',
      backgroundColor: 'salmon',
      marginTop: "0%",
      position: 'absolute',       
      justifyContent: "space-between",
      alignContent: "center",
    },
    button: {
        width: "20%"
    }
  
  });



  
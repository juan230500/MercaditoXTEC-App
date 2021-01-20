import React, {useState} from 'react';

import { ScrollView, Text, View } from "react-native";
import { COLORS } from "../constants";
//import products from '../products';
import { StyleSheet} from 'react-native';
import MyProduct from '../components/MyProduct';
import MyLayout from '../components/MyLayout';
import MyButton from '../components/UI/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff"
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: "20px"
  }
});


const products = [
  {
    name: 'Practica F2',
    customer: 'Josue',
    button: ['Detalles'],
    type: 'Completado'
  },
  {
    name: 'Rollos canela',
    customer: 'Mariana',
    button: ['Detalles']
  },
  {
    name: 'Bolis',
    customer: 'Sahid',
    button: ['Detalles'],
    type: 'Pendiente'
  },
  {
    name: 'Apretados',
    customer: 'Pedrito',
    button: ['Detalles']
  },
  {
      name: 'Coco rayado',
      customer: 'Joel',
      button: ['Gestionar', 'Chat']
  }
]; 

function showButtons(text) {
  const alertInformation = Object.entries(text.join(', '))
    .map(information => `${information[0]}: ${information[1]}`)
  alert(alertInformation)
};


const filterText = ['Completados','Pendientes', 'Publicaciones'];

function StockScreen() {
  
  const [filteredProducts, setData] = useState([]);

  const onPress= (props) => {
    const filteredProducts = products.filter((item)=>{
      return item == props;
  })
  setData(filteredProducts);
  }

  return (
    <MyLayout title="STOCKSCREEN" drawer>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View flexDirection="row">
          {filterText.map(option => (
            <MyButton
            width="20%" 
            flexDirection= 'row'
            justifyContent= 'space-between'
            title={option}
            onPress={() => onPress(option.text)}/>
          )
          )}
        </View>
      {products.map(product => (
        <MyProduct
          key={product.name} 
          name={product.name}
          customer={product.customer}
          buttonText={product.button}
          showButtons={showButtons}
        />
        ))}
      </ScrollView>
    </MyLayout>
  );
}



export default StockScreen;
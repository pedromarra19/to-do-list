/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Text,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {useList, Item, List} from '../states/List';


export const App = () => {
  const [inputText, setInputText] = useState('');
  const [idCount, setIdCount] = useState(1);
  const checkedCheckBox = false;
  
  const [items, removeFromList, addToList, isChecked] = useList((state) => [
    state.list,
    state.removeFromList,
    state.addToList,
    state.isChecked,
  ])

  
  const handleAdd = () => {
    const item: Item = {id: idCount, text: inputText, checkbox: checkedCheckBox}
    addToList(item)
    setIdCount(idCount + 1);
    setInputText('');
  };

  
  const renderItem = ({ item }) => (
    <View style={styles.renderItem}>
    
      <TouchableOpacity
        testID="checkbox"
        onPress={() => isChecked(item.id)}  
        style={item.checkbox === false ? styles.disabledCheckBox : styles.abledCheckBox}
      >
      <Text style={styles.checkIcon}>✔</Text>
      </TouchableOpacity>
      <Text style={styles.item}>{item.text}</Text>
      <TouchableOpacity 
        testID="remove-button" 
        style={styles.removeButton} 
        onPress={() =>  removeFromList(item.id)}
      >
        <Text style={{fontSize: 20, color: 'red'}}>x</Text>
      </TouchableOpacity>
    </View>
  );
  
  return (
      <View style={styles.container}>
        <Text style={styles.title}>To do list</Text>
        <TextInput 
            style={styles.input}
            placeholder="insert task"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity 
            onPress={() => handleAdd()}  
            disabled={inputText.trim() === ''}
            style={inputText.trim() === '' ? styles.disabledButton : styles.addButton}
          >
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>

          <FlatList
              style={styles.list}
              data={items}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
          />
      </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      marginTop: 24,
      color: '#000',
    },
    input: {
      height: 50,
      width: 280,
      backgroundColor: '#fff',
      borderRadius: 24,
      marginTop: 32,
      fontSize: 16,
      paddingHorizontal: 30,
      borderColor: '#000',
      borderWidth: 1
    },
    addButton: {
      padding: 10,
      paddingHorizontal: 40,
      backgroundColor: '#000',
      marginTop: 12,
      borderRadius: 24
    },
    disabledButton: {
      padding: 10,
      paddingHorizontal: 40,
      backgroundColor: '#999999',
      marginTop: 12,
      borderRadius: 24
    },
    textButton: {
      color: '#fff',
      fontSize: 20,
    },
    list: {
      marginTop: 20,
    },
    item: {
      marginTop: 10,
      fontSize: 26,
      color: '#000'
    },
    disabledCheckBox:{
      marginRight: 8,
      marginTop: 12,
      height: 25,
      width: 25,
      borderColor: "#000",
      borderWidth: 2,
      borderRadius: 6,
      backgroundColor: '#fff',
    },
    abledCheckBox:{
      marginRight: 8,
      marginTop: 12,
      height: 25,
      width: 25,
      borderColor: "#000",
      borderWidth: 2,
      borderRadius: 6,
      backgroundColor: '#000',
      alignItems: 'center'
    },
    checkIcon: {
      color: '#fff', 
      fontSize: 14, 
    },
    removeButton: {
      marginTop: 12, 
      marginLeft: 16
    },
    renderItem: {
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignItems: 'center'
    }
});

export default App;

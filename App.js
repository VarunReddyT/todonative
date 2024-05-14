import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const buttonHandle = () => { 
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    });
    setText('');
  }

  const handleText = (val) => {
    setText(val);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <Text style={{fontSize: 24,backgroundColor:'coral',padding:15, fontWeight: 'bold', textAlign: 'center'}}>My Todos</Text>
        <View style={styles.list}>
          <View>
            <TextInput 
              style={{padding: 15, backgroundColor: 'yellow', margin: 10, borderRadius: 10, fontSize: 20, fontWeight: 'bold'}} 
              placeholder='Add a todo' 
              onChangeText={handleText} 
              value={text}
            />
            <View style={styles.buttonContainer}>
              <Button title='Add Todo' color='coral' onPress={buttonHandle} />
            </View>
          </View>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                <Text style={styles.txt} key={item.key}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  list: {
    marginTop: 20,
    padding: 20,
  },
  txt:{
    padding: 15,
    backgroundColor: 'coral',
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 10,
  }
});

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

const App = (props: Props) => {
  const [data, setData] = React.useState<string | null | void>('');

  const saveData = async (value: string) => {
    try {
      await AsyncStorage.setItem('InputData', value);
      console.log('saved');
      setData('');
    } catch (e) {
      console.log('Error while save data');
    }
  };
  const getData = async () => {
    try {
      const inputData = await AsyncStorage.getItem('InputData');
      console.log('InputData', inputData);
      setData(inputData);
    } catch (e) {
      console.log('Error while getting data');
    }
  };
  const deleteData = async () => {
    try {
      const item = await AsyncStorage.removeItem('InputData');
      setData(item);
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        value={data as string}
        onChange={e => setData(e.nativeEvent.text)}
        placeholder="Enter Data"
        style={{borderWidth: 1, width: '80%', height: 50}}
      />
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => saveData(data as string)}>
        <Text style={{color: 'white'}}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => getData()}>
        <Text style={{color: 'white'}}>Get Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => deleteData()}>
        <Text style={{color: 'white'}}>Delete Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

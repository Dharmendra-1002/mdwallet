
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Picker } from '@react-native-picker/picker';
import MarketingHead from './ManagerLogin/MarketingHead';
import MarketingExLogin from './ManagerLogin/MarketingExLogin';
const Marketing_Executive_Expense = () => {
  const navigation = useNavigation();
  const numRows = 9;
  const numCols = 6;

  // Define the options for the status dropdown
  const statusOptions = [
    { label: 'Received by CTPL', value: 'received' },
    { label: 'In Process', value: 'inProcess' },
    { label: 'Completed', value: 'completed' }
  ];

  // State to hold the selected status
  const [status, setStatus] = useState('');

  return (
    <SafeAreaView className="bg-violet-950 flex-1">
 <View className="bg-white rounded-lg mt-12">
 <View className="flex flex-row justify-between items-center">
  <View className="flex flex-col">
    <Text className="text-black underline text-lg font-bold ml-7 mt-7">MARKETING EXPENSES - LIST</Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate('Expense_From')}>
    <View className="flex flex-col justify-center items-center">
      <Text className="bg-lime-600 text-white font-bold py-2 px-3 mt-7 rounded-lg mr-3">ADD Expense</Text>
    </View>
  </TouchableOpacity>
</View>

      

      <View style={styles.container}>
        <ScrollView horizontal>
          <DataTable style={styles.container}>
            <DataTable.Header className="bg-violet-950 rounded-lg">
              <DataTable.Title><Text className="text-white text-lg">S.No</Text></DataTable.Title>
              <View style={styles.rowLine}></View>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg ">Date of Expense</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Expense Head</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Narration</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Amount(RS)</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Approved by</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Verified by</Text></DataTable.Title>
            </DataTable.Header>
            <View style={{height:10}}/>
            {/* Replace these rows with your actual data */}
            <DataTable.Row className="bg-violet-200 rounded-lg">

              <DataTable.Cell>01</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>5/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>


            </DataTable.Row>

            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>02</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>6/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className=" rounded-lg bg-violet-200">

              <DataTable.Cell>03</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>7/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>04</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>8/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-violet-200 rounded-lg">

              <DataTable.Cell>05</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>9/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>

            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>06</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>10/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-violet-200 rounded-lg">

              <DataTable.Cell>07</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>11/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
     
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>08</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>13/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-violet-200 rounded-lg">

              <DataTable.Cell>09</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>14/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>10</DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 20 }}>15/3/2024</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginLeft: 55 }}>TRAVELLING  {'\n'}EXPENSE</Text></DataTable.Cell>
              <DataTable.Cell ><Text style={{ marginLeft: -5 }}> FOR Travelling {'\n'} from A to B </Text></DataTable.Cell>
              <DataTable.Cell><Text className="mr-10">300</Text></DataTable.Cell>
              <DataTable.Cell><Text style={{ marginRight: 50 }}>Mr.X</Text></DataTable.Cell>
              <DataTable.Cell>Aswin</DataTable.Cell>

            </DataTable.Row>


          </DataTable>
        </ScrollView>
      </View>
 </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Marketing_Executive_Expense;



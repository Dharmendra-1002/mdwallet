import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Picker } from '@react-native-picker/picker';
import MarketingHead from './ManagerLogin/MarketingHead';
import MarketingExLogin from './ManagerLogin/MarketingExLogin';
const SalesOrder = () => {
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
    <SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
<View className="bg-white w-[90%] h-[95%] rounded-md">
 <View className="flex flex-row justify-between items-center">
  <View className="flex flex-col">
    <Text className="text-black underline text-lg font-bold ml-7 mt-7">Order From</Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate('Expense_From')}>
    <View className="flex flex-col justify-center items-center">
      <Text className="bg-lime-600 text-white font-bold py-2 px-3 mt-7 rounded-lg mr-3">ADD NEW</Text>
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
              <DataTable.Title><Text className="text-white text-lg ">Order Date</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg ">Executive Name</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">For State</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Distributor/Delaer</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Business Name</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Contact Person Name</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Designation</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Contact No</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Email-id</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Order for device type</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Rate</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Total Value</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Extra Panic Buttons</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Value of Painc Buttons</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Grand Total Vlaue(Rs)</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Payment Terms</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">Mode of transport</Text></DataTable.Title>
           


            </DataTable.Header>
            <View style={{height:10}}/>
            {/* Replace these rows with your actual data */}
            <DataTable.Row className="bg-violet-200 rounded-lg ">

              <DataTable.Cell>01</DataTable.Cell>
            


            </DataTable.Row>

            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>02</DataTable.Cell>
            

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className=" rounded-lg bg-violet-200">

              <DataTable.Cell>03</DataTable.Cell>
              

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>04</DataTable.Cell>
             

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-violet-200 rounded-lg">

              <DataTable.Cell>05</DataTable.Cell>
       
            </DataTable.Row>

            <View style={{height:10}}/>
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>06</DataTable.Cell>
           

            </DataTable.Row>
            <View style={{height:10}}/>
            <DataTable.Row className="bg-violet-200 rounded-lg">

              <DataTable.Cell>07</DataTable.Cell>
          

            </DataTable.Row>
            <View style={{height:10}}/>
     
            <DataTable.Row className="bg-slate-200 rounded-lg">

              <DataTable.Cell>08</DataTable.Cell>
           
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

export default SalesOrder;



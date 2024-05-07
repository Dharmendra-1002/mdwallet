import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

const MarketingHeadExpense = () => {
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
            <Text className="text-black underline text-lg font-bold ml-7 mt-7">
              <View className="justify-center, items-center">
                <Text className="text-black underline text-sm font-bold ">MARKETING EXECUTIVES</Text></View></Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Expense_From')}>
            <View>
              <Text className="bg-lime-500 text-white p-2 mr-6 rounded-md">
                ADD NEW
              </Text>
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
                <DataTable.Title><Text className="text-white text-lg ">Marketing Executive Name</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">State</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Date of Expense</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Expense Head</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Narration</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Amount(Rs.)</Text></DataTable.Title>
              </DataTable.Header>
              <View style={{ height: 10 }} />
              {/* Replace these rows with your actual data */}
              <DataTable.Row className="bg-violet-200 rounded-lg">

                <DataTable.Cell>01</DataTable.Cell>
                <DataTable.Cell><Text style={{ marginLeft: 20 }}>Tripti Kumari</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{ marginLeft: 55 }}>Jharkhand</Text></DataTable.Cell>
                <DataTable.Cell ><Text style={{ marginLeft: -5 }} className="mr-5"> 5/03/2024 </Text></DataTable.Cell>
                <DataTable.Cell><Text className="mr-10"></Text></DataTable.Cell>
             
               
                <DataTable.Cell><Text style={{ marginRight: 50 }}></Text></DataTable.Cell>
                <DataTable.Cell>Rs500</DataTable.Cell>


              </DataTable.Row>

              <View style={{ height: 10 }} />
              <DataTable.Row className="bg-slate-200 rounded-lg">

                

              </DataTable.Row>
              <View style={{ height: 10 }} />
              <DataTable.Row className=" rounded-lg bg-violet-200">

           

              </DataTable.Row>
              <View style={{ height: 10 }} />
              <DataTable.Row className="bg-slate-200 rounded-lg">

               

              </DataTable.Row>
              <View style={{ height: 10 }} />
              <DataTable.Row className="bg-violet-200 rounded-lg">

               
              </DataTable.Row>

              <View style={{ height: 10 }} />
              <DataTable.Row className="bg-slate-200 rounded-lg">

                

              </DataTable.Row>
              <View style={{ height: 10 }} />
              <DataTable.Row className="bg-violet-200 rounded-lg">

                

              </DataTable.Row>
              <View style={{ height: 10 }} />

              <DataTable.Row className="bg-slate-200 rounded-lg">

             

         

                

             

                

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

export default MarketingHeadExpense;



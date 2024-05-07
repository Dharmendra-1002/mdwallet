import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

const ViewCertificate = () => {
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
    <SafeAreaView className="bg-violet-950 flex-1 items-center">
      <View className="bg-white rounded-lg mt-12 w-11/12 ">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-col">
            <Text className="text-black underline text-lg font-bold ml-7 mt-7">
              <View className="justify-center, items-center">
                <Text className="text-black underline text-lg font-bold ml-5"> View Certificate</Text></View></Text>
          </View>
         
        </View>



        <View style={styles.container}>
          <ScrollView horizontal>
            <DataTable style={styles.container}>
              <DataTable.Header className="bg-violet-950 rounded-lg">
                <DataTable.Title><Text className="text-white text-lg">S.No</Text></DataTable.Title>
                <View style={styles.rowLine}></View>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg ">Date of Installation</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Vehicle Number</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Vehicle Make Model</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Device IMEI</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Customer Name</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Dealer Name</Text></DataTable.Title>

                

                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Fitment Certificate No.</Text></DataTable.Title>
                <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                <DataTable.Title><Text className="text-white text-lg">Download Certificate</Text></DataTable.Title>





              </DataTable.Header>
              <View style={{ height: 10 }} />
              {/* Replace these rows with your actual data */}
              <DataTable.Row className="bg-violet-200 rounded-lg">

                <DataTable.Cell>01</DataTable.Cell>
                <DataTable.Cell><Text></Text></DataTable.Cell>
                <DataTable.Cell><Text></Text></DataTable.Cell>
                <DataTable.Cell ><Text></Text></DataTable.Cell>
                <DataTable.Cell><Text> </Text></DataTable.Cell>
             
               
                <DataTable.Cell><Text></Text></DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>


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

export default ViewCertificate;



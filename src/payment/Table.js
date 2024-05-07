
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Picker } from '@react-native-picker/picker';

const HorizontalTable = () => {
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
    <SafeAreaView className="bg-white flex-1">
      <View className="justify-center, items-center"><Text className="text-black underline text-sm font-bold">REQUESTS LIST- ACTIVATION & WHITELISTING</Text></View>
      <TouchableOpacity onPress={() => navigation.navigate('Activation')}>
        <View className="justify-end, items-end"><Text className="bg-lime-600 text-white font-bold py-2 m-5 p-3">NEW REQUEST</Text></View>
      </TouchableOpacity>

      <View style={styles.container}>
        <ScrollView horizontal>
          <DataTable style={styles.container}>
            <DataTable.Header className="bg-violet-950 ">
              <DataTable.Title><Text className="text-white text-lg">S.No</Text></DataTable.Title>
              <View style={styles.rowLine}></View>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">REQUEST TYPE</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">DATE OF REQUEST</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">NO. OF REQUEST</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">DOWANLOAD SHEET</Text></DataTable.Title>
              <DataTable.Title style={{ width: 20 }}></DataTable.Title>
              <DataTable.Title><Text className="text-white text-lg">STATUS</Text></DataTable.Title>
            </DataTable.Header>

            {/* Replace these rows with your actual data */}
            <DataTable.Row>

              <DataTable.Cell>Radhika</DataTable.Cell>
              <DataTable.Cell>Dosa</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
              <DataTable.Cell>
                {/* Status dropdown */}
                <Picker
                  selectedValue={status}
                  onValueChange={setStatus}
                  style={{ width: 150 }}
                >
                  {statusOptions.map(option => (
                    <Picker.Item key={option.value} label={option.label} value={option.value} />
                  ))}
                </Picker>
              </DataTable.Cell>

            </DataTable.Row>

            <DataTable.Row>

              <DataTable.Cell>Radhika</DataTable.Cell>
              <DataTable.Cell>Dosa</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
              <DataTable.Cell>
                {/* Status dropdown */}
                <Picker
                  selectedValue={status}
                  onValueChange={setStatus}
                  style={{ width: 150 }}
                >
                  {statusOptions.map(option => (
                    <Picker.Item key={option.value} label={option.label} value={option.value} />
                  ))}
                </Picker>
              </DataTable.Cell>

            </DataTable.Row>


          </DataTable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default HorizontalTable;



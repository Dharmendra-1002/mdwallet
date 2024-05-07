import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

import { Picker } from '@react-native-picker/picker';






const SpendsList = () => {

    const [searchQuery, setSearchQuery] = React.useState('');


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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '95%', height: '90%', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3, elevation: 5, padding: 20 }}>

                    <View className="justify-start, items-start ml-7 mt-7"><Text className="text-violet-950 , font-bold ">Spends List</Text></View>



                    <View style={styles.container}>
                        <ScrollView horizontal>
                            <DataTable style={styles.container}>
                                <DataTable.Header className="bg-violet-950 ">
                                    <DataTable.Title><Text className="text-white text-lg">S.No</Text></DataTable.Title>
                                    <View style={styles.rowLine}></View>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">Date of Spend</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">Amount(Rs.)</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">Transation ID</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">View Transaction Sheet </Text></DataTable.Title>

                                </DataTable.Header>

                                {/* Replace these rows with your actual data */}
                                <DataTable.Row>

                                    <DataTable.Cell>1.</DataTable.Cell>
                                    <DataTable.Cell>28-01-24</DataTable.Cell>
                                    <DataTable.Cell>20,000</DataTable.Cell>
                                    <DataTable.Cell>827138723</DataTable.Cell>

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

                                    <DataTable.Cell>2.</DataTable.Cell>
                                    <DataTable.Cell>28-01-24</DataTable.Cell>
                                    <DataTable.Cell>20,000</DataTable.Cell>
                                    <DataTable.Cell>827138723</DataTable.Cell>


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

export default SpendsList;



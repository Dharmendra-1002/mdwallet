import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Picker } from '@react-native-picker/picker';

const Marketing_Executives = () => {
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
                    <View className="justify-center, items-center"><Text className="text-black underline text-sm font-bold">EXPENSES OF MARKETING EXECUTIVES - LIST (MD SIR LOGIN, STATE HEAD LOGIN)</Text></View>



                    <View style={styles.container}>
                        <ScrollView horizontal>
                            <DataTable style={styles.container}>
                                <DataTable.Header className="bg-violet-950 ">
                                    <DataTable.Title><Text className="text-white text-lg">S.No</Text></DataTable.Title>
                                    <View style={styles.rowLine}></View>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">MARKETING EXECUTIVE NAME</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg"> STATE</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">Date of Expense</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">Expense Head </Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg">Narration</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg"> Amount(Rs)</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg"> Approved by</Text></DataTable.Title>
                                    <DataTable.Title style={{ width: 20 }}></DataTable.Title>
                                    <DataTable.Title><Text className="text-white text-lg"> Verified by </Text></DataTable.Title>
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

export default Marketing_Executives;



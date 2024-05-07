import { View, Text, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const MyTextInput = ({ label }) => {
    const [text, setText] = useState('');

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>{label}</Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: 'white',

                }}
                onChangeText={setText}
                value={text}
                placeholder={`Enter ${label.toLowerCase()}...`}
            />
        </View>
    );
};
const OrderForm = () => {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '95%', height: '90%', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3, elevation: 5, padding: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ fontSize: 20, color: '#4e2d87', marginBottom: 10 }}>Order from </Text>

                        <View className="flex-1 justify-center items-center">
                            <Text className="text-lg text-black">Marketing Executive Name</Text>
                        </View>
                        <View className="flex-1 justify-center items-center">
                            <TouchableOpacity>
                                <Text className="text-lg text-white bg-gray-500">
                                    Autopopulate from Login
                                </Text>

                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 2 }}>
                            <MyTextInput label="Date of order" />
                            <MyTextInput label="For State" />
                            <MyTextInput label="Select Distributor or Dealer" />
                            <MyTextInput label="Business Name" />
                            <MyTextInput label="Contact Person Name" />
                            <MyTextInput label="Designation" />
                            <MyTextInput label="Contact Number" />
                            <MyTextInput label="E-mail ID" />
                            <MyTextInput label="Billing Address" />
                            <MyTextInput label="Shipping Address" />
                            <MyTextInput label="PAN NUMBER" />
                            <MyTextInput label="GST NUMBER" />
                            <MyTextInput label="Order From Device Type" />
                            <MyTextInput label="Rate" />
                            <MyTextInput label="Total Value" />
                            <MyTextInput label="Extra no of Panic Buttons" />
                            <MyTextInput label="Rate of Panic Buttons" />
                            <MyTextInput label="Value of Extra Panic button" />
                            <MyTextInput label="Grand total Value" />

                            <Text style={{ fontSize: 20, color: '#4e2d87' }}>Payment term</Text>

                            <MyTextInput label="Mode of Payment" />

                            <MyTextInput label="Mode of Tranport from Dispatch" />
                            <View className={`flex items-center justify-center`}>
                                <TouchableOpacity
                                    className={'bg-blue-500 py-2 px-4 rounded-md'}
                                >
                                    <Text className={`text-white text-lg font-semibold`}>Submit</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View>

                        </View>

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OrderForm;









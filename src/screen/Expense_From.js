import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler';

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


const Activation = () => {
    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView>
                <View className="justify-center items-center">
                    <View className="justify-center items-center  ">
                        <Text className="text-black font-bold border-black rounded-md p-4 m-4 text-lg text-center">MARKETING EXECUTIVE - EXEPENSES FROM</Text>
                    </View>



                </View>
                <View style={{ padding: 20 }}>
                    <MyTextInput label="Marketing Executive Name"  />

                    
                    <MyTextInput label="State" />
                    <MyTextInput label="Date of expense" />
                    <MyTextInput label="Expense head" />
                    <MyTextInput label="Amount (Rs)" />
                </View>

                <View>
                    <TouchableOpacity>
                        <View><Text className="bg-[#432d87] text-xl text-white p-3 m-4  text-center font-bold ">Submit</Text></View>
                    </TouchableOpacity>
                </View>

            </ScrollView>



        </SafeAreaView>

    )
}

export default Activation



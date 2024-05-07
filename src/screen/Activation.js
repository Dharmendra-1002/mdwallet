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
                        <Text className="text-black font-bold border-black rounded-md p-4 m-4 text-lg">ACTIVATION/ WHITELISTING - REQUEST</Text>
                    </View>
                   


                </View>
                <View style={{ padding: 20 }}>
                    <MyTextInput label="Select Request Type"  />
                    <MyTextInput label="Date of Request" />
                    <MyTextInput label="No of Sims" />
                    <MyTextInput label="Upload Sheet" />
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



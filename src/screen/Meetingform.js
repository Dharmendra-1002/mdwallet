import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

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






const Meetingform = () => {
    return (

        <SafeAreaView className=" flex-1" style={{backgroundColor: '#4e2d87'}}>

            <View className="flex-1 justify-center items-center ">
                <View className="bg-white w-[90%] h-[95%] rounded-md">
                    <ScrollView>
                        <View className="flex-row justify-between py-2">
                            <Text className="ml-2">Marketing Person Name</Text>
                            <Text className="bg-gray-400 h-6 ml-[6%] mr-2 text-black">
                                Autopopulate From login
                            </Text>
                        </View>
                        <View>
                            <Text className="text-lg text-black font-bold ml-3">MEETING DETAILS</Text>
                        </View>

                        <View style={{ padding: 20 }}>
                            <MyTextInput label="FOR PRODUCT" />
                            <MyTextInput label="MEETING WHOM" />
                            <MyTextInput label="BUSINESS NAME" />
                            <MyTextInput label="CLIENT NAME" />
                            <MyTextInput label="DESIGNATION" />
                            <MyTextInput label="PHONE NUMBER" />
                            <MyTextInput label="WHATSAPP NUMBER" />
                            <MyTextInput label="E-MAIL ID" />
                            <View>
                                <Text className="text-lg text-black font-bold ml-0">ADDRESS DETAILS</Text>
                            </View>
                            <MyTextInput label="STATE" />
                            <MyTextInput label="CITY" />
                            <MyTextInput label="LOCALITY" />
                            <MyTextInput label="PINCODE" />

                            <View>
                                <Text className="text-lg text-black font-bold ml-0">CAPTURE FROM DATE</Text>
                            </View>
                            <MyTextInput label="CAPTURE FROM DATE" />

                            <View>
                                <Text className="text-lg text-black font-bold ml-0">CAPTURE FROM LOCAL</Text>
                            </View>
                            <MyTextInput label="FROM LATITUDE" />
                            <MyTextInput label="FROM LONGITUDE" />
                            <MyTextInput label="FROM GPS LOCATION" />

                            <View>
                                <Text className="text-lg text-black font-bold ml-0">MODE OF TRAVEL</Text>
                            </View>
                            <MyTextInput label="MODE OF TRAVEL" />
                            <MyTextInput label="ENTER VEHICLE NUMBER" />
                            <MyTextInput label="FROM KMS" />
                            <MyTextInput label="TO KM" />
                            <MyTextInput label="FARE" />

                            <View>
                                <Text className="text-lg text-black font-bold ml-0">CAPTURE TO DATE & TIME</Text>
                            </View>
                            <MyTextInput label=" CAPTURE FROM DATE" />
                            <View>
                                <Text className="text-lg text-black font-bold ml-0">CAPTURE FROM LOCATION</Text>
                            </View>
                            <MyTextInput label=" TO LATITUDE" />
                            <MyTextInput label=" TO LONGITUDE" />
                            <MyTextInput label=" TO GPS LOCATION" />
                            <View>
                                <Text className="text-lg text-black font-bold ml-0">CAPTURE FROM PHOTO</Text>
                            </View>
                            <MyTextInput label=" CHOOSE IMAGE" />
                            <MyTextInput label=" RATING" />
                            <MyTextInput label=" VISIT TYPE" />
                            <MyTextInput label=" NOTES" />
                            <TouchableOpacity>
                            <View className="flex justify-center items-center">
                                <Text className="bg-lime-500 text-white p-3 text-lg rounded-lg py-2">submit</Text>
                            </View>
                            </TouchableOpacity>
                           





                        </View>
                    </ScrollView>


                </View>
            </View>

        </SafeAreaView>
    )
}

export default Meetingform





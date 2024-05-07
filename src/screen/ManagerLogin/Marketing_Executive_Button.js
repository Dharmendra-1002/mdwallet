import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


const Marketing_Executive_Button = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className=" flex-1">
            <View className={`flex-1 justify-start items-center  `}>
                <View className={`w-full h-full bg-white  rounded-lg shadow-lg p-4`}>
                    <View className={`flex justify-center items-center `}>
                        <View className={` w-11/12 h-70 bg-purple-200 m-10 rounded-lg shadow-lg p-4`}>
                          
                          
                            
                            <TouchableOpacity onPress={() => navigation.navigate('MarketingHeadExpense')}>
                                <View>
                                    <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Marketing Expense</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Meetingform')}>
                                <View>
                                    <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Meeting Form </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderFormmain')}>
                                <View>
                                    <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Order Form </Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default Marketing_Executive_Button













































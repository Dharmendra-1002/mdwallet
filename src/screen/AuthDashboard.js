import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthDashboard = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className={`flex-1 m-6 items-center `}>
        <View className={`w-11/12 h-28 bg-gray-300 rounded-lg shadow-lg `}>
          <View className={`flex justify-center items-center `}>
            <View className={`w-11/12 h-16 bg-violet-950 m-7 rounded-lg shadow-lg p-4`}>
              <TouchableOpacity>
              <View className={`flex justify-center items-center `}>
                <Text className="text-white text-lg font-medium">Add Amount</Text>
              </View>
              </TouchableOpacity>
              
            </View>
           
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AuthDashboard
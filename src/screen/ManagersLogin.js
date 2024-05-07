import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import MarketingExLogin from '../screen/ManagerLogin/MarketingExLogin';

const ManagersLogin = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" flex-1">
    <View className={`flex-1 justify-start items-center  `}>
      <View className={`w-full h-full bg-white  rounded-lg shadow-lg p-4`}>
        <View className={`flex justify-center items-center `}>
          <View className={` w-11/12 h-70 bg-purple-200 m-10 rounded-lg shadow-lg p-4`}>
            <TouchableOpacity onPress={() => navigation.navigate('Manging_Director')}>
            <View>
        <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Managing Director </Text>
      </View>
            </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Authentication_Manger')}>
    <View>
        <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Authentication Manager </Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FinanceManagerLogin')}>
      <View>
        <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Finance Manager </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MarketingExLogin')}>
      <View>
      <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Marketing Head</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Marketing_Executive_Button')}>
      <View>
        <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Marketing Executive </Text>
      </View>
      </TouchableOpacity>
   
    
</View>
</View>
</View>
</View>

    </SafeAreaView>

  )
}

export default ManagersLogin

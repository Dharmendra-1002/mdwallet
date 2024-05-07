import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DropdownMenu from './DropdownMenu';
import Button from './Button';







const Pay = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [value, onChangeText] = useState('');

  const handlePress = () => {
    console.log('Button pressed!');
    // Do something when the button is pressed
  };







  return (


    <SafeAreaView className="bg-violet-950 flex-1">
      <View className={`flex-1 justify-center items-center `}>
        <View className={`w-96 h-[90%] bg-gray-100 rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-between items-start `}>
            <ScrollView>
              <View className="flex-1 justify-center items-start">

                <View className="flex-row py-2">
                  <Text className="ml-5 text-black font-bold underline">Meeting DETAILS</Text>
                  <View>

                  </View>


                </View>
              </View>



              <View className="flex-row ">
                <View className="bg-white w-[100%] h-[100 %] ">
                  <Text className="text-black ml-3 mt-5"> For Product  </Text>
                  <Picker className="flex-row"
                    selectedValue={selectedValue}
                    style={{ marginTop: -37, height: 50, width: 250, alignSelf: 'flex-end' }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Product 1" value="product1" />
                    <Picker.Item label="Product 2" value="product2" />
                    <Picker.Item label="Product 3" value="product3" />
                  </Picker>
                </View>
              </View>


              <View className="flex-1 justify-center items-start">

                <View className="flex-row py-2">
                  <Text className="ml-5 text-black font-bold underline">Meeting Whom :</Text>
                  <View>

                  </View>


                </View>
              </View>




              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Business Name</Text>

                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>


                </View>
              </View>



              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Client Name :</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Degination :</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Phone Number:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>


              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">WhatsApp Number:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Email ID:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>


              <View className="flex-1 justify-center items-start">

                <View className="flex-row py-2">
                  <Text className="ml-5 text-black font-bold underline">Adress Details :</Text>
                  <View>

                  </View>


                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">State:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">District:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">City:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Locality:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-row">
                <View className="bg-white flex-row items-center">
                  <Text className="text-black ml-3 ">Pincode:</Text>
                  <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginLeft: 40 }}
                  />
                </View>
                <View className="bg-white" style={{ width: 100, height: 80 }}>

                </View>
              </View>

              <View className="flex-1 justify-center items-start">

                <View className="flex-row py-2">
                  <Text className="ml-5 text-black font-bold underline">Capture from Date & Time :</Text>
                  <View style={`flex-1 justify-center items-center`}>
                    <Button title="Press me" onPress={handlePress} />
                  </View>

                  <View>

                  </View>


                </View>
              </View>


            </ScrollView>
          </View>
        </View>
      </View>

    </SafeAreaView>

  )
}

export default Pay

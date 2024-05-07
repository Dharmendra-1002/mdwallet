// import { View, Text } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
// import { TouchableOpacity } from 'react-native-gesture-handler'


// const MyWallet = () => {
//   return (

//     <SafeAreaView className="bg-violet-950 flex-1">
//       <View className={`flex-1 justify-center items-center `}>
//         <View className={`w-11/12 h-5/6 bg-white rounded-lg shadow-lg p-4`}>
//           <View className={`flex justify-center items-center `}>
//             <View className={`w-11/12 h-56 bg-violet-950 m-10 rounded-lg shadow-lg p-4`}>

//               <View>
//                 <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>My Wallet</Text>
//                 <Text style={{ fontSize: 15, color: '#fff', marginTop: "6%", marginLeft: "20%" }}>Credit limit                 Rs. 1,00,000</Text>
//                 <Text style={{ fontSize: 15, color: '#fff', marginLeft: "20%" }}>Balance Wallet          Rs. 80,000</Text>
//                 <View >

//                   <Text style={{ fontSize: 20, color: '#fff', marginLeft: "50%", marginTop: "20%", backgroundColor: '#008000', borderRadius: 80, }}>Recharge Wallet</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//           <View className='flex-row justify-evenly'>
//             <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
//               <View className='w-[160] py-5 bg-violet-950 items-end rounded-lg'>
//                 <Text className='text-white text-lg m-1 '>STATEMENT</Text>
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
//               <View className='w-[160] py-5 bg-violet-950 items-end rounded-lg '>
//                 <Text className='text-white text-lg m-1'>RECHARGES</Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View className='flex-row justify-evenly mt-4'>
//             <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
//               <View className='w-[160] py-5 bg-violet-950 items-end rounded-lg'>
//                 <Text className='text-white text-lg m-1'>SPENDS</Text>
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
//               <View className='w-[160] py-5 bg-violet-950 items-end rounded-lg'>
//                 <Text className='text-white text-lg  m-1'>HISTORY</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>

//   )
// }

// export default MyWallet

import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'


const MyWallet = () => {
  return (

    <SafeAreaView className="bg-violet-950 flex-1">
      <View className={`flex-1 justify-center items-center `}>
        <View className={`w-11/12 h-5/6 bg-white rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-center items-center `}>
            <View className={`w-11/12 h-56 bg-violet-950 m-10 rounded-lg shadow-lg p-4`}>

              <View>
                <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>My Wallet</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginTop: "6%", marginLeft: "20%" }}>Credit limit                 Rs. 1,00,000</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: "20%" }}>Balance Wallet          Rs. 80,000</Text>
                <TouchableOpacity>
                  <View className="justify-end items-end">
                   <Text className="bg-lime-600 text-white p-2 mt-9 rounded-md font-normal">Recharge Wallet</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <View className='flex-row justify-evenly'>
            <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
              <View className='w-[140] py-5 bg-violet-950 items-center rounded-lg'>
                <Text className='text-white text-lg m-1 text-center'>STATEMENT</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
              <View className='w-[140] py-5 bg-violet-950 items-center rounded-lg '>
                <Text className='text-white text-lg m-1'>RECHARGES</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className='flex-row justify-evenly mt-4'>
            <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
              <View className='w-[140] py-5 bg-violet-950 items-center rounded-lg'>
                <Text className='text-white text-lg m-1'>SPENDS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {/* Your onPress logic */ }}>
              <View className='w-[140] py-5 bg-violet-950 items-center rounded-lg'>
                <Text className='text-white text-lg  m-1'>HISTORY</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default MyWallet
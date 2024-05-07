import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
      <View className='flex-row justify-between py-9'>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EsimReport')}>
          <Text className='text-white font-medium text-lg py-1'>e-Sims</Text>
          <View style={styles.rect2}>
            <Text className='text-white font-medium text-lg justify-center'>57,476</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text className='text-white font-medium text-lg py-1'>Devices</Text>
          <View style={styles.rect2}>
            <Text className='text-white font-medium text-lg justify-center'>57,476</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className='bg-[#432d87] py-2 rounded-full items-center' onPress={() => navigation.navigate('Wallet')}>
        <Text className='text-white font-normal text-lg'>Wallet</Text>
      </TouchableOpacity>
      {/* </View> */}

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    marginTop: -25,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  rect: {
    width: 395,
    height: 30,
    backgroundColor: 'rgba(78,45,135,1)',
    // marginTop: 20,
    paddingLeft: 0,
  },
  image: {
    width: 31,
    height: 46,
    marginTop: 5,
    marginRight: 5,
  },
  anandKumarSeethalaColumn: {
    //width: 172,
    marginLeft: 28,
  },
  image2: {
    width: 33,
    height: 34,
    marginLeft: 56,
    marginTop: 12,
  },
  imageRow: {
    height: 57,
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 22,
    marginRight: 18,
  },
  button: {
    width: '43%',
    height: 89,
    alignItems: 'center',
    backgroundColor: 'rgba(78,45,135,1)',
    shadowColor: 'rgba(0,0,0,10)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 15,
  },
  eSims: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    marginTop: 17,
    marginLeft: 48,
  },
  rect2: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: 'rgba(175,132,248,1)',
    borderRadius: 15,
    marginTop: 8,
    alignItems: 'center'
  },
  loremIpsum: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 40,
  },
  button1: {
    width: 147,
    height: 89,
    backgroundColor: 'rgba(78,45,135,1)',
    borderRadius: 15,
    marginLeft: 19,
  },
  devices: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    marginTop: 17,
    marginLeft: 45,
  },
  rect3: {
    width: 147,
    height: 44,
    backgroundColor: 'rgba(175,132,248,1)',
    borderRadius: 15,
    marginTop: 8,
  },
  loremIpsum1: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 45,
  },
  buttonRow: {
    height: 89,
    flexDirection: 'row',
    marginTop: 48,
    marginLeft: 28,
    marginRight: 23,
  },
  rect4: {
    width: 313,
    height: 43,
    backgroundColor: 'rgba(78,45,135,1)',
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 44,
    marginLeft: 28,
  },
  wallet: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    marginTop: 5,
  },
  image3: {
    width: 22,
    height: 25,
    transform: [
      {
        rotate: '179.00deg',
      },
    ],
    marginLeft: 97,
  },
  walletRow: {
    height: 25,
    flexDirection: 'row',
    flex: 1,
    marginRight: 17,
    marginLeft: 130,
    marginTop: 8,
  },
});

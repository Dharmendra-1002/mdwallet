import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomeDarwer = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#6712BD', height: 130}}>
        <View style={{flexDirection: 'row'}} className='justify-center items-end mt-5'>
          <View>
            <Text style={{color: '#ffff'}}>hello</Text>
            <Text style={{color: '#ffff'}}>2345</Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={'----Home'}
          icon={() => (
            <View>
              <AntDesign name="home" size={25}  />
            </View>
          )}
          onPress={()=>props.navigation.navigate('Home')}
        />
         <DrawerItem
          label={'----AddAmount'}
          icon={() => (
            <View>
              <AntDesign name="home" size={25}  />
            </View>
          )}
          onPress={()=>props.navigation.navigate('AddAmount')}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomeDarwer;
const styles = StyleSheet.create({});

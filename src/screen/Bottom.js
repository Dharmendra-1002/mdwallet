


import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
const Bottom = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = ['60%', '90%'];

  const handleSheetChange = (index) => {
    console.log('handleSheetChange', index);
  };

  const handleSnapPress = (index) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  const handleClosePress = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <View style={{ flex: 1, paddingTop: 200 , backgroundColor:"#4e2d87" }}>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} onChange={handleSheetChange}>
        <BottomSheetView style={styles.bottomSheet}>
          <TouchableOpacity style={styles.roundButton} onPress={handleClosePress}>
            <Text className="text-white">Close</Text>
          </TouchableOpacity>
         
          <View style={styles.contentContainer}>


            {/* Boxes */}
            <View style={styles.box}><Icon name="car" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="home" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="money" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="home" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="car" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="car" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="car" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="home" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="money" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="home" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="car" size={30} color="white" /></View>
            <View style={styles.box}><Icon name="car" size={30} color="white" /></View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative', // Make the container relative to position the button
  },
  bottomSheet: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,

  },

  box: {
    top: 5,
    width: 100,
    height: 100,
    backgroundColor: '#4e2d87',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
});

export default Bottom;




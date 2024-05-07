import React, { Component } from "react";
import { StyleSheet, View, Text , SafeAreaView,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

function WalletSettings(props) {
  const navigation = useNavigation();
  return (
  
    <SafeAreaView>
         
    <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity onPress={() => navigation.navigate('AssignCreditLimit2')}>
        <View style={styles.rect2}>
          <Text style={styles.setCreditLimit}>Set Credit Limit</Text>
        </View>

        </TouchableOpacity>
       
       <TouchableOpacity onPress={() => navigation.navigate('AddAmount2')}>
        <View style={styles.rect3}>
          <Text style={styles.addAmount}>Add Amount</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
   
  },
  rect: {
    width: "90%",
    height: 251,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 26,
    marginTop: 138,
    marginLeft: 23
  },
  rect2: {
    width: "85%",
    height: 53,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    marginTop: 55,
    marginLeft: 28
  },
  setCreditLimit: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 15,
    textAlign:"center"

  },
  rect3: {
    width: "85%",
    height: 53,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    marginTop: 41,
    marginLeft: 27
  },
  addAmount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 13,
 textAlign:"center"
  }
});

export default WalletSettings;

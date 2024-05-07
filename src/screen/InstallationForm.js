import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

// Function to create text input component
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

// Parent component that calls MyTextInput function multiple times
const InstallationForm = () => {
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    try {
      const pickedImage = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true
      });
      
      setImage({ uri: `data:${pickedImage.mime};base64,${pickedImage.data}` });
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <MyTextInput label="IMEI" />
        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Rto Details</Text>
        <MyTextInput label="State" />
        <MyTextInput label="District" />
        <MyTextInput label="RTO Division"/>
        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Add Vehicle Details</Text>
        <MyTextInput label="Vehicle birth"/>
        <MyTextInput label="Vehicle No"/>
        <MyTextInput label="Vehicle Type"/>
        <MyTextInput label="Vehicle Make"/>
        <MyTextInput label="Vehicle Model"/>
        <MyTextInput label="Engine Number"/>
        <MyTextInput label="chasis Number"/>
        <MyTextInput label="No of SOS/Panic Button"/>
        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Upload Documents</Text>

        <Text> * Vehicle Image</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Button title="Browse" onPress={selectImage} color="green"/>
          <View style={{ marginLeft: 10 }}>
            <Button title="Clear" onPress={clearImage} color="red" />
          </View>
        </View>


        <Text> *  Vehicle Rc</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Button title="Browse" onPress={selectImage} color="green"/>
          <View style={{ marginLeft: 10 }}>
            <Button title="Clear" onPress={clearImage} color="red" />
          </View>
        </View>


        <Text> * Vehicle Device image</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Button title="Browse" onPress={selectImage} color="green"/>
          <View style={{ marginLeft: 10 }}>
            <Button title="Clear" onPress={clearImage} color="red" />
          </View>
        </View>


        <Text> Customer Aadhar Card</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Button title="Browse" onPress={selectImage} color="green"/>
          <View style={{ marginLeft: 10 }}>
            <Button title="Clear" onPress={clearImage} color="red" />
          </View>
        </View>


        <Text> Customer Pan Card </Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Button title="Browse" onPress={selectImage} color="green"/>
          <View style={{ marginLeft: 10 }}>
            <Button title="Clear" onPress={clearImage} color="red" />
          </View>
        </View>

        <Button title="Submit" color="green"/>


        {image && <Image source={image} style={{ width: 200, height: 200 }} />}
      </View>
    </ScrollView>
  );
};

export default InstallationForm;









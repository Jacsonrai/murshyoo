import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const ImageUpload = ({ onPress, data }) => {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderStyle: "dashed",
            borderRadius: 20,
            borderWidth: 1,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onPress}
        >
          {data ? (
            <Text style={{color:"blue"}}>Image Uploded</Text>
          ) : (
            <>
              
              <Text style={{ fontSize: 20, letterSpacing: 2, opacity: 0.4 }}>
                Upload Student Card
              </Text>
              <Text style={{ letterSpacing: 1, color: "gray", opacity: 0.4 }}>
                If you are student
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ImageUpload;

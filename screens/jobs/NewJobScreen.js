import React, { useState } from "react";
import { Platform, StyleSheet, TextInput, View, Text } from "react-native";
import {
  SelectInputAndroid,
  SelectInputIos,
} from "react-native-select-input-ios/src/components/SelectInput";

const JobDetailsScreen = (props) => {
  const [occupation, setOccupation] = useState("");
  const [type, setType] = useState("");
  const [pay, setPay] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.screen}>
      <Text>Job Details Screen</Text>
      <TextInput value={occupation} placeholder="Occupation" />
      {Platform.OS === "android" ? (
        <SelectInputAndroid
          value={type}
          mode="dropdown"
          onValueChange={(val) => {
            setType(val);
          }}
        />
      ) : (
        <SelectInputIos
          value={type}
          onValueChange={(val) => {
            setType(val);
          }}
        />
      )}
      <TextInput value={pay} />
      <TextInput value={location} placeholder="City, State" />
      <TextInput
        value={description}
        placeholder="Please describe the job duties, environment, expectations, etc."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobDetailsScreen;

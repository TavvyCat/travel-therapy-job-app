import React from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  View,
  Text,
} from "react-native";
import colors from "../assets/colors";
import Card from "./UI/Card";

const JobItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.job}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View style={{ alignItems: "center", justifyContent: "center"}}>
            <View style={styles.details}>
              <Text style={styles.occupation}>{props.occupation}</Text>
              <Text style={styles.type}>{props.type}</Text>
              <Text style={styles.location}>In {props.location}</Text>
              <Text style={styles.payPerWeek}>
                ${props.payPerWeek} per Week
              </Text>
            </View>
            <View style={styles.actions}>
              <Button title="Details" color={colors.accent} />
              <Button title="Details" color={colors.accent} />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  job: {
    height: 200,
    width: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  details: {
    alignItems: "center",
    height: "78%",
    padding: 10,
  },
  occupation: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  type: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  payPerWeek: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  location: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    alignItems: "center",
    height: "15%",
    paddingHorizontal: 20,
  },
});

export default JobItem;

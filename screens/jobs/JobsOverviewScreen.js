import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import JobItem from "../../components/JobItem";

const JobsOverviewScreen = (props) => {
  const jobs = useSelector((state) => state.jobs.jobs);

  return (
    <View style={styles.screen}>
      <Text>Jobs Screen</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <JobItem
            occupation={itemData.item.occupation}
            type={itemData.item.type}
            payPerWeek={itemData.item.payPerWeek}
            location={itemData.item.location}
            onSelect={() => {}}
          />
        )}
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

export const jobsOverviewOptions = (navData) => {
  return {
    headerTitle: "Jobs",
  };
};

export default JobsOverviewScreen;

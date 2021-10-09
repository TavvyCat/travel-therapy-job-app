import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import JobsOverviewScreen, { jobsOverviewOptions} from "../screens/jobs/JobsOverviewScreen";
import JobDetailsScreen from "../screens/jobs/JobDetailsScreen";
import colors from "../assets/colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
};

const JobsScreenNavigator = createStackNavigator();

const JobsNavigator = () => {
  return (
    <JobsScreenNavigator.Navigator screenOptions={defaultNavOptions}>
      <JobsScreenNavigator.Screen
        name="JobsOverview"
        component={JobsOverviewScreen}
        options={jobsOverviewOptions}
      />
      <JobsScreenNavigator.Screen
        name="JobDetails"
        component={JobDetailsScreen}
        // options={JobDetailsOptions}
      />
    </JobsScreenNavigator.Navigator>
  );
};

const MainDrawerNavigator = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <MainDrawerNavigator.Navigator>
      <MainDrawerNavigator.Screen name="Jobs" component={JobsNavigator} />
    </MainDrawerNavigator.Navigator>
  )
}

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
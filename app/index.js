import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;
          },
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            flex:1,
            padding: SIZES.medium,
          }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, COLORS, SIZES } from "../../../constants";

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
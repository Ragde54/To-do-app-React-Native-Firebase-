import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";

export default class AddListModal extends Component {
  backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];

  render() {
    return (
      <Text>Modal</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4
  }
});

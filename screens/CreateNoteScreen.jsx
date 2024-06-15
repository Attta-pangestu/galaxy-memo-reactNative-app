import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "react-native-vector-icons";
import LottieView from "lottie-react-native";

const CreateNoteScreen = ({ setListNotes }) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newNote = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date(),
    };

    setListNotes((prevNotes) => [...prevNotes, newNote]);
    navigation.goBack();
  };

  return (
    <View className="flex-1 items-center bg-[#edf0f6]">
      <StatusBar style="auto" />
      <View className="items-center justify-between bg-[#ff555500] flex-row w-[100%] my-10">
        <View className="flex-row items-center justify-between ml-3 w-fit bg-[#ff555500]">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mr-2"
          >
            <Feather name={"arrow-left"} size={30} color="#2f2f2f" />
          </TouchableOpacity>
          <Text
            className="text-lg text-[#3f3f3f]"
            style={{ fontFamily: "Nunito-Medium", textAlignVertical: "bottom" }}
          >
            {title.length ? "Edit" : "Create"} notes
          </Text>
        </View>

        <View className="flex-row items-center justify-between mr-4 w-[23%]">
          <TouchableOpacity
            className="flex-row w-[100%] justify-between items-center"
            onPress={handleSave}
          >
            <Feather name={"upload"} size={25} color="#2f2f2f" />
            <Text
              className="text-lg text-[#3f3f3f]"
              style={{
                fontFamily: "Nunito-Medium",
                textAlignVertical: "bottom",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        className="w-[90%] h-max min-h-[50] border border-[#797979] rounded-md px-5 py-1 text-lg mb-6"
        placeholder="Note Title"
        cursorColor={"#797979"}
        placeholderTextColor="#5f5f5f"
        style={{ fontFamily: "Nunito" }}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <ScrollView
        className="w-[90%] border border-[#797979] rounded-md px-5 py-0 text-lg mb-12"
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          className="w-[100%] h-[100%] text-lg items-center justify-center my-2"
          placeholder="Note Description"
          cursorColor={"#797979"}
          placeholderTextColor="#5f5f5f"
          style={{ fontFamily: "Nunito", textAlignVertical: "top" }}
          multiline
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </ScrollView>
      <LottieView
        source={require("../assets/animation/empty.json")}
        autoPlay
        loop
        className=" items-center justify-center scale-125 absolute -z-10 top-[10%] opacity-75"
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};

export default CreateNoteScreen;

const styles = StyleSheet.create({});

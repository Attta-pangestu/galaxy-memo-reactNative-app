import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "react-native-vector-icons";
import { StatusBar } from "expo-status-bar";
import { timeFormatter } from "../utils/timeFormatter";
import LottieView from "lottie-react-native";

const NotesScreen = ({ setListNotes }) => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const title = params?.titleProp ?? "";
  const description = params?.descriptionProp ?? "";
  const createdAt = params?.createdAt ?? "";
  const color = params?.color ?? "";
  const id = params?.id ?? "";

  const handleDelete = () => {
    setListNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    navigation.goBack();
  };

  return (
    <View className="flex-1 items-center" style={{ backgroundColor: color }}>
      <StatusBar style="auto" />
      <View className="items-center justify-between bg-[#ff555500] flex-row w-[100%] mb-0 h-[15%]">
        <View className="flex-row items-center justify-between ml-3 w-[34%]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name={"arrow-left"} size={30} color="#2f2f2f" />
          </TouchableOpacity>
          <Text
            className="text-lg text-[#3f3f3f]"
            style={{ fontFamily: "Nunito-Medium", textAlignVertical: "bottom" }}
          >
            Your notes
          </Text>
        </View>
        <View className="flex-row items-center justify-between mr-4 w-[20%]">
          <TouchableOpacity
            onPress={() =>
              title.length &&
              navigation.navigate("CreateNoteScreen", {
                titleProp: title,
                descriptionProp: description,
                id,
              })
            }
            className="flex-row w-[100%] justify-between items-center"
          >
            <Feather name={"edit"} size={25} color="#2f2f2f" />
            <Text
              className="text-lg text-[#3f3f3f]"
              style={{
                fontFamily: "Nunito-Medium",
                textAlignVertical: "bottom",
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        className="w-[90%] rounded-md px-5 py-1 text-4xl mb-0 h-fit bg-[#ff666600] text-[#3f3f3f]"
        style={{ fontFamily: "Nunito-Bold" }}
      >
        {title}
      </Text>
      <Text
        className="w-[90%] rounded-md px-5 py-1 text-sm mb-0 h-fit bg-[#ff666600] text-[#5f5f5f]"
        style={{ fontFamily: "Nunito" }}
      >
        {timeFormatter(createdAt)}
      </Text>
      <ScrollView
        className="w-[90%] rounded-md px-5 py-2 text-lg mb-12 h-[70%] border-2 border-[#ff555500] bg-[#ff666600] text-[#3f3f3f]"
        showsVerticalScrollIndicator={false}
      >
        <Text
          className="w-[100%] rounded-md text-lg mb-12 items-center justify-center h-[100%] text-[#3f3f3f]"
          style={{ fontFamily: "Nunito", textAlignVertical: "top" }}
        >
          {description}
        </Text>
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
      <TouchableOpacity
        className="h-10 w-10 bg-slate-50 items-center justify-center rounded-full right-4 bottom-10 absolute"
        onPress={handleDelete}
      >
        <Feather name={"trash-2"} size={30} color={"#ff5555"} />
      </TouchableOpacity>
    </View>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({});

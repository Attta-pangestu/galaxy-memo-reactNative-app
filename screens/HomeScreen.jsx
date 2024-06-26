import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Vibration,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons, Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { FlatGrid } from "react-native-super-grid";
import Card from "../components/Card";
const HomeScreen = ({ listNotes }) => {
  const navigation = useNavigation();
  const animation = useRef(null);

  const [notes, setNotes] = useState({});

  const [createTooltip, setCreateTooltip] = useState(false);
  const [historyTooltip, setHistoryTooltip] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 items-center justify-start bg-white">
      <StatusBar style="auto" />
      <View className="h-24 items-end justify-between bg-white w-[100%] flex-row px-1">
        <Image source={require("../assets/logo.png")} className="h-16 w-16" />
        <TouchableOpacity
          className="mr-3 mb-3 rounded-3xl bg-slate-100 h-10 w-10 items-center justify-center p-1"
          style={{ elevation: 3 }}
          onPress={() => {}}
          onLongPress={() => {
            setHistoryTooltip(true);
            Vibration.vibrate(100);
          }}
          onPressOut={() => setHistoryTooltip(false)}
        >
          <Ionicons name={"grid-outline"} size={28} color="#4f4f4f" />
        </TouchableOpacity>
      </View>

      <View className="h-14 items-end justify-start bg-[#fff] w-[100%] flex-row">
        <Text
          className="h-[100%] font-semibold text-4xl text-[#3f3f3f] ml-4  bg-[#fff]"
          style={{ fontFamily: "Nunito-Medium", textAlignVertical: "top" }}
        >
          My Galaxy Notes
        </Text>
      </View>

      <View className="h-11 items-center justify-evenly bg-white w-[92.5%] flex-row rounded-lg border border-[#797979] mb-3">
        <Ionicons name={"search"} size={34} color="#5f5f5f" />
        <TextInput
          className="h-[100%] w-[80%] bg-transparent text-xl"
          placeholder="Search notes"
          placeholderTextColor="#d0d0d0"
          cursorColor="gray"
          style={{ fontFamily: "Nunito" }}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {!!searchQuery?.length && (
          <TouchableOpacity
            className="absolute right-2"
            onPress={() => setSearchQuery("")}
          >
            <Feather name={"x"} size={30} color="#5f5f5f" />
          </TouchableOpacity>
        )}
      </View>

      <View className=" w-[92.5%] h-6 mb-6 justify-center ">
        <Text
          className="text-lg text-[#3f3f3f] h-[100%]"
          style={{ fontFamily: "Nunito-Medium", textAlignVertical: "center" }}
        >
          Need to work on these Today! 🎐
        </Text>
      </View>

      {!listNotes?.length ? (
        <LottieView
          ref={animation}
          source={require("../assets/animation/working.json")}
          autoPlay
          loop
          className="h-[50%] items-center justify-center scale-125 mt-6"
          style={{ height: 300, width: 300 }}
        />
      ) : (
        <FlatGrid
          itemDimension={144}
          data={listNotes}
          spacing={17}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              color={item.color}
              description={item.description}
              id={item.id}
              createdAt={item.createdAt}
            />
          )}
          keyExtractor={(item) => item.id}
          className="pt-0.5 bg-[#fff]"
          itemContainerStyle={{
            alignItems: "center",
            // justifyContent: "center",
          }}
          additionalRowStyle={{
            marginBottom: 5,
            // justifyContent: "center",
          }}
          contentContainerStyle={{
            backgroundColor: "#fff",
            paddingTop: 5,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
      {createTooltip && (
        <View className="absolute bg-slate-200 h-7 w-28 justify-center items-center rounded-full right-20 bottom-24 z-10">
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              fontSize: 15,
              color: "#4f4f4f",
            }}
          >
            Create note
          </Text>
        </View>
      )}

      <View
        className="h-16 w-16 absolute bg-[#FDE6EE] justify-center items-center rounded-full bottom-10 right-7 overflow-hidden"
        style={{ elevation: 5 }}
      >
        <TouchableOpacity
          className="h-[100%] w-[100%] justify-center items-center"
          onPress={() => navigation.navigate("CreateNoteScreen")}
          onLongPress={() => {
            setCreateTooltip(true);
            Vibration.vibrate(100);
          }}
          onPressOut={() => setCreateTooltip(false)}
        >
          <Ionicons
            name={"create-outline"}
            size={45}
            color="#3f3f3f"
            className="ml-1"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

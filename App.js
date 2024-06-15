import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesScreen from "./screens/NotesScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync().catch((e) => console.warn(e));

function AnimatedSplashScreen({ children, image }) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isSplashAnimationFinished, setIsSplashAnimationFinished] =
    useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setIsSplashAnimationFinished(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      await Promise.all([]);
    } catch (e) {
    } finally {
      setIsAppReady(true);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationFinished && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#fff", opacity: animation },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              transform: [{ scale: animation }],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setIsSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // await Asset.fromURI(image).downloadAsync();
      setIsSplashReady(true);
    }
    prepare();
  }, [image]);

  if (!isSplashReady) return null;

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

export default function App() {
  const [isFontsLoaded, err] = useFonts({
    Nunito: require("./assets/fonts/static/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/static/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./assets/fonts/static/Nunito-Medium.ttf"),
  });

  if (!isFontsLoaded) return null;

  return (
    <NavigationContainer>
      <AnimatedAppLoader>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Homescreen"
            component={HomeScreen}
            options={{ animation: "fade_from_bottom" }}
          />
          <Stack.Screen
            name="NotesScreen"
            component={NotesScreen}
            options={{ animation: "fade" }}
          />
          <Stack.Screen
            name="CreateNoteScreen"
            component={CreateNoteScreen}
            options={{ animation: "slide_from_bottom" }}
          />
        </Stack.Navigator>
      </AnimatedAppLoader>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { useRef } from "react";
import { Alert, BackHandler } from "react-native";
import WebView from "react-native-webview";
import LoadingIndicator from "./app/components/LoadingIndicator";

import Screen from "./app/components/Screen";
import TabBar from "./app/components/TabBar";

export default function App() {
  const webviewRef = useRef(null);

  const handleBackPress = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  const handleQuitApp = () => {
    Alert.alert(
      "Are you sure you want to exit the app?",
      "Close the application",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "destructive",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]
    );

    return true;
  };

  function handleForwardPress() {
    if (webviewRef.current) webviewRef.current.goForward();
  }

  BackHandler.addEventListener(
    "hardwareBackPress",
    webviewRef.current ? () => {} : handleQuitApp
  );

  return (
    <Screen>
      <WebView
        source={{ uri: "https://www.pipletvnews.com" }}
        renderLoading={LoadingIndicator}
        startInLoadingState={true}
        ref={webviewRef}
      />

      <TabBar
        handleBackPress={handleBackPress}
        handleForwardPress={handleForwardPress}
        handleQuitApp={handleQuitApp}
      />
    </Screen>
  );
}

import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import Text from "../../../components/Text";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status, ...props } = await Camera.requestPermissionsAsync();
      console.log("camera permissions", { ...props });
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};

export default CameraScreen;

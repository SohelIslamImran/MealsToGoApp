import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

const useFonts = () => {
  const [oswaldFontLoaded] = useOswaldFont({
    Oswald_400Regular,
  });

  const [latoFontLoaded] = useLatoFont({
    Lato_400Regular,
  });

  return oswaldFontLoaded && latoFontLoaded;
};

export default useFonts;

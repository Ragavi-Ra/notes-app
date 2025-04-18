import { Text, View } from "react-native";
import InputForm from "@/components/InputForm";

export const options = {
  title: "Notes App",
};

export default function Index() {
  return (
    <View style={{flex:1}}>
      <InputForm></InputForm>
    </View>
      
  );
}

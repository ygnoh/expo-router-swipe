import { Button, View } from "react-native";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Link href="/two" asChild>
        <Button title="Navigate to screen two" />
      </Link>
    </View>
  );
}

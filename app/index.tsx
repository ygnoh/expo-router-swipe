import { Button, View, Text } from "react-native";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Index</Text>
      <Text>Index</Text>
      <Text>Index</Text>
      <Text>Index</Text>
      <Text>Index</Text>
      <Link href="/two" asChild>
        <Button title="Navigate to screen two" />
      </Link>
    </View>
  );
}

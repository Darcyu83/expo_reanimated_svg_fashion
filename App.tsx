import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import Box from "./src/components/BoxTranslate";
import BoxWobble from "./src/components/BoxWobble";

export default function App() {
	const offset = useSharedValue(0);
	const cnt = useRef(0);
	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }],
		height: 100,
		backgroundColor: "red",
	}));

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<View style={styles.container}>
				<Box />
				<BoxWobble />
			</View>
		</SafeAreaView>
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

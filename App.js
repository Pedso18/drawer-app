import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.mainDrawer}></View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ededed",
		alignItems: "center",
		justifyContent: "center",
	},
	mainDrawer: {
		backgroundColor: "#f6e0a2",
		position: "absolute",
		right: "5%",
		bottom: "5%",
		width: "50%",
		height: "20%",
	},
});

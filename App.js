import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.mainDrawer}></View>
			<View style={styles.shelf}>
				<View style={styles.priorityPapers}></View>
			</View>
			<View style={styles.archive}></View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f3f0d9",
		alignItems: "center",
		justifyContent: "center",
	},
	mainDrawer: {
		position: "absolute",
		backgroundColor: "#f6e0a2",
		left: "5%",
		bottom: "10%",
		height: "45%",
		width: "45%",
	},
	shelf: {
		position: "absolute",
		height: "20%",
		width: "60%",
		left: "15%",
		top: "20%",
		borderBottomColor: "#f6e0a2",
		borderBottomWidth: 20,
	},
	priorityPapers: {
		position: "absolute",
		backgroundColor: "#cfcfcf",
		width: "20%",
		height: "70%",
		bottom: 0,
		left: 40,
	},
	archive: {
		position: "absolute",
		backgroundColor: "#cfcfcf",

		right: "5%",
		bottom: "5%",
		width: "40%",
		height: "20%",
	},
});

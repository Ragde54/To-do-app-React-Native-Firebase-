import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Modal,
	ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";
import tempData from "./tempData";

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.divider} />
					<Text style={styles.title}>
						Todo{" "}
						<Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
					</Text>
					<View style={styles.divider} />
				</View>

				<View style={{ marginVertical: 48 }}>
					<TouchableOpacity style={styles.addList}>
						<AntDesign name="plus" size={24} color={colors.blue} />
					</TouchableOpacity>

					<Text style={styles.add}>Add List</Text>
				</View>

				<View style={{ height: 275, paddingLeft: 32 }}>
					<FlatList
						data={tempData}
						keyExtractor={(item) => item.name}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <View>
              <TodoList list={item} />
            </View>}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: "center",
		justifyContent: "center",
	},
	divider: {
		backgroundColor: colors.lightBlue,
		height: 1,
		flex: 1,
		alignSelf: "center",
	},
	title: {
		fontSize: 38,
		fontWeight: "800",
		color: colors.black,
		paddingHorizontal: 64,
	},
	addList: {
		borderWidth: 2,
		borderColor: colors.lightBlue,
		borderRadius: 8,
		padding: 12,
		alignItems: "center",
		justifyContent: "center",
	},
	add: {
		color: colors.blue,
		fontWeight: "600",
		fontSize: 14,
		marginTop: 8,
	},
});

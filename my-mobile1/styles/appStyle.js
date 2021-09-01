import { StyleSheet, Dimensions } from "react-native";

const vw = Dimensions.get('window').width / 100
const vh = Dimensions.get('window').height / 100

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {

    },
    scrollView: {
        height:vh *30,
        width: vw * 100,
        marginTop: 24.3,
        backgroundColor: "#AAAAAA"
    }
})
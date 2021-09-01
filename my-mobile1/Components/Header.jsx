import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'

function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image styles={styles.icons} source={require('../Asset/as.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image styles={styles.icons} source={require('../Asset/as.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image styles={styles.icons} source={require('../Asset/as.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#2fd0b8",
        marginTop: 24.3
    },
    icons: {
        width: 50,
        height: 50,
    }
})

export default Header

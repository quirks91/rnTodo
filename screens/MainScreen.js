import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.pageTitle}>Todo Application</Text>

      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>

      <View style={styles.seperator} />

      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa'
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 46,
    fontWeight: '600'
  },
  seperator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 32,
    fontWeight: '500'
  }
});

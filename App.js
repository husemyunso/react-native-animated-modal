import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const showModal = () => {
    setModalVisible(true);
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const hideModal = () => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => setModalVisible(false));
  };
  const handleYes = () => {
    hideModal();
  };

  const handleNo = () => {
    hideModal();
  };
  useEffect(() => {
    if (modalVisible) { showModal(); }
  }, [modalVisible]);


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { showModal(); }} style={{ backgroundColor: 'skyblue', padding: 24, borderRadius: 20 }}>
        <Text style={{ textAlign: "center", color: "white", fontWeight: 700 }}>Show Modal</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalComp}>
          <Animated.View style={[styles.modalContainer, { opacity: opacityAnim, transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.modalTitle}>Modal Header</Text>
            <Text style={styles.modalText}>Lorem ipsum dolor sit amet, consectetur. </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={handleNo}>
                <View style={[styles.button, { backgroundColor: 'gray', }]}>
                  <Text style={styles.buttonText}>No</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleYes}>
                <View style={[styles.button, { backgroundColor: '#2196F3', }]}>
                  <Text style={styles.buttonText}>Yes</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalComp: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  openButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalContainer: {
    width: 300,
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 30
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "500",
    color: "gray",
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
});

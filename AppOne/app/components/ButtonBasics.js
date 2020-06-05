// Button 按钮示例

'use strict';
import  React, { Component } from 'react';
import{ Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (      
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.Button}
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#eee',
   
  },
  buttonContainer: {
    margin: 20,
    borderRadius:5
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:20,
    opacity:0.6,
  },
  
})

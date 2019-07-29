import React, { Component } from 'react'
import { Button, Alert } from 'react-native'
import { Card, CardItem, View, Text } from 'native-base'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  _alert (string) {
    Alert.alert(string)
    console.warn(string)
  }

  _counter () {
    this.setState({ counter: this.state.counter++ })
  }

  render () {
    return (
      <>
        <View>
          <Text style={{ fontSize: 50 }}>
          Hello Arkademian!
          </Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Card style={{ padding: 20 }}>
            <CardItem cardBody>
              <Text>This is Home</Text>
            </CardItem>
          </Card>
        </View>
        <View>
          <Button danger onPress={() => this.props.navigation.navigate('Profile', {
            userid: 'Tatas'
          })} title='Next to Profile' />
        </View>
      </>
    )
  }
}

import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Slider
        value={89}
        minimumValue={0}
        maximumValue={100}
        step={5}
        maximumTrackTintColor="#c9d9ce"
        minimumTrackTintColor="#ffa033"
        thumbTintColor="#85ff33"
        style={styles.Slider_2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Slider_2: {},
  View_1: {},
  Slider_2: {
    width: 200,
    height: 43,
    paddingLeft: 8,
    paddingTop: 8,
    alignSelf: "flex-start"
  },
  View_1: {},
  Slider_2: {
    width: 200,
    height: 43,
    paddingLeft: 8,
    paddingTop: 8,
    alignSelf: "flex-start"
  }
})

const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 10,
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 50
  },
  formContainer: {
    flex: 1,
    marginTop: -150
  },
  text: {
    color: "#FFF",
    bottom: 6,
    marginTop: 5
  },
  color: {
    color: '#FFF'
  },
  button: {
    margin: 15,
    marginTop: 50,
    backgroundColor: '#EAB543'
  }
};

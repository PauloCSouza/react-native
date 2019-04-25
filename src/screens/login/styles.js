const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  bgcolor: {
    backgroundColor: '#2d72b5',
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 10,
    width: deviceWidth,
    alignItems: 'center'
  },
  logoIMG: {
    width: 160,
    height: 100
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 50
  },
  formContainer: {
    flex: 1,
    marginTop: -125,
    width: '80%'
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
  },
  input: {
    color: '#2d72b5',
    backgroundColor: '#FFF',
    borderRadius: 25,
    marginTop: 15,
    padding: 15,
    textAlign: 'center',
    fontSize: 20,
    width: '100%'
  },
  btnLogin: {
    backgroundColor: '#a1d0fc',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 25,
    marginTop: 15,
    padding: 13
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#2d72b5',
    fontWeight: 'bold'
  },

};

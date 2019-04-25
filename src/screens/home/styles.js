const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: '#2d72b5',
    flex: 1,
    paddingTop: 0
  },
  simulados: {
    paddingTop: 12,
  },
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    marginTop: 36,
  },
  headerTitle: {
    fontWeight: '300',
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
  },
  logoIMG: {
    width: 160,
    height: 100
  },
  txtSimulado: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingTop: 25
  },
};

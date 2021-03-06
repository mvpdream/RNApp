'use strict';

var React = require('react-native');
var Dimensions=require('Dimensions');
var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  scroll:{
    marginRight:10,
    marginLeft: 10
  },
  container: {
    flex: 1,
    width:Dimensions.get('window').width -20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 0,
    marginVertical: 5,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
  },
  projectImage: {
    height: 40,
    width: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius:50
  },
  projectDetailsContainer:{
    flex: 1,
  },
  projectName: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
    color: '#FF6600'
  },
  projectDetail: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
  },
});

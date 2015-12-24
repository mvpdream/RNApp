'use strict';

var React = require('react-native');
var { Text, View ,TouchableWithoutFeedback} = React;

var button = React.createClass({
  render: function () {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onclick}>
        <View style={[style.button,this.props.style]}>
          <Text style={style.text}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

var style={
 button:{
   width:100,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   padding: 10,
   marginVertical: 5,
   height:62,
   backgroundColor:'black'
 },
 text:{
   color:'white'
 }
};

module.exports = button;

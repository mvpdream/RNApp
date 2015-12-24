'use strict';

var React = require('react-native');
var Button=require('../../../button/button.android');
var DataService = require('../../../../network/DataService');
var ProjectList = require('../ProjectList.android');

var NavToolbar = require('../../../navigation/navToolBar/NavToolBar.android');

var {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  ToastAndroid
} = React;

var styles = require("./style");

var ProjectCell = React.createClass({
  editAction:()=>{
    ToastAndroid.show('Now you want to edit user profile', ToastAndroid.SHORT)
  },
  render: function() {
    var project = this.props.project;
    return (
      <ScrollView horizontal="true" style={styles.scroll}>
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image
            source={{uri: project.avatar}}
            style={styles.projectImage}
          />
          <View style={styles.projectDetailsContainer}>
            <Text style={styles.projectName}>
              {project.name}
            </Text>
            <Text style={styles.projectDetail}>
              位于: <Text style={{color: '#4E8EF7'}}> {project.city} </Text> | 年龄 {project.age}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <Button text='编辑' style={{backgroundColor:'green'}} onclick={this.editAction}></Button>
      <Button text='删除' style={{backgroundColor:'red'}} onclick={() =>this.deleteAction(project)}></Button>
      </ScrollView>
    );
  },
  deleteAction:function(project){
    var userid=project._id;
    DataService.deleteUser(userid)
    .then((response) => response.text())
    .then((responseText) => {
      if (responseText.error) {
        ToastAndroid.show("删除失败", ToastAndroid.SHORT)
      }
      else
      {
          ToastAndroid.show("删除成功", ToastAndroid.SHORT)
          this.props.nav.push({
            id: 'ProjectList',
          });
      }

    })
  },
});

module.exports = ProjectCell;

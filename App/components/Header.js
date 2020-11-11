import React from 'react';
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <View style={styles.row}>
        <View style={styles.left}>
          {props?.back && (
            <TouchableOpacity onPress={props?.handle}>
              <Text style={styles.textBack}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{props?.title}</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc0d0d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    paddingLeft: 10,
  },
  textBack: {color: '#fff', fontSize: 17},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {
    color: '#fff',
    fontSize: 19,
    textAlign: 'center',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

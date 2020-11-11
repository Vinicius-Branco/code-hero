import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThumbNail from './ThumbNail';

export default Item = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.thumbnail}>
          <ThumbNail
            size="medium"
            thumbnail={props?.character?.item?.thumbnail}
            height="75%"
            width="75%"
          />
        </View>
        <View style={styles.informations}>
          <Text style={styles.title}>{props?.character?.item?.name}</Text>
          <Text style={styles.subTitle}>See more</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  thumbnail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  informations: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#a9a9a9',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    color: '#afafaf',
    fontSize: 18,
  },
});

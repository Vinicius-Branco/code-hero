import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './Header';
import ThumbNail from './ThumbNail';

export default Details = (props) => {
  const description = props?.character?.item?.description;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header
          handle={props?.handle}
          back={true}
          title={props?.character?.item?.name}
        />
      </View>
      <View style={{flex: 7}}>
        <View style={{flex: 2, alignItems: 'center', marginTop: 40}}>
          <ThumbNail
            size="large"
            thumbnail={props?.character?.item?.thumbnail}
            height={225}
            width={150}
          />
        </View>
        <View style={{flex: 1, padding: 10}}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.description}>
            {description ? description : 'Description Not found!'}
          </Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.viewComics}>
          <Text style={styles.textComics}>Comics</Text>
          <View style={{paddingLeft: 40, flex: 1}}>
            <FlatList
              renderItem={(comic) => (
                <Text style={styles.name}>
                  {comic?.item?.name ? comic?.item?.name : 'Comic Not Found!'}
                </Text>
              )}
              data={props?.character?.item?.comics?.items}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
    marginTop: 40,
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '500',
    color: '#444444',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#A3A3A3',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#a9a9a9',
    width: '70%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  viewComics: {flex: 2, marginBottom: 10},
  textComics: {
    fontSize: 24,
    fontWeight: '500',
    color: '#AAAAAA',
    marginLeft: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 19,
    color: '#afafaf',
  },
});

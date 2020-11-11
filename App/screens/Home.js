import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import Item from '../components/Item';
import Api from '../services/marvel';
import Details from '../components/Details';

export default Home = () => {
  const [characters, setCharacters] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});

  useEffect(() => {
    findCharacters();
  }, []);

  const findCharacters = async () => {
    const {result, success} = await Api('characters');
    setLoading(false);
    if (!success) {
      return;
    }
    setCharacters(result.data.results);
  };

  const refreshCharacters = async () => {
    setRefreshing(true);
    const {result, success} = await Api('characters');
    setRefreshing(false);
    if (!success) {
      return;
    }
    setCharacters(result.data.results);
  };

  const handleItem = (character) => {
    setCurrentCharacter(character);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Marvel Heroes" />
      </View>
      <View style={styles.body}>
        {loading ? (
          <View style={styles.viewLoading}>
            <ActivityIndicator size="large" color="#cc0d0d" />
          </View>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                tintColor={'#cc0d0d'}
                refreshing={refreshing}
                onRefresh={refreshCharacters}
              />
            }
            renderItem={(character) => (
              <TouchableOpacity onPress={() => handleItem(character)}>
                <Item character={character} />
              </TouchableOpacity>
            )}
            data={characters}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>

      <Modal animationType="slide" visible={modalVisible}>
        <Details
          character={currentCharacter}
          handle={() => setModalVisible(!modalVisible)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 7,
  },
  viewLoading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

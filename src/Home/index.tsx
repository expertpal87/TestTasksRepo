import React, { useState, useEffect } from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//=----------- helpers css ------//
import styles from './styles';

//=----------- Component ------//
import ItemView from '../Components/Render';

//=----------- main Component------//
const HomeScreen = ({ route, navigation }) => {
  const [like, setLike] = useState();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(10);

  //=-----------life Cycle------//

  useEffect(() => {
    getData()
  }, [offset]);

  //=-----------helper get Data------//

  const getData = async () => {
    setLoading(true);
    //Service to get the data from the server to render
    await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${offset}`
    )
      //Sending the currect offset with get request
      .then((response) => response.json())
      .then((responseJson) => {
        setDataSource([...dataSource, ...responseJson]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const SetValue = () => {
    setOffset(offset + 10)
  };

  const Likes = () => {
    setLike(true)
  }

  //=----------- Views ------//

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={SetValue}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  //=----------- Render Component ------//

  const RenderComponent = ({ item }) => {
    return (
      <ItemView
        item={item}
        onPress={() => {
          navigation.navigate('Photos', {
            item: item,
          });
        }}
      />
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  //=----------- main Render View ------//

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={RenderComponent}
          ListFooterComponent={renderFooter}
        //pagingEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
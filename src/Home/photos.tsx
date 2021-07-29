import React, { useState, useEffect } from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//=----------- helper css------//

import styles from './styles';

//=----------- main Component------//

const Photos = ({ route, navigation }) => {
  const { item } = route.params;
  const [like, setLike] = useState();

  //=----------- heler------//  

  const Likes = () => {
    setLike(true)
  }

  //=----------- Views ------//
  
  return (
    <View style={styles.listView}>
      <View style={styles.listItemContainer}>
        <Image source={{ uri: item.url }}
          style={styles.profilePic}
        />
        <View style={styles.titleView}>
          <Text numberOfLines={1}
            style={styles.itemStyle}>
            {item.title}
            {/* {item.title.toUpperCase()} */}
          </Text>
          <Text numberOfLines={1}
            style={styles.textReview}>
            129 ReView,  380 Follower
          </Text>
          <Text numberOfLines={1}
            style={styles.goldText}>
            Gold Foodies
          </Text>
        </View>
        <TouchableOpacity onPress={() => alert('follow')}
          style={styles.folllowButton}>
          <Text style={styles.folllowButtonText}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.thumbnailUrl }}
        style={styles.imagePost}
      />
      <View style={styles.likeSection}>
        <TouchableOpacity onPress={() => Likes()}>
          <Image source={like ? { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuGS8_wQaeM9DAsS6brNfV3FXuu7YEdq68Q&usqp=CAU' }
            : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSX62WSmZVaFw1KmKg2c86IjWxniiTKcFmcW42PoVXIy_Ql5-IZ455yPysUvfsAjcYgho&usqp=CAU' }}
            style={styles.likeImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('comments')}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02aMY1tY2BFjiR0YdbWs5olzB1SfmfQ_q9eWt8sdhTy_gr_ErMDe3vK4FJ9K_Tb0VqRA&usqp=CAU' }}
            style={styles.likeImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('share')}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9CfbMhoxIUc63dp59Da6k7NeJYs6cKmGFfsCZFvwMH-ag9iTfIo6pPDoe07hQ6qvT7U&usqp=CAU' }}
            style={styles.likeImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Photos;
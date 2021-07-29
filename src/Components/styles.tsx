
//=----------- style sheet ------// 

import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },


  //----------List-----//
  listView: {
    marginTop: 20,
  },
  listItemContainer: {
    flexDirection: 'row',
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  imagePost: {
    marginTop: 10,
    height: 350,
    width: '100%',
  },
  titleView: {
    width: '65%',
    alignSelf: 'center',
  },
  itemStyle: {
    width: 200,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textReview: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    marginLeft: 10,
    marginTop: 3,
  },
  folllowButtonText: {
    color: '#00BCD4',
    //alignSelf:'center',
    borderWidth: 1,
    borderColor: '#00BCD4',
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  folllowButton: {


  },
  goldText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F4E370',
    marginLeft: 10,
    marginTop: 3,
  },
  likeSection: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  likeImage: {
    height: 30,
    width: 30,
    marginLeft: 15,
    resizeMode: 'contain',
  },
});
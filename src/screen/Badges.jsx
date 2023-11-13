import {StyleSheet, Text, View, FlatList, Image,Dimensions,PixelRatio, ScrollView} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const getResponsiveFontSize = size => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / 375; // Standard width for scaling
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const Badges = () => {
  const data = [
    {
      id: 1,
      data: 'First Stripe Earned',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 2,
      data: 'Born Winner',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 3,
      data: 'Trader of the Month',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 4,
      data: 'Jackpot',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 5,
      data: 'Impossible',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 6,
      data: 'First Stripe Earned',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 7,
      data: 'Born Winner',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 8,
      data: 'Trader of the Month',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 9,
      data: 'Jackpot',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
    {
      id: 10,
      data: 'Impossible',
      image: require('../../assets/image/imga.png'),
      description: 'Top 10% of highest spending players in a month',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={styles.viewHolder}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={{gap: 10}}>
          <Text style={styles.text}>
            {item.data}
          </Text>
          <View style={{width:'90%'}}>
          <Text style={styles.subText}>
            {item.description}
          </Text>
          </View>
        </View>
      </View>
    );
  };
  return (

      <FlatList  style={{flex:1}}
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={5}
      />
    

  );
};

export default Badges;

const styles = StyleSheet.create({
    viewHolder:{
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: windowHeight*0.005,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5,
        alignItems: 'center',
        gap: windowWidth*0.02,
        padding:windowHeight*0.015
      },
      image:{height: 80, width: 80},
      text:{color: '#333', fontSize: getResponsiveFontSize(14), fontWeight: '600'},
      subText:{color: '#727682', fontSize: getResponsiveFontSize(14), fontWeight: '500'}
});

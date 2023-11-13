import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  PixelRatio,
  SafeAreaView
} from 'react-native';
import React, {useEffect, useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const getResponsiveFontSize = size => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / 375; // Standard width for scaling
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
const Home = () => {
  const [showOver, setShowOver] = useState(false);

  const data = [
    {
      id: 1,
      no: 1,
    },
    {
      id: 2,
      no: 2,
    },
    {
      id: 3,
      no: 3,
    },
    {
      id: 4,
      no: 4,
    },
    {
      id: 5,
      no: 5,
    },
    {
      id: 6,
      no: 6,
    },
    {
      id: 7,
      no: 7,
    },
    {
      id: 8,
      no: 8,
    },
    {
      id: 9,
      no: 9,
    },
    {
      id: 10,
      no: 10,
    },
    {
      id: 11,
      no: 11,
    },
    {
      id: 12,
      no: 12,
    },
    {
      id: 13,
      no: 13,
    },
    {
      id: 14,
      no: 14,
    },
    {
      id: 15,
      no: 15,
    },
    {
      id: 16,
      no: 16,
    },
    {
      id: 17,
      no: 17,
    },
    {
      id: 18,
      no: 18,
    },
    {
      id: 19,
      no: 19,
    },
    {
      id: 20,
      no: 20,
    },
    {
      id: 21,
      no: 21,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          // borderWidth: 1,
          marginVertical: 10,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 5,
            color: '#333',
            fontSize: 26,
            fontFamily: 'Montserrat-Regular',
            fontWeight: '600',
          }}>
          {item.no}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
    {/* <View style={styles.mainContainer}> */}
      {/* Header for Today's Games */}
      <View style={styles.headerView}>
        <Text style={styles.header}>Today’s Games</Text>
      </View>

      {/* View for main body */}
      <View style={styles.mainView}>
        <ImageBackground
          source={require('../../assets/image/bg.jpg')}
          resizeMode="cover"
          style={styles.backgroundImage}>
          {/* Upper Heading and Details */}
          <View style={styles.cardHeaderView}>
            <View style={styles.viewHolder}>
              <Text style={styles.cardViewText}>UNDER OR OVER</Text>
              <Image
                source={require('../../assets/image/info.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.viewHolder}>
              <Text style={[styles.cardViewText, {color: '#B296DC'}]}>
                Starting in
              </Text>
              <Image
                source={require('../../assets/image/Clock.png')}
                style={styles.icon}
              />
              <Text style={[styles.cardViewText, {color: '#B296DC'}]}>
                03:23:12
              </Text>
            </View>
          </View>

          {/* Lower Heading and Text Details */}
          <View style={styles.lowerView}>
            <Text style={styles.lowerViewText}>
              Bitcoin price will be under
            </Text>
            <Text style={[styles.lowerViewText, {color: '#fff'}]}>
              $24,524 at 7 a ET on 22nd Jan’21
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.view}>
          <View style={styles.view1}>
            <View style={{gap: 5}}>
              <Text style={styles.headingText}>PRIZE POOL</Text>
              <Text style={[styles.subHeadingText, {textAlign: 'left'}]}>
                $12,000
              </Text>
            </View>
            <View style={{gap: 5}}>
              <Text style={styles.headingText}>UNDER</Text>
              <Text style={styles.subHeadingText}>3.25x</Text>
            </View>
            <View style={{gap: 5}}>
              <Text style={[styles.headingText]}>OVER</Text>
              <Text style={styles.subHeadingText}>1.25x</Text>
            </View>
            <View style={{gap: 5}}>
              <Text style={styles.headingText}>ENTRY FEE</Text>
              <View style={styles.view2}>
                <Text style={[styles.subHeadingText]}>5</Text>
                <Image
                  source={require('../../assets/image/coin.png')}
                  style={styles.buttonIcon}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view}>
          <View style={styles.view3}>
            <Text style={styles.view3Text}>What’s your prediction?</Text>
          </View>
          <View style={[styles.view, {marginVertical: 10}]}>
            <View style={[styles.buttonMainView]}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonView}>
                  <Image
                    source={require('../../assets/image/under.png')}
                    resizeMode="contain"
                    style={styles.buttonIcon}
                  />
                  <Text style={styles.buttonText}>Under</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowOver(true)}
                style={[
                  styles.button,
                  {backgroundColor: '#6231AD', borderColor: '#6231AD'},
                ]}>
                <View style={styles.buttonView}>
                  <Image
                    source={require('../../assets/image/over.png')}
                    resizeMode="contain"
                    style={styles.buttonIcon}
                  />
                  <Text style={styles.buttonText}>Over</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{width: '100%'}}>
          <View style={styles.view4}>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <Image
                  source={require('../../assets/image/player.png')}
                  style={styles.buttonIcon}
                />
                <Text style={styles.text1}>355 Players</Text>
              </View>
              <View style={styles.view6}>
                <Image
                  source={require('../../assets/image/chart.png')}
                  style={styles.buttonIcon}
                />
                <Text style={styles.text1}>View chart</Text>
              </View>
            </View>

            <View style={styles.view7}>
              <View style={styles.view8} />
              <View
                style={[
                  styles.view8,
                  {borderColor: '#2DABAD', backgroundColor: '#2DABAD'},
                ]}
              />
            </View>

            <View style={styles.view5}>
              <View style={styles.view9}>
                <Text style={styles.view9Text}>232 predicted under</Text>
              </View>
              <View style={styles.view9}>
                <Text style={styles.view9Text}>123 predicted over</Text>
              </View>
            </View>
          </View>
        </View>
      </View>


      <Modal
        transparent={true}
        animationType="slide"
        visible={showOver}
        onRequestClose={() => setShowOver(false)}>
        <TouchableWithoutFeedback onPress={() => setShowOver(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Your Prediction is Under</Text>
              <View style={{marginVertical: 15}}>
                <Text
                  style={{
                    color: '#727682',
                    fontSize: getResponsiveFontSize(12),
                    fontWeight: '600',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  ENTRY TICKETS
                </Text>
              </View>
              <View style={{height: '50%'}}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: windowHeight*0.015,
                }}>
                <View>
                  <Text style={styles.modalText1}>You can win</Text>
                  <Text
                    style={styles.modalText2}>
                    $2000
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.modalText1}>Total</Text>
                  <Image
                    source={require('../../assets/image/coin.png')}
                    style={styles.buttonIcon}
                  />
                  <Text
                    style={{color: '#333', fontWeight: '600', fontSize: getResponsiveFontSize(14)}}>
                    5
                  </Text>
                </View>
              </View>

              {/* Button */}
              <TouchableOpacity
                onPress={() => setShowOver(false)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 33,
                  marginTop: windowHeight*0.01,
                  backgroundColor: '#6231AD',
                }}>
                <Text style={styles.modalText3}>
                  Submit my Prediction
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
     
    {/* </View> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
  },
  header: {
    fontSize: getResponsiveFontSize(16),
    fontWeight: '600',
    fontFamily: 'AvenirNextLTPro-Regular',
    color: '#333',
    textAlign: 'left',
    padding: windowHeight * 0.01,
  },
  cardHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.015,
  },
  backgroundImage: {
    width: '100%',
    height: windowHeight * 0.145,
  },
  viewHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth * 0.02,
  },
  icon: {
    height: 15,
    width: 15,
  },
  cardViewText: {
    color: '#D2BAF5',
    fontSize: getResponsiveFontSize(12),
    fontFamily: 'Montserrat-Regular',
    fontWeight: '600',
  },
  headingText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: getResponsiveFontSize(12),
    fontWeight: '500',
    color: '#B5C0C8',
  },
  subHeadingText: {
    color: '#333',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonMainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 2,
    borderRadius: 45,
    borderColor: '#452C55',
    backgroundColor: '#452C55',
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    padding: windowHeight * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: windowWidth * 0.01,
  },
  buttonIcon: {
    height: 15,
    width: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  mainView: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor:'white',
  },
  lowerView: {
    width:'75%',
    marginTop: windowHeight * 0.015,
    marginHorizontal: windowWidth * 0.02,
  },
  lowerViewText: {
    color: '#D2BAF5',
    fontFamily: 'Montserrat-Regular',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '500',
  },
  view: {
    width: '100%',
    backgroundColor: '#fff',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: windowHeight * 0.01,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth * 0.02,
    justifyContent: 'flex-end',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: windowWidth * 0.01,
    marginVertical: windowHeight * 0.01,
  },
  view3Text: {
    color: '#727682',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
  },
  view4: {
    backgroundColor: '#F6F3FA',
    borderBottomLeftRadius: windowHeight * 0.01,
    borderBottomRightRadius: windowHeight * 0.01,
  },
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height:'auto',
    alignSelf: 'center',
  },
  view6: {
    width:'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth*0.01,
    padding: windowHeight*0.01,
  },
  text1: {
    width:'auto',
    color: '#727682',
    fontFamily: 'Montserrat-Regular',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
  },
  view7: {
    marginVertical: windowHeight*0.01,
    width: '90%',
    alignSelf: 'center',
    height: '10%',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  view8: {
    borderWidth: 1,
    borderColor: '#FE4190',
    backgroundColor: '#FE4190',
    width: '70%',
    alignSelf: 'center',
    height: '100%',
  },
  view9: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowHeight*0.008,
  },
  view9Text: {
    width:'auto',
    color: '#B5C0C8',
    fontFamily: 'Montserrat-Regular',
    fontSize: getResponsiveFontSize(12),
    fontWeight: '500',
    textAlign: 'right',
  },

  modalContainer: {
    height:'100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
   height:windowHeight*0.5,
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  modalText: {
    fontSize: getResponsiveFontSize(16),
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Montserrat-Regular',
  },
  modalText1: {
    color: '#B5C0C8',
    fontSize: getResponsiveFontSize(12),
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  modalText2: {
    color: '#B5C0C8',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    color: '#03A67F', 
  },
  modalText3: {
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    padding: windowHeight*0.015, 
    color: '#fff'
  },
});

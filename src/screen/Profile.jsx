import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GamePlayed from './GamePlayed';
import Badges from './Badges';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const getResponsiveFontSize = size => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / 375; // Standard width for scaling
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const TopBar = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerView}>
        <Image
          source={require('../../assets/image/applogo.png')}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={styles.headerText}>Profile</Text>
        <Image
          source={require('../../assets/image/notification.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>

      {/* Image Section */}
      <View style={styles.profileHolder}>
        <Image
          source={require('../../assets/image/pro.png')}
          resizeMode="contain"
          style={{height: 80, width: 80}}
        />
        <Text style={styles.username}>Jina Simons</Text>
        <Text
          style={{
            color: '#727682',
            fontFamily: 'Montserrat-Regular',
            fontSize: getResponsiveFontSize(12),
            fontWeight: '500',
          }}>
          6000 Pts
        </Text>
      </View>

      {/* Description Text */}
      <View style={styles.descriptionholder}>
        <Text style={styles.descriptionText}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
      </View>

      {/* Logout Section */}
      <View style={styles.logoutview}>
        <Image
          source={require('../../assets/image/logout.png')}
          resizeMode="contain"
          style={{height: 25, width: 25}}
        />
        <Text style={styles.logout}>Logout</Text>
      </View>

      {/* Statics */}
      <View style={styles.static}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: -windowHeight * 0.02,
          }}>
          <Image
            source={require('../../assets/image/star.png')}
            resizeMode="contain"
            style={{height: 30, width: 30}}
          />
        </View>
        <View style={styles.subStaticView}>
          <View style={styles.mainholder}>
            <Text style={styles.staticText}>Under or Over</Text>
            <View style={styles.view1}>
              <Image
                source={require('../../assets/image/up.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.subStaticText}>81%</Text>
            </View>
          </View>
          <View style={styles.mainholder}>
            <Text style={styles.staticText}>Top 5</Text>
            <View style={styles.view1}>
              <Image
                source={require('../../assets/image/down.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.subStaticText}>-51%</Text>
            </View>
          </View>
        </View>
      </View>


      <TopBar.Navigator>
        <TopBar.Screen name="Games Played" component={GamePlayed} />
        <TopBar.Screen name="Badges" component={Badges} />
      </TopBar.Navigator>

    </View>

  );
};

export default Profile;

const styles = StyleSheet.create({
 
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.02,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  profileHolder: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
  headerText: {
    color: '#727682',
    textAlign: 'center',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  username: {
    color: '#333',
    fontFamily: 'Montserrat-Regular',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '500',
    width: 'auto',
  },
  descriptionholder: {
    width: '90%',
    alignSelf: 'center',
    marginTop: windowHeight * 0.01,
  },
  descriptionText: {
    fontWeight: '500',
    fontSize: getResponsiveFontSize(14),
    color: '#727682',
    fontFamily: 'Montserrat-Regular',
  },
  logout: {
    color: '#727682',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '500',
  },
  logoutview: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: windowHeight * 0.01,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: windowWidth * 0.01,
  },
  staticText: {
    color: '#727682',
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
  },
  subStaticText: {
    color: '#727682',
    fontSize: getResponsiveFontSize(24),
    fontWeight: '700',
  },
  static: {
    borderWidth: 1,
    borderColor: '#EEEAF3',
    width: '90%',
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
  },
  subStaticView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainholder: {
    gap: windowHeight * 0.005,
  },
  image: {height: 30, width: 30},
  view1: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import MapView, {AnimatedRegion} from 'react-native-maps';
import RNLocation from 'react-native-location';
import {Card, Button} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

class Map extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    mapRegion: null,
    locationResult: null,
    animating: true,
    lat: 0.347596,
    lng: 32.58252,
    fetched: 'location',
    coordinate: {
      latitude: 0.347596,
      longitude: 32.58252,
    },
    longDelta: 0.0043,
    latDelta: 0.0043,
  };

  componentWillMount() {
   
    this._getLocationAsync();
  }

  _handleProceed = async () => {
    // if(this.state.mapRegion == null){
    //   alert('No location selected ');
    //   return;
    // }
    this.props.navigation.navigate("Cart")

  }


  stopdragging = e => {
    this.setState({
      coordinate: e.nativeEvent.coordinate,
      mapRegion: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: this.state.latDelta,
        longitudeDelta: this.state.longDelta,
      },
    });
    //const location = e.nativeEvent.coordinate;
    //this.getCities(location);
  };

//   getCities = async coords => {
//     const loc = await Location.reverseGeocodeAsync(coords);
//     this.setState({
//       fetched: `${loc[0].region}, ${loc[0].street}`,
//     });
//   };

  _getLocationAsync = async () => {
    RNLocation.configure({
        distanceFilter: 5.0
      })
       
      RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse"
        }
      }).then(granted => {
          if (granted) {
            this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
             console.log(locations);
             this.setState({
                mapRegion: {
                  latitude: locations[0].latitude,
                  longitude: locations[0].longitude,
                  latitudeDelta: this.state.latDelta,
                  longitudeDelta: this.state.longDelta,
                },
                coordinate:{
                    latitude: locations[0].latitude,
                    longitude: locations[0].longitude,
                }
              });
            })
          }
        })
  };
  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {mapRegion, animating, lat, lng, search} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.maps}>
          { mapRegion === null ? (
            <Text>Maps region does not exist.</Text>
          ) : (
            <MapView
              followUserLocation={true}
              showsBuildings={true}
              showUserLocation={true}
              showsMyLocationButton={true}
              zoomEnabled={true}
              style={{flex: 1, alignSelf: 'stretch', height: 400}}
              region={mapRegion}
              loadingEnabled>
              <MapView.Marker.Animated
                ref={marker => {
                  this.marker = marker;
                }}
                draggable
                coordinate={this.state.coordinate}
                title="Location"
                pinColor="green"
                description="Shows the job's location"
                onDragEnd={e => {
                  this.stopdragging(e);
                }}
              />
            </MapView>
          )}
        </View>
        
        <View styles={styles.pickup}>
          
            <ScrollView>
              <Card>
               
                <View style={{marginTop: 3, flex: 1}}>
                  <Button
                    buttonStyle={{width: width * 0.85, backgroundColor:"#c3f28a" }}
                    onPress={this._handleProceed}
                    title = "Continue"
                  />
                </View>
              </Card>
            </ScrollView>
       

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 0,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  maps: {
    flex: 2,
  },
  pickup: {
    alignSelf: 'stretch',
  },
  show: {
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15,
  },
});
export default Map;
;

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
import MapView, {AnimatedRegion} from 'react-native-maps';;
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

  componentDidMount() {}

  _handleProceed = async () => {
    // if(this.state.mapRegion == null){
    //   alert('No location selected ');
    //   return;
    // }
    this.props.navigation.navigate("Cart")
    // this.props.reset_errandfetch();
    // this.props.start_errand_fetch();
    // await fetch('https://unclebob1.herokuapp.com/api/v1/client/personal', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'content-type': 'application/json',
    //     Authorization: this.props.sys.token,
    //   },
    //   body: JSON.stringify(obj),
    // })
    //   .then(response => response.json())
    //   .then(responsejson => {
    //     if  (Array.isArray(responsejson)) {
    //       this.props.errandfetch_success_arr(responsejson);
    //     }
    //     this.props.errandfetch_success(responsejson);
    //   })
    //   .catch(err => {
    //     this.props.errand_fetch_fail(err.message);
    //   });

    // this.check_personal(obj, div);


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
    });;
    const location = e.nativeEvent.coordinate;
    this.getCities(location);
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
              /* Example location returned
              {
                speed: -1,
                longitude: -0.1337,
                latitude: 51.50998,
                accuracy: 5,
                heading: -1,
                altitude: 0,
                altitudeAccuracy: -1
                floor: 0
                timestamp: 1446007304457.029,
                fromMockProvider: false
              }
              */
             this.setState({
                mapRegion: {
                  locationResult: true,
                  latitude: locations.latitude,
                  longitude: locations.longitude,
                  latitudeDelta: this.state.latDelta,
                  longitudeDelta: this.state.longDelta,
                },
                coordinate:{
                    latitude: locations.latitude,
                    longitude: locations.longitude,
                    animating: false,
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
          {this.state.locationResult === null ? (
            <ActivityIndicator
              animating={animating}
              color="#c3f28a"
              size="large"
              style={{position: 'absolute', top: 200, left: width * 0.42}}
            />
          ) : this.state.hasLocationPermissions === false ? (
            <Text>Locations permissions are not granted.</Text>
          ) : this.state.mapRegion === null ? (
            <Text>Maps region does not exist.</Text>
          ) : (
            <MapView
              followUserLocation={true}
              showsBuildings={true}
              showUserLocation={true}
              showsMyLocationButton={true}
              zoomEnabled={true}
              style={{flex: 1, alignSelf: 'stretch', height: 400}}
              region={this.state.mapRegion}
              loadingEnabled>
              <MapView.Marker.Animated
                ref={marker => {
                  this.marker = marker;
                }}
                draggable
                coordinate={this.state.coordinate}
                title="Location"
                pinColor="#FF8D00"
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

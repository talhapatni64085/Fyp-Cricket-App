import { View, Text, Image} from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from "react-native-swiper";
import { SafeAreaView } from 'react-native-safe-area-context';

const RLCA = () => {

    const { width, height } = Dimensions.get("window");

    return (
        <SafeAreaView style={{
            height: height,
            width: width,
            backgroundColor: "lightgray",
                    flex: 1,
        }}>
            <View
                style={{
                    
                    
                }}>
                <View
                    style={{
                        backgroundColor: "black",
                        height: "18%",
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingHorizontal: 20,
                        //borderTopLeftRadius: 50,
                        //borderTopRightRadius: 50
                    }}>

                    <View style={{
                        width: "100%",
                        marginTop: '25%'
                    }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            textAlign: 'center',
                        }}>RLCA</Text>
                    </View>
                </View>
                <ScrollView vertical
            showsVerticalScrollIndicator={false}
        >
                <View style={{
                    width: "100%",
                    height: "30%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                }}>
                    <Swiper
          autoplay
          height={150}
          activeDotColor="#FF6347">
          <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 10,
          }}>
            <Image
              source={require('../../assets/images/nft02.jpeg')}
              resizeMode="cover"
              style={{
                height: height * 0.50,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
              }}
            />
          </View>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 10,
          }}>
            <Image
              source={require('../../assets/images/nft03.jpeg')}
              resizeMode="cover"
              style={{
                height: height * 0.50,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
              }}
            />
          </View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 10,
          }}>
            <Image
              source={require('../../assets/images/nft06.jpeg')}
              resizeMode="cover"
              style={{
                height: height * 0.50,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
              }}
            />
          </View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 10,
          }}>
            <Image
              source={require('../../assets/images/nft07.jpeg')}
              resizeMode="cover"
              style={{
                height: height * 0.50,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
              }}
            />
          </View>
        </Swiper>
                </View>
                <View style={{
                    width: "100%",
                    height: "10%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <View style={{
                        width: "100%",
                        height: "80%",
                        marginTop: "2%",
                        backgroundColor: 'lightgray',
                    }}>
                        <Text style={{
                            marginTop: "1%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Location:</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Block 13 F. B. Area, Karachi, Pakistan</Text>
                    </View>
                </View>
                <View style={{
                    width: "100%",
                    height: "10%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <View style={{
                        width: "100%",
                        height: "80%",
                        marginTop: "2%",
                        backgroundColor: 'lightgray',
                    }}>
                        <Text style={{
                            marginTop: "1%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Booking Price:</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>20,000Rs.</Text>
                    </View>
                </View>
                <View style={{
                    width: "100%",
                    height: "16%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <View style={{
                        width: "100%",
                        height: "90%",
                        marginTop: "2%",
                        backgroundColor: 'lightgray',
                    }}>
                        <Text style={{
                            marginTop: "1%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Slots Available:</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Morning: 09:00 AM to 03:00 PM</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Evening: 04:00 PM to 10:00 PM</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Night: 10:00 PM to 04:00 AM</Text>
                    </View>
                </View>
                <View style={{
                    width: "100%",
                    height: "25%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <View style={{
                        marginTop: "2%",
                        width: "100%",
                        height: "80%",
                        backgroundColor: 'lightgray'
                    }}>
                        <Text style={{
                            marginTop: "1%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>
                            Description:
                        </Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>
                            Rlca have a cricket grass ground with two pitches, squad room, 
                            pavaliion, tuck shop and have also net practice available.
                        </Text>
                    </View>
                </View>
                </ScrollView>
            </View>
            </SafeAreaView>
    )
}

export default RLCA
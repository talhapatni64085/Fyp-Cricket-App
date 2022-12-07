import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";

const PSL = () => {

    const { width, height } = Dimensions.get("window");

  return (
    <View
                style={{
                    height: height,
                    width: width,
                    backgroundColor: "lightgray",
                    flex: 1,
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
                        }}>PSL Tournament</Text>
                    </View>
                </View>
                <View style={{
                    width: "100%",
                    height: "30%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                }}>
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
                        }}>Entry Fee:</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>60,000Rs.</Text>
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
                        }}>Tournament Timing:</Text>
                        <Text style={{
                            marginTop: "2%",
                            marginLeft: 5,
                            fontSize: 14
                        }}>Morning: Start at 09:00 AM End at 10:00 PM</Text>
                    </View>
                </View>
                <View style={{
                    width: "100%",
                    height: "15%",
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
                            We have total 32 teams and its a knockout matches, So please be on time, Have a great fun.
                        </Text>
                    </View>
                </View>
            </View>
  )
}

export default PSL
import { View, Text, TouchableOpacity, useWindowDimensions, SafeAreaView} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconx from 'react-native-vector-icons/AntDesign'
import CustomButton from '../components/CustomButton';
import Iconsx from 'react-native-vector-icons/AntDesign'

const Profile = (props) => {

    //const { height } = useWindowDimensions();
    //const { width } = useWindowDimensions();

    const { width, height } = Dimensions.get("window");

    const onAppSettingPressed = () => {
        console.alert('App');
    };

    return (
            <SafeAreaView
                style={{
                    height: height,
                    width: width,
                    backgroundColor: "lightgray",
                    flex: 1,
                }}>
                <View
                    style={{
                        backgroundColor: "black",
                        height: "45%",
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingHorizontal: 20,
                    }}>

                    <View style={{
                        width: "100%",
                        marginTop: '25%',
                    }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                        }}>Profile</Text>
                    </View>
                    <View style={{
                        width:"100%",
                        height:"100%",
                        marginTop:"10%"
                    }}>
                    <View style={{
                        width: "50%",
                        marginTop: "10%",
                    }}>
                        <Icon
                            name='image-inverted'
                            size={120}
                            color='white'
                        />
                        <View style={{
                            //width:"50%",
                            //alignItems:"flex-end",
                            marginTop: "-16%",
                            marginLeft: "50%"
                        }}>
                            <TouchableOpacity>
                                <Iconx
                                    name='pluscircle'
                                    size={20}
                                    color='black'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        width: "50%",
                        height: "35%",
                        alignItems: 'flex-start',
                        //backgroundColor: "lightgray",
                        marginTop: '-25%',
                        marginLeft: '40%'
                    }}>

                        <Text style={{
                            fontSize: 20,
                            color: '#FFF',
                        }}>Muhammad Humayun Khalid

                        </Text>
                        <Text style={{
                            fontSize: 20,
                            color: '#FFF',
                        }}>Batsman</Text>
                    </View>
                    <View style={{
                        //width: "50%",
                        alignItems: 'flex-end',
                        marginTop: "-35%"
                    }}>
                        <TouchableOpacity>
                            <Icons
                                name='edit'
                                size={20}
                                color='white'
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                
                <Text style={{
                    marginTop:"2%",
                    marginLeft:"5%",
                    fontSize:20,
                    color:"black"
                }}>
                    Your Stats
                    </Text>
                <View style={{
                    width: "100%",
                    height: "15%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                        width:"50%",
                        height:"90%",
                        marginTop:"2%",
                        backgroundColor:"lightgray",
                        alignItems:'center'
                    }}>
                        <Text style={{
                            marginTop: "10%",
                            fontSize: 20,
                        }}>Matches</Text>
                        <Text style={{
                            marginTop: "5%",
                            fontSize: 20,
                        }}>15</Text>
                    </View>
                    <View style={{
                        width:"50%",
                        height:"90%",
                        marginTop:"2%",
                        backgroundColor:"lightgray",
                        marginLeft:"52%",
                        marginTop:"-32%",
                        alignItems:'center'
                    }}>
                        <Text style={{
                            marginTop: "10%",
                            fontSize: 20,
                        }}>Runs</Text>
                        <Text style={{
                            marginTop: "5%",
                            fontSize: 20,
                        }}>105</Text>
                    </View>
                </View>
                <Text style={{
                    marginTop:"2%",
                    marginLeft:"5%",
                    fontSize:20,
                    color:"black"
                }}>
                    Your Teams
                    </Text>
                <View style={{
                    width: "100%",
                    height: "20%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                    width: "100%",
                    height: "30%",
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
                        <Iconsx
                            name='picture'
                            size={35}
                            color='black'
                        />
                        <Text style={{
                            marginTop: "-10%",
                            marginLeft: "30%",
                            fontSize: 14
                        }}>TALHA XI</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        height: "80%",
                        marginTop: "2%",
                        backgroundColor: 'lightgray',
                        //alignItems:"center"
                    }}>
                        <Iconsx
                            name='picture'
                            size={35}
                            color='black'
                        />
                        <Text style={{
                            marginTop: "-10%",
                            marginLeft: "30%",
                            fontSize: 14
                        }}>STRIKERS XI</Text>
                    </View>
                </View>
                </View>
                <Text style={{
                    marginTop:"2%",
                    marginLeft:"5%",
                    fontSize:20,
                    color:"black"
                }}>
                    Ranking & Reviews
                    </Text>
                <View style={{
                    width: "100%",
                    height: "30%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                }}>
                </View>
                <View>
                    <CustomButton
                        text="App Settings"
                        onPress={onAppSettingPressed}
                        bgColor='#E7EAF4'
                        fgColor='#4765A9'
                    />
                </View>
               
            </SafeAreaView>
    )
}

export default Profile
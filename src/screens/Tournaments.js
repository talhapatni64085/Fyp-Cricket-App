import { View, Text, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";

const Tournaments = () => {

    const { width, height } = Dimensions.get("window");
    const [items, setItems] = React.useState([{name: 'PSL',code:'#2ecC71'},
    { name: 'Humayun Khiladi', code: '#1abc9c' },
    { name: 'Anjuman Godhra Tournament', code: '#2ecc71' },
    { name: 'Night Cricket Xl', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
])


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
                }}>
                
                <View style={{
                    width: "100%",
                    marginTop:'25%'
                }}>
                    <Text style={{
                        fontSize: 28,
                        color: "#FFF",
                        fontWeight: "bold",
                        textAlign:'center',
                    }}>Tournaments</Text>
                </View>
                </View>
                <View>
                <FlatList
            keyExtractor={(item) => item.code}
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Text style={{
                    marginTop:20,
                    padding:20,
                    backgroundColor:'#FFF',
                    fontSize:16
                }}>
                  {item.name}
                  </Text>
                  </TouchableOpacity>
            )}
            />
                </View>
                </View>
  )
}

export default Tournaments
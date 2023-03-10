
import React, { useState } from 'react';
import { Text, View,SectionList,StyleSheet ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconOne from 'react-native-vector-icons/AntDesign';

const DATA = [
    {
        title: 'A',
        data: [
            { name: 'Johnbbey Longton', num: '+44 7867 123987', status: 'INVITE', favorite: false},
            { name: 'Abbot Jones', num: '+44 7867 489411', status: 'ZIMO', favorite: false },
            { name: 'Ab Tevin', num: '+44 7861 498474', status: 'INVITE', favorite: false },
            { name: 'Adele Parker', num: '+44 7867 489411', status: 'ZIMO', favorite: false },
            { name: 'Adriana', num: '+44 7867 489411', status: 'INVITE', favorite: false },
            { name: 'Adriana', num: '+44 7867 489411', status: 'ZIMO', favorite: false },
            { name: 'Adriana', num: '+44 7861 498474', status: 'INVITE', favorite: false },
            { name: 'Alison Vitam', num: '+44 7860 498996', status: 'ZIMO', favorite: false },
            { name: 'Anaya Zahid', num: '+44 7861 498474', status: 'INVITE', favorite: false },
            { name: 'Andrew Hart', num: '+44 7860 498996', status: 'ZIMO', favorite: false },
        ]
    }
    ,{
        title: 'B',
            data: [

            { name: 'Ben Davies', num: '+44 7867 123987', status: 'INVITE', favorite: false },
            { name: 'Bill Lomas', num: '+44 7867 489411', status: 'ZIM)', favorite: false },
            { name: 'Bob Dillan', num: '+44 7861 498474', status: 'INVITE', favorite: false },
            { name: 'Brian Swift', num: '+44 7860 498996', status: 'ZIM', favorite: false },
        ]
        }
    ]
    
    const Item = ({ name, num, status, favorite }) => (
      
        
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' , marginLeft:12,marginRight:100}}>
        <View style={styles.item}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.num}>{num}</Text>
          
          <Text style={styles.status}>{status}</Text>
          </View>
        </View>
      );
export default function Favourite() {
  
const [Contact,SetContact]=useState('786')
  return (
    <View style={styles.container}>
       
    <View style={styles.column1}>
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#E67E2C' }}></View>
    <View style={styles.column3}>
   
    <View style={styles.column5}>
       <Text style={{marginTop:15,marginLeft:10,color:'black' ,fontSize:15}}>{Contact}</Text>
      <Text style={{marginLeft:2,marginTop:15,color:'black',fontSize:15,color:'black'}}>Contact</Text>
      <Text style={{marginLeft:35,marginTop:4,fontSize:30,color:'black'}}>Contact</Text>
      <View style={{marginLeft:78,marginTop:5}}><Icon.Button name="users" size={25} backgroundColor="#" color="black"  ></Icon.Button></View>
     
     </View>

     <View style={{ borderBottomWidth: 1, borderBottomColor: '#E67E2C' , marginLeft:6,marginRight:6}}>
    <View style={styles.column6}>
    <View style={{marginLeft:8,marginTop:5}}>
    <Image source={require('../images/logo1.png')}
        style={{ width: 80, height: 80 }}/>
    </View>
      <Text style={{marginLeft:15,marginTop:25,fontSize:30,color:'black'}}>John Smith</Text>
      <View style={{marginLeft:45,marginTop:25}}><IconOne.Button name="plus" size={25} backgroundColor="#FFFFFF" color="black"  ></IconOne.Button></View>
    </View>
    </View>

    </View>
    <View style={styles.column4}>
   
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item name={item.name} num={item.num} status={item.status}  />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ borderBottomWidth: 2, borderBottomColor: 'black' , marginLeft:12,marginRight:12}}>
            <Text style={styles.header }>{title}</Text> 
            </View>
          
      
      )}
    />
   
    </View>
    </View>
    <View style={styles.column2}>
     <Text> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z #</Text>
    </View>
  </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'white'
  },
  column1: {
    flex: 24,
    flexDirection: 'column',
     },
  column2: {
    flex: 1,
    flexDirection:'column',
    marginTop:140,
  },
  column3: {
    flex: 1,
    flexDirection: 'column',
     },
     column4: {
      flex: 3,
      flexDirection: 'row',
  },
  column5: {
    
    flexDirection: 'row',
},
column6: {
 
  flexDirection: 'row',
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  backgroundColor: 'white',
  padding: 2,
},
item: {
  flexDirection:'row',
backgroundColor: '#fff',
padding: 10,

borderRadius: 2,

},
item1: {
  flexDirection:'row',
backgroundColor: '#fff',

marginVertical: 2,
borderRadius: 2,

},
name: {
fontSize: 15,
fontWeight: 'bold',
marginTop :4
},
num: {
fontSize: 16,
marginVertical: 4,
marginLeft:6,

},
status: {
fontSize: 16,
fontStyle: 'italic',
marginTop :4,
marginLeft:10,
alignItems:'baseline',
alignContent:'flex-start',
marginTop:2

},


});

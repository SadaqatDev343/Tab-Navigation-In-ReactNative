import * as React from 'react';
import { Text, View ,Button ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons  from 'react-native-vector-icons/FontAwesome5';

//screens
import Search from '../Screens/Search';
import Favourite from '../Screens/Favourite';
import Contact from '../Screens/Setting';
import Setting from '../Screens/Setting';
import AddContact from '../Screens/AddContact';

const Logoimage=()=>{
return <Image source={require("../images/logo.png")}  style={{width:150,height:40} }/> 
}


const firts_src= 'Search'
const Secound_src= 'Setting'
const third_src= 'Favourite'
const Fourth_src= 'Contact'
const Tab = createBottomTabNavigator();

export default function AppNavigator({route}) {
  return (
   
      <Tab.Navigator initialRouteName={Search}
      screenOptions={({route})=>({

          tabBarIcon:({focused,color,size})=>{
              let iconName;
              let rn=route.name;
              if(rn==firts_src){
                  iconName=focused ? 'search':'search'
              }else if(rn==Secound_src){
                  iconName=focused ? 'sliders-h':'sliders-h'
              }else if(rn==third_src){
                  iconName=focused ? 'heart':'heart'
              }
              else if(rn==Fourth_src){
                iconName=focused ? 'user':'user'
            }
              return<Ionicons name={iconName} size={size} color={color}/>
          }
      })}
      
      >
        <Tab.Screen name="Search" component={Search}
         options={{ tabBarShowLabel:false,
          
        }}
        />
        <Tab.Screen name="Setting" component={Setting}
         options={{ tabBarShowLabel:false,
         
        }}
        />
        <Tab.Screen name="Favourite" component={Favourite}
        options={{
              headerTitle:()=> <Logoimage/> , headerTitleAlign:'center',
              tabBarShowLabel:false,
              headerLeft:()=>(<Icon.Button name="long-arrow-alt-left" size={25} backgroundColor="White" color="black" ></Icon.Button>), 
              headerRight:()=>(<Icon.Button name="shopping-bag" size={25} backgroundColor="White" color="black" ></Icon.Button>),
             

            }}
            />
        <Tab.Screen name="Contact" component={AddContact}
         options={{ tabBarShowLabel:false,
          
        }}
        />
      
      </Tab.Navigator>
   
  );
}
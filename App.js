import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)

  function minus(){
    setCount(count-1)
    if(count ==0){
     setCount(0)
    }

   
  }
  function plus(){
   setCount(count+1)
   if(count==10){
    setCount(10)
   }
   
  }

  return (
    <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

        <TouchableOpacity onPress={()=>plus()}>
          <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: '3c3c3c', alignItems: 'center',width:150 }}>
            {count ==10 ?
              <Text style={{ padding: 10 }}>Stop</Text>
              :
              <Text style={{ padding: 10 }}>Plus</Text>
            }
            
          </View>
        </TouchableOpacity>
        

        <Text style={{ fontSize: 20, paddingHorizontal:20}}>{count}</Text>

        <TouchableOpacity onPress={function (){
            minus()
        }}>
          <View style={{ borderWidth: 1, borderRadius: 10, backgroundColor: '3c3c3c',  alignItems: 'center',width:150 }}>
            <Text style={{ padding: 10 }}>Minus</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}


export default App

const styles = StyleSheet.create({})
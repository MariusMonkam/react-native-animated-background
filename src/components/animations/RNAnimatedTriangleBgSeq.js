import React,{useState,useEffect} from "react";
import {StyleSheet, Animated,View} from 'react-native'

const RNAnimatedTriangleBgSeq = (props) => {

  const [numbShapes, setNumshapes]=useState(200)
  const arr = []
  for(var i=0;i<numbShapes;i++){
    arr.push(i)
  }
 
  const animatedValue =[]
  arr.forEach((value)=>{
    animatedValue[value]=new Animated.Value(0)
  })

  useEffect(() => {
    handleAnimBgSequence()
  }, []);
const handleAnimBgSequence=()=>{
  
  const animSequence= arr.map((item)=>{
  return Animated.timing(
    animatedValue[item],
    {
      toValue:1,
      duration:100,
      useNativeDriver:true
    }
  )
})
Animated.sequence(animSequence).start(()=>handleAnimBgSequence())
}


  const {
    
    
    borderLeftWidth,
    
    color,
    elevation,
    backgroundColor 
  } = props;
  


  const AnimBgSequence = arr.map((a,i)=>{
    return (
      <Animated.View
        key={i} 
        style={{opacity:animatedValue[a],
          width: 0,
    height: 0,
          borderLeftWidth,
    borderRightWidth: borderLeftWidth,
    borderBottomWidth: 2*borderLeftWidth,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color,
        backgroundColor ,
        elevation, marginLeft:
         3, marginTop: 3}}
      
      >
       
      </Animated.View>
    );
  })

  return (
    <View style={[styles.container,{elevation:2,}]}>
     {props.children}
    {AnimBgSequence}
   
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"center",
    alignItems:"center",
    margin:5
   
  }
})

export default RNAnimatedTriangleBgSeq;

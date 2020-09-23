import React,{useState,useEffect} from "react";
import {StyleSheet, Animated,View} from 'react-native'

const RNAnimatedCircleBgSeq = (props) => {

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
    
    width,
   
    elevation,
    backgroundColor 
  } = props;
  


  const AnimBgSequence = arr.map((a,i)=>{
    return (
      <Animated.View
        key={i} 
        style={{opacity:animatedValue[a],
        height:width, width, backgroundColor , borderRadius:width/2,
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

export default RNAnimatedCircleBgSeq;

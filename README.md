# react-native-animated-background

## Getting started

`$ npm install react-native-animated-background --save`

### Mostly automatic installation

`$ react-native link react-native-animated-background`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-animated-background` and add `RNAnimatedBackground.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAnimatedBackground.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNAnimatedBackgroundPackage;` to the imports at the top of the file
- Add `new RNAnimatedBackgroundPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-animated-background'
   project(':react-native-animated-background').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-animated-background/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-animated-background')
   ```

## Usage

```javascript
//Note that each component can be imported separately

import RNAnimatedBackground from "react-native-animated-background";

import {
  RNAnimatedBgColor,
  RNAnimatedBgSeq,
  RNAnimatedShapeBgColor,
  RNAnimatedCircleBgSeq,
  RNAnimatedTriangleBgSeq,
} from "react-native-animated-background";

// TODO: What to do with the module?

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <RNAnimatedBgColor
        firstColor="red"
        secondColor="green"
        borderWidth={5}
        elevation={8}
        width={200}
        height={200}
      >
        <Text>Open up App.js to start working on your app!</Text>
      </RNAnimatedBgColor>
      <RNAnimatedShapeBgColor
        firstColor="blue"
        secondColor="yellow"
        borderWidth={5}
        borderRadius={20}
        elevation={8}
        margin={5}
        width={200}
        height={200}
      >
        <Button
          onPress={() => Alert.alert("I love RNAnimatedBorder!")}
          title="press me"
        />
      </RNAnimatedShapeBgColor>
      <RNAnimatedBgColor
        firstColor="pink"
        secondColor="orange"
        borderWidth={20}
        elevation={8}
        margin={5}
        width={300}
        height={200}
      >
        <View
          style={{ width: 100, height: 100, backgroundColor: "black" }}
        ></View>
      </RNAnimatedBgColor>
      <RNAnimatedBgSeq
        numbShapes={100}
        backgroundColor="purple"
        width={40}
        height={40}
        elevation={5}
      >
        <Text
          style={{
            alignSelf: "center",
            position: "absolute",
            backgroundColor: "green",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            elevation: 8,
          }}
        >
          react-native-animated-background
        </Text>
      </RNAnimatedBgSeq>
      <RNAnimatedCircleBgSeq
        numbShapes={100}
        backgroundColor="yellow"
        width={40}
        elevation={5}
      >
        <Text
          style={{
            alignSelf: "center",
            position: "absolute",
            backgroundColor: "green",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            elevation: 8,
          }}
        >
          react-native-animated-background
        </Text>
      </RNAnimatedCircleBgSeq>
      <RNAnimatedTriangleBgSeq
        numbShapes={100}
        backgroundColor="red"
        color="skyblue"
        borderLeftWidth={26}
        elevation={5}
      >
        <Text
          style={{
            alignSelf: "center",
            position: "absolute",
            backgroundColor: "green",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            elevation: 8,
          }}
        >
          react-native-animated-background
        </Text>
      </RNAnimatedTriangleBgSeq>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
```

## Play de video to see react-native-animated-background in action

[![react-native-animated-background](https://img.youtube.com/vi/ZkuvSKnEBAY/0.jpg)](https://www.youtube.com/watch?v=ZkuvSKnEBAY)

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Image,
//   View
// } from 'react-native';

// import Swiper from 'react-native-swiper';
// import Dimensions from 'Dimensions';

// // 屏幕宽度
// var screenWidth = Dimensions.get('window').width;

// export default class ScrollViewDemo extends Component {

//   // 构造
//   constructor(props){
//         super(props);
//         this.state = {
//             isShow: false,
//             items:[]
//         }
//     }
//   render() {
//         let H = 200;
//         if (this.state.isShow) {
//             return(
//                 <View style=>

//                     <Swiper 
//                       autoplay = {true} 
//                       height = {H} 
//                       showsPagination = {true} 
//                       dotColor="white"
//                       activeDotColor='yellow' horizontal={true}>
//                         {
//                             this.state.items.map((item, index) => {
//                                 //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
//                                 return (<Image style= key = {index} resizeMode='cover' source={item}/>)
//                             })
//                         }

//                     </Swiper>
//                     <Text style={styles.title}>
//                         滚动视图
//                     </Text>
//                 </View>
//             );
//         }else {
//             return(
//                 <View style=/>
//             );
//         }
//     }

//   componentDidMount() {
//         var item;
//         for (let i = 0; i < 3; i++){
//             switch (i){
//                 case 0:{
//                     item = require('./images/1.jpg');
//                     break;
//                 }
//                 case 1:{
//                     item = require('./images/2.jpg');
//                     break;
//                 }
//                 default:{
//                     item = require('./images/3.jpg');
//                     break;
//                 }
//             }
//             this.state.items.push(item);

//         }
//         console.log(this.state.items + '111');
//         this.setState({
//             isShow: true,
//             items: this.state.items
//         })
//     }
// }

// const styles = StyleSheet.create({
  
//   title:{
//     marginTop: 30,
//     position: 'absolute',
//     fontSize: 32, 
//     backgroundColor:'transparent'
//   },

// });

// AppRegistry.registerComponent('ScrollViewDemo', () => ScrollViewDemo);
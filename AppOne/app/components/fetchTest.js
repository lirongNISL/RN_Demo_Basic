
    // 发起请求

    // 要从任意地址获取内容的话，只需简单地将网址作为参数传递给 fetch 方法即可（fetch 这个词本身也就是获取的意思）：
    
    // fetch('https://mywebsite.com/mydata.json');
    
    // Fetch 还有可选的第二个参数，可以用来定制 HTTP 请求一些参数。你可以指定 header 参数，或是指定使用 POST 方法，又或是提交数据等等：

    
    
    // fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
    // });
    
    // function getMoviesFromApiAsync() {
    //   return fetch('https://facebook.github.io/react-native/movies.json')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       return responseJson.movies;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    
// React Native 中已经内置了XMLHttpRequest API(也就是俗称的 ajax)。一些基于 XMLHttpRequest 封装的第三方库也可以使用，例如frisbee或是axios等。但注意不能使用 jQuery，因为 jQuery 中还使用了很多浏览器中才有而 RN 中没有的东西（所以也不是所有 web 中的 ajax 库都可以直接使用）。
// WebSocket 支持
// React Native 还支持WebSocket，这种协议可以在单个 TCP 连接上提供全双工的通信信道。

// const ws = new WebSocket('ws://host.com/path');

// ws.onopen = () => {
//   // connection opened
//   ws.send('something'); // send a message
// };

// ws.onmessage = (e) => {
//   // a message was received
//   console.log(e.data);
// };

// ws.onerror = (e) => {
//   // an error occurred
//   console.log(e.message);
// };

// ws.onclose = (e) => {
//   // connection closed
//   console.log(e.code, e.reason);
// };
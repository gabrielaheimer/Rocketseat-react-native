import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
    <WebView source={{uri: navigation.state.params.product.url}}/>
);

Product.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.product.title,
    headerTitleAlign: 'center'
});

export default Product;
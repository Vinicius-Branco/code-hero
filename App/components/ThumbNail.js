import React from 'react';
import {View, Image} from 'react-native';

export default ThumbNail = (props) => {
  const size = {
    small: 'portrait_small',
    medium: 'portrait_medium',
    large: 'portrait_xlarge',
  };
  const {path, extension} = props?.thumbnail;
  const uri = path + `/${size[props?.size]}.` + extension;
  return (
    <View
      style={{
        height: props?.height,
        width: props?.width,
        borderWidth: 1,
        borderColor: '#9999',
      }}>
      <Image
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
        source={{uri}}
      />
    </View>
  );
};

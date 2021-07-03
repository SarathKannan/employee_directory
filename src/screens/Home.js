import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import screens from '.';
import styles from './styles';

const Home = props => {
  const {isLoading, dataList, navigation} = props;
  useEffect(() => {
    setSearchDataArray(dataList);
    return () => {};
  }, []);

  const [text, setText] = useState('');
  const [SearchDataArray, setSearchDataArray] = useState([]);

  const getDetails = details => {
    navigation.navigate(screens.Details, {details: details});
  };

  const onChangeText = text => {
    filterList(text);
    setText(text);
  };

  const filterList = async event => {
    const array = dataList;
    var updatedList = array;
    updatedList = updatedList.filter(function (item) {
      if (item.company !== null) {
        return (
          item.name.toLowerCase().search(event.toLowerCase()) !== -1 ||
          item?.company?.name.toLowerCase().search(event.toLowerCase()) !== -1
        );
      }
    });

    console.log('updatedList', updatedList);
    setSearchDataArray(updatedList);
  };

  const Card = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => getDetails(data)}
        style={styles.cardMain}>
        <View style={styles.imageArea}>
          <Image style={styles.image} source={{uri: data.profile_image}} />
        </View>
        <View style={styles.textArea}>
          <Text style={styles.name}>{data.name} </Text>
          <Text style={styles.companyName}>
            {data?.company !== null && data?.company?.name}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFF'} translucent barStyle="dark-content" />
      <View style={styles.serach}>
        <TextInput
          value={text}
          placeholderTextColor={'gray'}
          style={styles._textinput}
          placeholder="Search.."
          onChangeText={t => {
            onChangeText(t);
          }}
        />
      </View>
      <ScrollView>
        {Array.isArray(SearchDataArray) &&
          SearchDataArray.map((item, i) => <Card key={i} data={item} />)}
      </ScrollView>
    </View>
  );
};

export default Home;

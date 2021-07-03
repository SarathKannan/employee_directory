import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = props => {
  const {navigation, route} = props;
  const details = route.params.details;
  const Header = ({details}) => {
    return (
      <View style={styles.headerMain}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={styles.back}>
          <AntDesign name="back" size={25} color={'#000'} />
        </TouchableOpacity>
        <View style={styles.mainImageArea}>
          <Image
            style={styles.imageHead}
            source={{uri: details.profile_image}}
          />
        </View>
        <Text style={styles.nameHead}>{details.name} </Text>
        <Text style={styles.company}>({details.username})</Text>
      </View>
    );
  };

  const BodyCard = ({data}) => {
    return (
      <View style={[styles.cardMain, {flexDirection: 'column'}]}>
        <Text style={[styles.company, {fontWeight: 'bold'}]}>{data.head} </Text>
        <Text style={styles.company}>{data.subOne} </Text>
        <Text style={styles.company}>{data.subTwo} </Text>
        <Text style={styles.company}>{data?.subThree && data.subThree} </Text>
      </View>
    );
  };
  const BodyMain = ({details, heading, icon}) => {
    return (
      <View>
        <View style={styles.bodyHead}>
          <MaterialCommunityIcons name={icon} size={22} color={'#000'} />
          <Text style={styles.bodyHeadTxt}>{heading} </Text>
        </View>
        <View>
          <BodyCard data={details} />
        </View>
      </View>
    );
  };

  const Seperator = () => {
    return <View style={{height: 30}} />;
  };

  const obj_company = {
    head: details?.company !== null ? details?.company.name : '',
    subOne: details?.company !== null ? details?.company.catchPhrase : '',
    subTwo: details?.company !== null ? details?.company.bs : '',
  };

  const obj_adderss = {
    head: details.address.city,
    subOne: details.address.street,
    subTwo: details.address.zipcode,
  };

  const obj_contact = {
    head: details.name,
    subOne: details.email,
    subTwo: details.website,
    subThree: details.phone,
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFF'} translucent barStyle="dark-content" />
      <Header details={details} />
      <ScrollView>
        <BodyMain
          details={obj_company}
          heading="Office"
          icon="office-building"
        />
        <Seperator />
        <BodyMain
          details={obj_adderss}
          heading="Address"
          icon="target-account"
        />
        <Seperator />
        <BodyMain
          details={obj_contact}
          heading="Contact Me"
          icon="card-account-details-outline"
        />
      </ScrollView>
    </View>
  );
};

export default Details;

import React from 'react';
import { View, ScrollView, StyleSheet,Button } from 'react-native';
import { Chip, lightColors } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

export function chips() {
return (
  <View>
    <ScrollView>
      <View style={styles.contentView}>
        <View style={{ alignItems: 'center' }}>
          <Chip title="Solid Chip" containerStyle={{ marginVertical: 15 }} />
          <Chip
            title="Disabled Chip"
            disabled
            containerStyle={{ marginVertical: 15 }}
          />
          <Chip
            title="Outlined Chip"
            type="outline"
            containerStyle={{ marginVertical: 15 }}
          />
          <Chip
            title="Outlined & Disabled"
            type="outline"
            disabled
            containerStyle={{ marginVertical: 15 }}
          />
          <Chip
            title="Left Icon Chip"
            icon={{
              name: 'bluetooth',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            containerStyle={{ marginVertical: 15 }}
          />
          <Chip
            title="Right Icon Chip"
            icon={{
              name: 'close',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconRight
            containerStyle={{ marginVertical: 15 }}
          />
          <Chip
            title="Pressable Icon Chip"
            icon={{
              name: 'bluetooth',
              type: 'font-awesome',
              size: 20,
              color: lightColors.primary2,
            }}
            onPress={() => console.log('Icon chip was pressed!')}
            type="outline"
            containerStyle={{ marginVertical: 15 }}
          />
          <Chip
            title="Pressable Icon Chip"
            icon={{
              name: 'close',
              type: 'font-awesome',
              size: 20,
              color: lightColors.primary2,
            }}
            onPress={() => console.log('Icon chip was pressed!')}
            iconRight
            type="outline"
            containerStyle={{ marginVertical: 15 }}
          />
        </View>
      </View>
    </ScrollView>
    <MyBackButton />
</View>
);
};
const styles = StyleSheet.create({
contentView: {
  flex: 1,
  marginTop: 20,
},
});

import React, { View, Text, StyleSheet } from 'react-native'
import FilterLink from '../containers/FilterLink'

const styles = StyleSheet.create({
  footer: {
    paddingTop:30,
    flexDirection:'row'
  }
})

const Footer = () => (
  <View style={styles.footer}>
    <Text>Show: </Text>

    <FilterLink filter="SHOW_ALL">
      <Text>All </Text>
    </FilterLink>

    <FilterLink filter="SHOW_ACTIVE">
      <Text>Active </Text>
    </FilterLink>

    <FilterLink filter="SHOW_COMPLETED">
      <Text>Completed</Text>
    </FilterLink>
  </View>
)

export default Footer

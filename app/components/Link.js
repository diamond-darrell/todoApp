
import React, { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { PropTypes } from 'react'

const styles = StyleSheet.create({
  active: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000'
  }
})

const Link = ({ active, children, onPress }) => {
  if (active) {
    return <Text style={styles.active}>{children}</Text>
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Link

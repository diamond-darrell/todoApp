
import React, { Text, TouchableOpacity } from 'react-native'
import { PropTypes } from 'react'

const Link = ({ active, children, onPress }) => {
  if (active) {
    return <Text>{children}</Text>
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

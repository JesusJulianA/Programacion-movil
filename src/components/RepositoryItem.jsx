import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from './theme.js'

const style = StyleSheet.create({
  container: {
    padding: 20, 
    paddingVertical: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginVertical: 4,
    overflow: 'hidden'
  },
  image: {
    width:48,
    height: 48,
    borderRadius: 4
  }
})

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, Language}) => (
  <View style={{flexDirection: 'row', paddingBottom: 2}}>
    <View style={{paddingRight:10}}>
    <Image style={style.image} source={{ uri: ownerAvatarUrl}} />
    </View>
    <View style={{flex:1 }}>
    <StyledText fontWeight='bold'>{fullName}</StyledText >
    <StyledText color='secundary'>{description}</StyledText>
    <StyledText style={style.language}>{Language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = (props)=> (
    <View key={props.id} style={style.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)

export default RepositoryItem;
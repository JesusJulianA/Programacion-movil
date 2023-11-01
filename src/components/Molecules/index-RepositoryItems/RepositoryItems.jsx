import React from 'react'
import { Image, View } from 'react-native'
import StyledText from '../../Atoms/index-styledText/StyledText.jsx'
import RepositoryStats from '../index-RepositoryStats/RepositoryStats.jsx'
import { repositoryItemStyles } from '../../Atoms/index-Styles/Styles.js'



const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, Language }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
          <Image style={repositoryItemStyles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
          <StyledText fontWeight='bold'>{fullName}</StyledText >
          <StyledText color='secundary'>{description}</StyledText>
          <StyledText style={repositoryItemStyles.language}>{Language}</StyledText>
      </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={repositoryItemStyles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
  </View>
);

export default RepositoryItem;
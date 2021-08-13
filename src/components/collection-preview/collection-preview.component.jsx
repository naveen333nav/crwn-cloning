import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles'

import './collection-preview.styles.scss'
const CollectionPreview = ({ title, history, match, routeName, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)

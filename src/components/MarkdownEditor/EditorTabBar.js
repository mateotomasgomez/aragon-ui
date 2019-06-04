import React from 'react'
import styled from 'styled-components'
import MarkdownEditorToolbar from './MarkdownEditorToolbar'
import Button from '../Button/Button'
import TabBar from '../TabBar/TabBar'

const EditorTabBar = ({ screenIndex, handleChange, setSelectionBold }) => (
  <TabBarWrapper>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '20px',
      }}
    >
      <TabBar
        items={['Write', 'Preview']}
        selected={screenIndex}
        onChange={handleChange}
      />

      {screenIndex === 0 && (
        <MarkdownEditorToolbar setSelectionBold={setSelectionBold} />
      )}
    </div>
  </TabBarWrapper>
)

const TabBarWrapper = styled.div`
  margin: 0 -30px 30px;
`

export default EditorTabBar

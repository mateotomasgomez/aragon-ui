import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MarkdownEditorToolbar from './MarkdownEditorToolbar'
import TabBar from '../TabBar/TabBar'

const EditorTabBar = ({ screenIndex, handleChange, setSelectionBold }) => (
  <div>
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
  </div>
)

const TabBarWrapper = styled.div`
  margin: 0 -30px 30px;
`

EditorTabBar.propTypes = {
  screenIndex: PropTypes.number,
  handleChange: PropTypes.func,
  setSelectionBold: PropTypes.func,
}

EditorTabBar.defaultProps = {
  screenIndex: 0,
  handleChange: () => {},
  setSelectionBold: () => {},
}

export default EditorTabBar

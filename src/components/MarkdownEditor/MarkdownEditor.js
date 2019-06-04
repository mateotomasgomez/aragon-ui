import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MarkdownEditorWrapper from './MarkdownEditorWrapper'

const Editor = ({ content, onChange }) => {
  return (
    <Container>
      <MarkdownEditorWrapper content={content} onChange={onChange} />>
    </Container>
  )
}

Editor.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.function,
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export default Editor

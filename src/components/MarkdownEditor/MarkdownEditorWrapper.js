import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import EditorTabBar from './EditorTabBar'
import EditorTabView from './EditorTabView'

let codemirrorInitialInstance = null

const Editor = ({ content, onChange }) => {
  const [screenIndex, setScreenIndex] = useState(0)

  const [codemirrorInstance, setCodemirrorInstance] = useState(
    codemirrorInitialInstance
  )

  const handleChange = _screenIndex => {
    setScreenIndex(_screenIndex)
  }

  const handleEditorChange = _content => {
    onChange(_content)
  }

  const onCodeMirrorInit = _codemirrorInstance => {
    setCodemirrorInstance(_codemirrorInstance)
  }

  const setSelectionBold = () => {
    codemirrorInstance.doc.replaceSelection(
      '**' + codemirrorInstance.doc.getSelection() + '**'
    )
  }

  return (
    <Container>
      <EditorTabBar
        handleChange={handleChange}
        screenIndex={screenIndex}
        setSelectionBold={setSelectionBold}
      />

      <ContainerEditor>
        <EditorTabView
          handleEditorChange={handleEditorChange}
          onCodeMirrorInit={onCodeMirrorInit}
          screenIndex={screenIndex}
          unsavedText={content}
          instance={codemirrorInstance}
        />
      </ContainerEditor>
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
const ContainerEditor = styled.div`
  position: absolute;
  top: 50px;
  bottom: 0;
  overflow-y: auto;
`

export default Editor

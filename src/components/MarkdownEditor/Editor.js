import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/theme/idea.css'
import 'codemirror/mode/javascript/javascript'

const Editor = ({ content, instance, onCodeMirrorInit, onChange }) => {
  useEffect(() => {
    instance && instance.setSize('100%', '100%')
  }, [instance])

  return (
    <CodeMirror
      value={content}
      options={{
        mode: 'gfm',
        theme: 'idea',
        lineWrapping: true,
        autofocus: true,
      }}
      editorDidMount={editor => {
        onCodeMirrorInit(editor)
      }}
      onBeforeChange={(editor, data, value) => {
        onChange(value)
      }}
      onChange={(editor, data, value) => {
        onChange(value)
      }}
    />
  )
}

Editor.propTypes = {
  content: PropTypes.string,
  instance: PropTypes.object,
  onCodeMirrorInit: PropTypes.function,
  onChange: PropTypes.function,
}
Editor.defaultProps = {
  onCodeMirrorInit: () => {},
}

export default Editor

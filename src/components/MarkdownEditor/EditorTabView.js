import React from 'react'
import PropTypes from 'prop-types'

import Editor from './Editor'
import Preview from './Preview'

const EditorTabView = ({
  handleEditorChange,
  onCodeMirrorInit,
  screenIndex,
  content,
  instance,
}) => (
  <div
    style={{
      flex: '1 1 auto',
      margin: '0',
      padding: '0',
      height: '100%',
    }}
  >
    <div
      style={{
        flex: '1',
        padding: '0',
        margin: '0',
        width: '100%',
        height: '100%',
      }}
    >
      <div>
        {screenIndex === 0 && (
          <Editor
            instance={instance}
            content={content}
            onChange={handleEditorChange}
            onCodeMirrorInit={onCodeMirrorInit}
          />
        )}
        {screenIndex === 1 && <Preview content={content} />}
      </div>
    </div>
  </div>
)

EditorTabView.propTypes = {
  handleEditorChange: PropTypes.function,
  onCodeMirrorInit: PropTypes.function,
  screenIndex: PropTypes.integer,
  content: PropTypes.string,
  instance: PropTypes.object,
}

export default EditorTabView

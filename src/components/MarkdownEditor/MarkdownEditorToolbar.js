import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button/Button'
import Add from '../../icons/components/Add'

const MarkdownEditorToolbar = ({ setSelectionBold }) => {
  return (
    <EditToolBar>
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarSeparator />
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarButton compact onClick={setSelectionBold}>
        <Add />
      </EditToolBarButton>
      <EditToolBarSeparator />
    </EditToolBar>
  )
}

MarkdownEditorToolbar.propTypes = {
  setSelectionBold: PropTypes.function,
}

const EditToolBar = styled.div`
  background: #ccc;
  height: 30px;
`

const EditToolBarButton = styled(Button)`
  position: relative;
  width: 22px !important;
  height: 22px;
  text-align: center;
  padding: 0;
  margin: 0;
  background: #ccc;
`

const EditToolBarSeparator = styled.div`
  display: inline-block;
  width: 10px;
  height: 1px;
`

export default MarkdownEditorToolbar

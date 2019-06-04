import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkbox from '../Input/Checkbox'
import SafeLink from '../Link/SafeLink'
import { theme } from '../../theme'

import MDReactComponent from 'react-markdown'

const Link = ({ children, ...props }) => (
  <SafeLink {...props} target="_blank">
    {children}
  </SafeLink>
)

const ListItem = ({ checked, children }) => {
  let checkbox = null
  if (checked !== null) {
    checkbox = <Checkbox checked={checked} />
  }

  return React.createElement(
    'li',
    { className: checkbox ? 'task-list-item' : '' },
    checkbox,
    children
  )
}

ListItem.propTypes = {
  checked: PropTypes.boolean,
  children: PropTypes.object,
}

const Preview = ({ content }) => {
  return (
    <MarkdownWrapper>
      <MDReactComponent
        source={content}
        renderers={{ link: Link, listItem: ListItem }}
      />
    </MarkdownWrapper>
  )
}

Preview.defaultProps = {
  content: '',
}

Preview.propTypes = {
  content: PropTypes.string,
}

const MarkdownWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1;
    cursor: text;
    position: relative;
    margin: 1em 0 0.5em;
    padding: 0;
  }
  h1 {
    font-size: 2.5em;
    border-bottom: 1px solid ${theme.contentBorder};
  }
  h2 {
    font-size: 2em;
    border-bottom: 1px solid ${theme.contentBorder};
  }
  h3 {
    font-size: 1.55em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    color: ${theme.textSecondary};
    font-size: 1em;
  }
  p,
  blockquote,
  table,
  pre {
    margin: 1em 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  blockquote {
    padding: 0 1em;
    border-left: 4px solid ${theme.textTertiary};
    color: ${theme.textTertiary};
  }

  a {
    color: ${theme.gradientStart};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a > code,
  p > code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    padding: 0.2em 0.4em;
  }
  table {
    border-collapse: collapse;
  }
  tr {
    border-top: 1px solid ${theme.contentBorder};
  }
  tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  th,
  td {
    border: 1px solid ${theme.contentBorder};
    padding: 0.5em 1em;
  }
  img {
    max-width: 95%;
  }
  pre {
    background-color: ${theme.mainBackground};
    border-radius: 3px;
    overflow: auto;
    padding: 1em;
  }
  ul,
  ol {
    padding-left: 2em;
  }
  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }
  ol ol ol,
  ol ul ol,
  ul ol ol,
  ul ul ol {
    list-style-type: lower-alpha;
  }
  li.task-list-item {
    list-style-type: none;
    position: relative;
    & > button:first-child {
      position: absolute;
      margin-left: 0;
      margin-top: 5px;
      right: 100%;
    }
  }
`

export default Preview

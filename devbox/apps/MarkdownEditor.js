import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkdownEditor } from '@aragon/ui'

const initialContent = `# Header1


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget porta nisl. Proin tempor, velit non convallis bibendum, metus mi rutrum dolor, eget facilisis metus nisl vitae nibh. Aenean quis risus diam. Donec et ante vel tellus varius molestie ac ac arcu. Quisque ornare id elit eget blandit. Nunc suscipit ullamcorper pulvinar. In ac ullamcorper dui, aliquam feugiat metus. Donec sit amet blandit eros. Ut lobortis nec diam et ultrices.

Nunc eget vulputate enim. Pellentesque tincidunt mi augue, in hendrerit massa vehicula non. Nullam nec posuere lectus. Fusce leo nisl, elementum nec porta eu, bibendum sit amet tellus. Integer fringilla euismod elit, quis pretium lorem auctor et. Donec eu lectus nibh. Donec vel ultricies dolor. Etiam in porta mauris, a auctor eros. Integer eu mauris non velit ultrices accumsan.

Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.
Nulla posuere arcu quis sem cursus, a tempus ligula rhoncus. In non neque sit amet dui commodo vestibulum. Phasellus a varius dolor, vel scelerisque sapien. Praesent vehicula est et diam rhoncus suscipit. Aenean eget mauris eu ante ullamcorper tempor ac ut massa. Nunc tempus orci neque, quis elementum risus eleifend in. Integer pellentesque magna vel eros imperdiet eleifend sed id ante. Maecenas vulputate dictum lobortis. In imperdiet urna ut nulla dapibus, non molestie urna dapibus. Vivamus viverra ante orci, ac gravida ante pretium vel.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sit amet faucibus orci, eu vestibulum est. Donec non purus quis est tincidunt elementum. In luctus tellus id luctus convallis. Donec sit amet maximus augue. Donec placerat ac lectus ac volutpat. Praesent quam ante, imperdiet eu leo sit amet, vestibulum imperdiet elit.

Vestibulum pellentesque ligula ac lacinia varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis tincidunt aliquam lorem, eu vestibulum erat suscipit quis. Etiam commodo molestie elit, eu auctor tortor tincidunt at. Quisque vel ullamcorper elit. Curabitur erat mi, eleifend sit amet elementum at, cursus id nisi. Phasellus sit amet urna erat. Nam ut nisl volutpat, cursus eros eget, vestibulum sapien. Morbi dui eros, posuere in gravida eu, pellentesque nec ante. Maecenas commodo, massa eget tincidunt mollis, lorem mauris egestas massa, vitae maximus enim sem at quam. `

const App = () => {
  const [content, setContent] = useState(initialContent)

  return (
    <Main>
      <MarkdownEditor content={content} onChange={setContent} />
    </Main>
  )
}

const Main = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  resize: both;
  overflow: auto;
  > ${MarkdownEditor} {
    position: relative;
    height: 100%;
  }
`

export default App

import styled from 'styled-components'

export const HomeStyle = styled.div`
  font-size: 20px;
  color: skyblue;

  .banner {
    background-color: pink;

    span {
      color: grey;

      /* 表示既是span也是class为active的 */
      &.active {
        color: brown;
      }

      &:hover {
        color: aquamarine;
      }

      /* 这种用法还可以用伪类和伪元素 */
      &::after {
        content: "yeah"
      }
    }
  }
`

export const TitleStyle = styled.h3`
  text-decoration: underline;
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.fontSize};
`
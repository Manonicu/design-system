// @ts-nocheck
import { createGlobalStyle } from 'styled-components'
import ThemeConfig from './theme'

const ThemeProvider = ({ theme = 'personal' }) => {
  const _theme = ThemeConfig[theme]
  return <StyledThemeProvider theme={_theme} />
}
const StyledThemeProvider = createGlobalStyle`
  :root{
    --color-primary: ${(props) => {
    console.log(props.theme)
    return props.theme?.primary
  }};
    --color-secondary: ${(props) => props.theme?.secondary};
    --color-success: ${(props) => props.theme?.success};
    --color-danger: ${(props) => props.theme?.danger};
    --color-warning: ${(props) => props.theme?.warning};
    --color-text: ${(props) => props.theme?.text};
  }
`
export default ThemeProvider

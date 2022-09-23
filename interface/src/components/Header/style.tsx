import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'

export const HeaderContainer = styled(Box)<{ theme?: Theme }>`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bolder;
  padding: 1rem 1.5rem;
  gap: 10px;
`

export const LogoImage = styled.img`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
`

export const HeaderLeft = styled(Box)<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderRight = styled(Box)<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  width: 300px;
`

export const NavBar = styled.ul<{ theme?: Theme; open: boolean }>`
  display: flex;
  align-items: center;
  .link {
    margin-left: 50px;
    width: max-content;
    text-align: center;
    a {
      display: block;
      &:hover {
        color: ${({ theme }) => theme.colors.danger};
      }
    }
    transition: all 2s ease-in-out;
    &.active-link {
      a {
        color: ${({ theme }) => theme.colors.danger};
      }
      .underline {
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.colors.danger};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    width: 100%;
    z-index: 40;
    background: ${({ theme }) => theme.colors.black};
    left: 0;
    top: 60px;
    flex-direction: column;
    padding-inline-start: 0px;
    height: 100vh;
    padding: 20px 0px;
    transform: translatex(-100%);
    transition: all 0.3s ease-in-out;
    ${({ open }) =>
      open &&
      css`
        transform: translatex(0%);
      `}
    .link {
      margin-left: 0px;
      width: 100%;
      padding: 15px;
      .underline {
        display: none;
      }
      a {
        font-size: 20px;
        font-style: bolder;
      }
      &.active-link {
        background: ${({ theme }) => theme.colors.danger};
        a {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`

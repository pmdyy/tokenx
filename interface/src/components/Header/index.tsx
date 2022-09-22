import React, { useEffect, useState, ReactNode } from 'react'
const WalletModal = dynamic(() => import('components/WalletModal'), { ssr: false })
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link, { LinkProps } from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import { createSvgIcon } from '@mui/material/utils'
import { useRouter } from 'next/router'

interface LinkProps2 extends LinkProps {
  children: ReactNode
}

function CustomLink({ children, href, ...props }: LinkProps2) {
  const router = useRouter()
  return (
    <div className={router.pathname === href ? 'active-link link' : 'link'}>
      <Link href={href} {...props}>
        {children}
      </Link>
      <div className="underline"></div>
    </div>
  )
}

export const HeaderContainer = styled(Box)<{ theme?: Theme }>`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-area: header / header / header / header;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bolder;
  padding: 0 1rem;
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
`

const HomeIcon = createSvgIcon(<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />, 'Home')

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        {/*
        <IconButton size="large" color="inherit" onClick={() => {}}>
          <HomeIcon />
        </IconButton>
        */}
        <Link href="/">
          <Logo>
            {/*<LogoImage src={`./orthanc.png`} />*/}
            {`TokenX`}
          </Logo>
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <WalletModal />
      </HeaderRight>
      {/*
      <Harmburger onClick={() => setOpenMobileDrawer(!openMobileDrawer)}>
        {openMobileDrawer ? <TimesIcon /> : <BarIcon />}
      </Harmburger>
      <NavBar open={openMobileDrawer}>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </NavBar>
      */}
    </HeaderContainer>
  )
}

export default Header

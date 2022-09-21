import React from 'react'
import { Menu,Container,Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item as={NavLink} to='/' exact header>
                <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}} />
                Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name='Activities' />
            <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
            </Menu.Item>
        </Container>
        </Menu>
  )
}

export default NavBar
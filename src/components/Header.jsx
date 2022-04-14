import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header({ handleCart, orderLen }) {
  return (
    <AppBar
        position="static" //свойство для статического состояния header
    >
      <Toolbar>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1 }}
          >
              Online Store
          </Typography>
          <IconButton
            color="inherit" //свойство наследовать цвет от родительского компонента
            onClick={handleCart}
          >
            {/*Badge - компонент для отоброжения количества товаров в корзине */}
            <Badge
                color="secondary"
                badgeContent={orderLen}
            >
                <ShoppingBasket />
            </Badge>
          </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header

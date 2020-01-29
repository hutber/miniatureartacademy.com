import React from 'react'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import GroupIcon from '@material-ui/icons/Group'
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined'
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined'
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined'
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'

import urls from 'config/urls'

export const core = [
  {
    title: 'Home',
    Icon: <HomeOutlinedIcon />,
    url: urls.home.root,
  },
  {
    title: 'Artists',
    Icon: <GroupIcon />,
    url: urls.artists.root,
  },
  {
    title: 'Countries',
    Icon: <PublicOutlinedIcon />,
    url: urls.countries.root,
  },
  {
    title: 'Competitions',
    Icon: <EmojiEventsOutlinedIcon />,
    url: urls.competitions.root,
  },
]

export const models = [
  {
    title: 'Models',
    Icon: <AccessibilityOutlinedIcon />,
    url: urls.models.root,
  },
  {
    title: 'Manufacturers',
    Icon: <ApartmentOutlinedIcon />,
    url: urls.manufacturers.root,
  },
  {
    title: 'OOP',
    Icon: <RemoveShoppingCartIcon />,
    url: urls.oop.root,
  },
]

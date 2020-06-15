import React from 'react'
import FilterLink from '../Containers/FilterLink'
import { VisibilityFilters } from './actions/actions'

const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ADDED}>Cart</FilterLink>
  </p>
)

export default Footer
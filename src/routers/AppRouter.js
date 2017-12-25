import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import AddExpense from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboard from '../components/ExpenseDashboard'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFound from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={AddExpense}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

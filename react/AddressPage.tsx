import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import Addresses from './components/pages/Addresses'
import AddressCreate from './components/pages/AddressCreate'
import AddressEdit from './components/pages/AddressEdit'

const AddressPage = () => (
  <Fragment>
    <Route exact path="/_addresses" component={Addresses} />
    <Route exact path="/_addresses/new" component={AddressCreate} />
    <Route exact path="/_addresses/edit/:id" component={AddressEdit} />
  </Fragment>
)

export default AddressPage

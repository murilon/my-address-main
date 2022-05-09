import type { FunctionComponent } from 'react'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { AddressSummary, AddressRules } from 'vtex.address-form'

import ContentBox from '../shared/ContentBox'

const AddressBox: FunctionComponent<Props> = ({ address, onEditClick, onDeleteClick }) => {
  return (
    <ContentBox
      lowerButton={
        <FormattedMessage id="vtex.store-messages@0.x::commons.edit" />
      }
      onLowerButtonClick={onEditClick}
      lowerButton2={
        <FormattedMessage id="vtex.store-messages@0.x::addresses.deleteAddress" />
      }
      onLowerButton2Click={onDeleteClick}
    >
      <div className="lighter c-muted-2 lh-copy pv4 w5 h4">
        <AddressRules country={address.country} shouldUseIOFetching>
          <AddressSummary address={address} />
        </AddressRules>
      </div>
    </ContentBox>
  )
}

interface Props {
  address: Address
  onEditClick: () => void
  onDeleteClick:() => void
}

export default AddressBox

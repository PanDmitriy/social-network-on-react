import React from 'react';
import s from './User.module.css'

export const User = ({
  name,
  username,
  phone,
  email,
  company,
  address,
  website
}) => {
  return (
    <div className={s.container}>
      <hr/>
      <div>
        {name}
      </div>
      <div>
        {username}
      </div>
      <div>
        {phone}
      </div>
      <div>
        {email}
      </div>
      <div>
        {company.name}
      </div>
      <div>
        Address: {`${address.city}, ${address.street}, ${address.suite}`} <br/>
        Zipcode: {address.zipcode}
      </div>
      <div>
        {website}
      </div>
      <hr/>
    </div>
  )
}
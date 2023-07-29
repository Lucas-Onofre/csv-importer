import React from "react"

import { CardWrapper } from "./styles"
import { UserListDTO } from "../../types/User";

type CardProps = {
  user: UserListDTO;
}

export const Card = ({ user }: CardProps) => {
  return (
    <>
      <CardWrapper>
        <span>Name: {user.name}</span>
        <span>City: {user.city}</span>
        <span>Country: {user.country}</span>
        <span>Favorite Sport: {user.favorite_sport}</span>
      </CardWrapper>
    </>
  )
}
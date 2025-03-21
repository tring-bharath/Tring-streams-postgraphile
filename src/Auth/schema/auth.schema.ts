import { gql } from "graphile-utils";

export const authSchema = gql`

  type LoginPayload {
    user: User
    token: String
  }

extend type Mutation {
  login(email: String!, password: String!): LoginPayload
  register(firstName: String!,email: String!, password: String! ): String
}

type RegisterPayload {
  message: String!
  user: User
}

`;
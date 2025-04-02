import { gql } from "graphile-utils";

export const authSchema = gql`
enum gender {
  FEMALE
  MALE
}
  type userData
  {
    id:Int
    firstName:String
    email:String
    lastName:String
    location:String
    phoneNumber:String
    dateOfBirth:Date
    gender:gender
    profilePicture:String
    bio:String
  }
extend type Query
{
 getUserData:userData
}
extend type Mutation {
  login(email: String!, password: String!):String
  register(firstName: String!,lastName:String!,email: String!, password: String! ): String
  logout:String 
}


`;
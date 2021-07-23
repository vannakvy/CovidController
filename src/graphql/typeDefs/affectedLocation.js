import {gql} from 'apollo-server-express'

export default gql`
  extend type Query {
    allAffectedLocations:[AffectedLocation!]!
    getAffectedLocationWithPagination(page:Int!, limit:Int!, keyword:String):AffectedLocationPaginator!
    getAffectedLocationById(id:ID!):AffectedLocation!
  }

  extend type Mutation{
    createAffectedLocation(newAffectedLocation:AffectedLocationInput):AffectedLocationResponse!
    updateAffectedLocation(updatedAffectedLocation:AffectedLocationInput,id:ID!):AffectedLocationResponse!
    deleteAffectedLocation(id:ID!):AffectedLocationResponse!
  }

  type AffectedLocation {
        id:ID!
        affectedLocationName:String
        village:String
        commune:String
        district:String
        province:String
        other:String
        open:Boolean
        openAt:Date 
        closeAt:Date
        case:Case!
        long:Float
        lat:Float
        personalInfo:PersonalInfo
        coorporate:Boolean
        infected:Boolean
        createdAt:Date 
        updatedAt:Date
  }

  input AffectedLocationInput {
        affectedLocationName:String
        village:String
        commune:String
        district:String
        province:String
        other:String
        open:Boolean
        openAt:Date 
        closeAt:Date
        personalInfo:ID!
        case:ID!
        long:Float
        lat:Float
        coorporate:Boolean
        infected:Boolean
  }
  type AffectedLocationResponse {
      success: Boolean 
      message:String
  }

  type AffectedLocationPaginator{
      affectedLocations:[AffectedLocation!]!
      paginator: Paginator!
  }
`
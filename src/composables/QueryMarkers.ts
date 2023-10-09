import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { provideApolloClient } from "@vue/apollo-composable";
import { apolloClient } from '../apolloclient';
export const Queries = {
queryForMarkers: provideApolloClient(apolloClient)(() => useQuery(gql`
  query getMarkers {
    markers {
      id
      marker_name
      location {
        coordinates
      }
    }
  }`
))
}

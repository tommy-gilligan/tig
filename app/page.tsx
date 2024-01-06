import styles from './page.module.css'
import { getClient } from './ApolloClient.js'
import { gql } from "@apollo/client";

export const GET_SHIPMENTS = gql`
  query GetShipments {
    shipments {
      id
      trackingId
      status
      statusSeverity
      deliveredTime
      lastUpdate
      deliveryAddress
      totalTransit
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query: GET_SHIPMENTS });

  return (
    <main className={styles.main}>
    {JSON.stringify(data)}
    </main>
  )
}


'use client'

import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import TimeOff from "./time-off";

export default function TimeOffPage() {
    return (
        <ApolloProvider client={client}>
            <TimeOff />
        </ApolloProvider>
    )
}
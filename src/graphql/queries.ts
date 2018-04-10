// GRAPHQL
import gql from "graphql-tag";

export const GET_MESSAGE = gql`
    query GetMessage($id: ID!) {
    msg: getMessage(id: $id) {
        id
        content
        author
    }
    }
`;

export const HELLO = gql` { hello } `
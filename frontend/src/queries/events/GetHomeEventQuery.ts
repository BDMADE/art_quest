import { gql } from "@apollo/client";

const GET_HOME_EVENT_QUERY = gql`
    {
        events {
            id
            title
            start
            end
            images {                
                formats
            }
        }
    }
`;

export default GET_HOME_EVENT_QUERY;

import { useQuery, gql } from "@apollo/client";

const GET_REGISTER = gql`
    query {
        
        getallRe {
            id
            username
            email
            birthday
            password
            confirmPassword
        }
    }


`;


export const useRegister = () => {
    
    const { error, data, loading } = useQuery(GET_REGISTER);

    return {
        error,
        data,
        loading
    };
}






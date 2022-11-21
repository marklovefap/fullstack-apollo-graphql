import React from 'react';
import { useRegister } from '../hooks/useRegister';

export default function ShowRegister() {
    
    const { error, data, loading }  = useRegister();
    
    console.log({ error, loading, data});

    if (loading) return <div>Spinner.......</div>

    if (error) return <div>Something went wrong</div>

    return (
        <div>
           
        </div>
    );
};


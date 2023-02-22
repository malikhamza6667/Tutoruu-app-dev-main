import React from 'react';
 
export interface context{
    language: string
}
const LanguageContext = React.createContext<context | null>(null);
 
export default LanguageContext;
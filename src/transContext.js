import React, {createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"},
    {amount: -200, desc: "Utility BIll"},
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transobj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transobj.amount,
                desc: transobj.desc
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}    
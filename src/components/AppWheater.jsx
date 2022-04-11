import React from 'react';
import {Form} from './Form';
import { Result } from './Result';
import { useWheater } from '../hooks/useWheater';
import { Loading } from './Loading';

export const AppWheater = () => {

  const {result,loading} = useWheater();

  return (
    <>
        <main className='two-columns'>
            <Form/>
            {
            loading ? <Loading /> : 
            result?.name &&<Result/>}
        </main>
    </>
  )
}

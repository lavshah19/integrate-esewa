import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import Success from './components/Success.jsx';
import Failure from './components/Failure.jsx';

import PaymentComponent from './components/PaymentForm.jsx';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PaymentComponent/>} />
        <Route path="/payment-success" element={<Success/>} />
        <Route path="/payment-failure" element={<Failure/>} />
      </Routes>
    </div>
  )
}

export default App
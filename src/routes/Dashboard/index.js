import React, { useState } from 'react';
import DatePicker from '../../components/Pickers/InlineDate';

const Login = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DatePicker selectedDate={date} onChange={setDate} />
    </>
  );
};

export default Login;

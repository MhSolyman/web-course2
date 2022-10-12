import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = () => {
    let dataOne = useLoaderData();
    let data = dataOne.data;
    
    return (
        <div>
            <h1>Charts</h1>
            <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={400}
          data={data}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
   
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>







        </div>
    );
};

export default Chart;
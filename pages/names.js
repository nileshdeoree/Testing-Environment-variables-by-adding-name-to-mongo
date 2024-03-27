// pages/names.js

import { useEffect, useState } from 'react';

const  NamesPage = ({ names }) => {
  return (
    <div>
      <h1>Names :: </h1>
      <ul>
        {names.map(name => (
          <li key={name._id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch names data from the API endpoint
  const res = await fetch('http://localhost:3000/api/getnames');
  const names = await res.json();

  // Pass the names data as props to the component
  return {
    props: {
      names,
    },
  };
}


export default NamesPage
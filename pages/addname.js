
import { useState } from 'react';

const Contact = ()=> {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/addname', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ name }]),
      });

      let result = await response.json()
      console.log(result);
      if (response.ok) {
        setSubmitted(true);
      } else {
        // Handle errors
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {submitted ? alert("Name is Submitted"): ""}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Contact

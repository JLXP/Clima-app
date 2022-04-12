import React,{useState} from 'react';
import { useWheater } from '../hooks/useWheater';


export const Form = () => {

  const [alert, setAlert] = useState('');

  const {search, dataSearch, searchWheather} = useWheater();

  const {city, country}= search;

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(Object.values(search).includes('')){
        setAlert('All fields are required');
      return;
    }
    setAlert('');
    searchWheather(search);


  }

  return (
    <div className="content">

      {alert && <p>{alert}</p>}
      <form 
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={dataSearch}
            value={city}
          />
        </div>
        <div className="field">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={dataSearch}
            value={country}
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Spain</option>
            <option value="PE">Peru</option>
          </select>
        </div>

        <input
          type="submit"
          value="
          Consult Weather"
        />
      </form>
    </div>
  )
}

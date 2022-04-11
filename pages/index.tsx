import React, {useState} from "react"
import Layout from "../components/Layout"

type Props = {
  
}

const Blog: React.FC<Props> = (props) => {
  const [zip, setZip] = useState<number>(20601);
  const [county, setCounty] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const getProducts = async () => {
    if (!zip) {
      return; 
    }

    const url = `/api/getCityAndCounty`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(zip)
    });

    const data = await res.json();
    if (data.result.code) {
      setError(data.result.message);
      return;
    }

    setCounty(data.result.county);
    setCity(data.result.city);
    setError('')
  }

  const handleZipChange = async (e) => {
    const zip = e.target.value; 
    setZip(zip);
  }

  return (
    <Layout>
      <div className="page">
        <h1>Enter a Zip!</h1>
        <main>
          <input value={zip} onChange={(e) => handleZipChange(e)} />
          <button onClick={() => getProducts()}>
            See City and County
          </button>
          {error ? 
            <h3 style={{color:"red"}}>{error}</h3>
            : 
            <>
              <h1>{city}</h1>
              <h2>{county}</h2>
            </>
          }
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog

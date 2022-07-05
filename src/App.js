import './App.css';
import logo from './logo.svg';
import { getAssetsByAddress } from './apis';
import { useState, useEffect } from 'react'

const menu = [
  {
    icon: logo,
    title: 'Explore',
  },
  {
    icon: logo,
    title: 'Favorites'
  },
  {
    icon: logo,
    title: 'Favorites'
  }
]

function App() {
  const [address, setAddress] = useState();
  const [assets, setAssets] = useState({});
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
    getAssetsByAddress().then(response => {
      setAssets(response.data)
      setWallet(response.data.items.reduce((sum, item) => {
        console.log(sum, item)
        return sum + item.quote
      }, 0))
      console.log(response)
    })
  }, []);

  return (
    <div className="w-full h-screen flex row">
      <div className='w-40 h-full bg-gray-200'>
        {
          menu.map((menuItem, index) => (
            <div key={index} className='flex row items-center px-2'>
              <img src={menuItem.icon} alt={menuItem.title} className="h-4" />
              <div className='text-md font-medium p-1 py-2'>{menuItem.title}</div>
            </div>
          ))
        }
      </div>
      {/* table */}
      <div className='w-full h-full overflow-y-scroll p-4'>
        <div className='w-full bg-white p-8 border-2 border-gray-200 rounded-lg'>
          <div className='flex row mb-4'>
            <img src={logo} alt="Wallet" className="h-6" />
            <span className='font-medium'>Wallet - {wallet.toFixed(2)}</span>
          </div>
          <table className="w-full">
            <thead className='border-b-2 border-gray-200'>
              <tr>
                <th className='text-left p-2'>Assets</th>
                <th className='text-right p-2'>Value</th>
              </tr>
            </thead>
            <tbody>
              {assets.items &&
                assets.items.map((item, index) => (
                  <tr className='border-b-2 border-gray-200'>
                    <td className='flex row p-1 py-2'>
                      <img src={item.logo_url} alt={item.contract_name} className="h-6 pr-2" />
                      <span className='font-medium'>{item.contract_name}</span>
                    </td>
                    <td className='font-medium text-right'>{item.quote}</td>
                  </tr>
                ))
              }
              
            </tbody>
          </table>
          {/* can be made component <Table headers={[{}]}></Table> */}
        </div>
      </div>
    </div>
  );
}

export default App;

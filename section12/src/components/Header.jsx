import '../css/Header.css'
import { memo } from 'react';

const Header = ({count}) => {
  console.log(`HEADER ${count}`);
  return <>
  <div className="Header">
    
    <h3>To day 📆</h3>
    <h1>{new Date().toDateString()}</h1>
  </div>
  </>
}

const MemonizedHeader = memo(Header)

export default MemonizedHeader;
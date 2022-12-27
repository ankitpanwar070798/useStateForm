import React,{useState} from 'react';
import Account from './Account';
import Info from './Info';
import Payment from './Payment';
import './formStyle.css'
function Form() {
  const [page, setPage] = useState(0);

const onClickHandler =(event)=>{
  event.preventDefault();
 
}
 
  return (
    <form onClick={onClickHandler}>
    <div className="form">
   
      <div className="form-container">
      {
  page === 0 ? <Account/> : page === 1 ? <Info/> :  <Payment/>
 }
        
       
      </div>
      <div className="footer">
         {
          page > 0 && (
          <button className="nextbutton" onClick={() =>{
            const nextPage= page - 1;
            setPage(nextPage);
          }}>Back</button>)
         }
         {
          page < 2 && (
            <button className="nextbutton"onClick={() =>{
              const nextPage= page + 1;
              setPage(nextPage);
            }
          }>next</button>
          )
         }
        
        </div>
    </div>
    </form>
  )
}

export default Form






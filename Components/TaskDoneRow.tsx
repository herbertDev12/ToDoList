import DeleteButton from "./DeleteButton"

export default function TaskDoneRow(){

  
    return(
      
        <div>
            <th style={{ 
              border: '4px double #009688', 
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '160px' 
            }}>
              <span>(Task1)</span>
              <DeleteButton/>
            </th>           
        </div>
    )
}




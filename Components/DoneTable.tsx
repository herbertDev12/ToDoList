export default function DoneTable(){
    return (
        <div>
            
            <table style={{
                border: '4px double rgba(255, 255, 255, 0.7)',
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                textShadow: '0 0 3px rgba(255, 255, 255, 0.5)',
                borderCollapse: 'collapse',
                width: '500px',
                margin: '20px 0',
                position: "absolute",
                top: "300px",
                left: "1300px",
            }}>
                <thead>
                    <tr>
                        <th style={{  
                            border: '4px double rgba(255, 255, 255, 0.7)', 
                            padding: '8px',
                            background: 'rgba(21, 15, 15, 0.1)',
                            color: 'white',
                            textShadow: '0 0 3px rgba(18, 17, 17, 0.5)',
                        }}>      Done Table       </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style={{ border: '4px double #009688', padding: '8px' }}>(Task1)</th>                        
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid red', padding: '8px' }}>(Task2)</th>  
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
import TaskRow from "./TaskRow";

export default function InProgTable(){
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
                left: "650px",
            }}>
                <thead>
                    <tr>
                        <th style={{ border: '4px double #009688', padding: '8px' }}>      In Progress       </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TaskRow></TaskRow>                        
                    </tr>
                    <tr>
                        <TaskRow></TaskRow> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
import TaskRow from "./TaskRow";

export default function ToDoTable(){
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
                left: "20px"
            }}>
                <thead>
                    <tr>
                        <th style={{ 
                            border: '4px double rgba(255, 255, 255, 0.7)', 
                            padding: '8px',
                            background: 'rgba(21, 15, 15, 0.1)',
                            color: 'white',
                            textShadow: '0 0 3px rgba(18, 17, 17, 0.5)',
                        }}>      To Do       </th>
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
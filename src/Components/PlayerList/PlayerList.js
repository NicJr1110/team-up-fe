import React from 'react';

const PlayerList = ({ players }) => (
   <table className ="table">
         <thead>
            <tr>
               <th>Number</th>
               <th>Player</th>
            </tr>
         </thead>
         <tbody>
            {players.map((player, i) => (
                <tr key={ i }>
                    <td> { i + 1} </td>
                    <td> { player }</td>
                </tr>
            ))} 
         </tbody>
   </table>
);

export default PlayerList;
import React from 'react';

const PlayerList = ({ players }) => (
   <div className="container-50vh">
      <table className ="table">
            <thead>
               <tr>
                  <th> </th>
                  <th>Players</th>
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
   </div>
);

export default PlayerList;
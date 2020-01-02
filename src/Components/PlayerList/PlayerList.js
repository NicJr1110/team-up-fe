import React from 'react';

const PlayerList = ({ players }) => (
   <div className="player-table">
      <table >
            <thead>
               <tr>
                  <th>Players</th>
               </tr>
            </thead>
            <tbody>
               {players.map((player, i) => (
                  <tr key={ i }>
                     <td> { player }</td>
                  </tr>
               ))} 
            </tbody>
      </table>
   </div>
);

export default PlayerList;
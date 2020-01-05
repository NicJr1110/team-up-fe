import React from 'react';

const PlayerList = ({ 
   players,
   handleClick
}) => {
   return (
   <div className="player-table">
      <table >
            <thead>
               <tr>
                  <th>Players</th>
               </tr>
            </thead>
            <tbody>
               {players.map((player, i) => {
                  let index = i;
                  const handleDeleteName =() => { 
                     handleClick(index) 
                  };
                  return (
                  <tr className="table-layout" key={ i }>
                     <td>{ player }</td>  
                     <td className = "delete-data">
                        <button className="btn-del" onClick={ handleDeleteName }>x</button>
                     </td>
                  </tr>
               )}
               )} 
            </tbody>
      </table>
   </div>
   )
};

export default PlayerList;
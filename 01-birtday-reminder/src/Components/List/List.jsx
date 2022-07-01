import React from 'react';
import './List.css'

const List = ({people}) => {
  
  return (
    <>
  {people.map((person)=>{
    const {id,name,age,image}=person;
    return(
      <article key={id} className="card">
        <img src={image} alt={name} srcset="" />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    )
  })}
    </>
  );
};

export default List;
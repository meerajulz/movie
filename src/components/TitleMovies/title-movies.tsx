import React from "react";

interface Props {
  heading: string;
}

const TitleMovies: React.FC<Props> = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  );
} 

export default TitleMovies;


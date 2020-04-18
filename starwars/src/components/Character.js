import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 550px;
  background: azure;
  margin: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  &:hover {
    border: 4px solid #ce5937;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 0;
  font-size: 16px;
`;
const CardBody = styled.div`
  padding: 5%;
`;

const Character = (props) => {
  const character = props.character;
  console.log(character);

  const Image = styled.img`
    border-radius: 5px 5px 0 0;
  `;

  const ImageDiv = styled.div``;

  const Heading = styled.h2`
    text-align: center;
  `;

  return (
    <div>
      <Card>
        <ImageDiv>
          <Image src={character.image} alt={character.name} />
        </ImageDiv>
        <CardBody>
          <Heading>{character.name}</Heading>
          <DescriptionDiv>
            <span>Gender:</span>
            <span>{character.gender}</span>
          </DescriptionDiv>
          <DescriptionDiv>
            <span>Species:</span>
            <span>{character.species}</span>
          </DescriptionDiv>
          <DescriptionDiv>
            <span>Location:</span>
            <span>{character.location.name}</span>
          </DescriptionDiv>
          <DescriptionDiv>
            <span>Status:</span>
            <span>{character.status}</span>
          </DescriptionDiv>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;

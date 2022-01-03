import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { addBar } from '../../actions/barChartActions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  padding-right: 20px;
`;

const Title = styled.h3`
  display: block;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 20px;
  height: 60px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
`;

const Input = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
`;

const Error = styled.small`
  display: block;
  color: #690303;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--bar-color);
  color: var(--text-color);
  border-radius: 10px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

const AddNewBarForm = () => {
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState(0);
  const [errorCountry, setErrorCountry] = useState('');
  const [errorPopulation, setErrorPopulation] = useState('');

  const data = useAppSelector((state) => state.barChart.data);

  const countries = data.map((item) => item.country.toLowerCase());

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let errorFlag = false;

    if (countries.includes(country.trim().toLowerCase())) {
      setErrorCountry('Country already exists');
      errorFlag = true;
    } else if (country === '') {
      setErrorCountry('Please enter country');
      errorFlag = true;
    } else {
      setErrorCountry('');
    }
    if (population === 0) {
      setErrorPopulation('Please enter a number');
      errorFlag = true;
    } else {
      setErrorPopulation('');
    }

    if (!errorFlag) {
      const newBar = { id: uuidv4(), country, population };
      dispatch(addBar(newBar));
      setCountry('');
      setPopulation(0);
    }
  };
  return (
    <Container>
      <Title>Add New Entry</Title>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label htmlFor='country'>Country</Label>
          <Input
            placeholder='enter country'
            id='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {errorCountry && <Error>{errorCountry}</Error>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor='population'>Population</Label>
          <Input
            type='number'
            placeholder='enter population'
            id='population'
            value={population}
            onChange={(e) => setPopulation(+e.target.value)}
          />
          {errorPopulation && <Error>{errorPopulation}</Error>}
        </FormGroup>
        <BtnContainer>
          <Button type='submit'>Add</Button>
        </BtnContainer>
      </Form>
    </Container>
  );
};

export default AddNewBarForm;

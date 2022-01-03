import styled from 'styled-components';
import { arrangeBars } from '../../actions/barChartActions';
import { useAppDispatch } from '../../app/hooks';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  padding-left: 20px;
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

const ArrangeButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Button onClick={() => dispatch(arrangeBars())}>Arrange</Button>
    </Container>
  );
};

export default ArrangeButton;

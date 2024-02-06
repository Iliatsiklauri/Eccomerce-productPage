import Content from './Content';
import { propType } from '../types';
const Title = ({ name, setName }: propType) => {
  return (
    <div>
      <h1>this is Title {name}</h1>
      <Content name={name} setName={setName} />
    </div>
  );
};

export default Title;

import Bottom from './Bottom';
import { propType } from '../types';

const Content = ({ name, setName }: propType) => {
  return (
    <div>
      <h1>this is content {name}</h1>
      <Bottom name={name} setName={setName} />
    </div>
  );
};

export default Content;

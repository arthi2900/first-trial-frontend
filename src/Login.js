import { Members } from './Members';
import { mem } from './mem';

export function Login() {
  return (
    <div className='logindataalign'>
      {mem.map(nm => <Members name={nm.name} img={nm.img} login1={nm.login1} signin1={nm.signin1} />)}
    </div>
  );
}

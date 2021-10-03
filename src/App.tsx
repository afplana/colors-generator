import { FunctionComponent, useState } from 'react';
import SingleColor from './SingleColor';
import Color from 'color'
import Values from 'values.js';

const App: FunctionComponent = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#222').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    try {
      let colors: Color[] = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#222"
            className={`${error ? 'error' : null}`} />
          <button className="btn" type="submit" >submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex as string} />;
        })}
      </section>
    </>
  );
}

export default App;

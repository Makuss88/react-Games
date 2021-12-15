import React, { useState } from 'react'

const Dawid = () => {
  const [czas, setCzas] = useState(0);
  const [minuta, setMinuta] = useState('minut');
  const [ileZrobic, setIleZrobic] = useState(0)

  const style = {
    color: 'yellow',
    fontWeight: 'bold',
  }
  const styleButton = {
    margin: "15px",
    padding: "20px",
  }

  const zadanieDawidka = () => {
    const basia = 100 / 120; // czas ktory zajmie aby zrobic jednego pieroga, tzn 100pierogow w 120minut
    const kasia = 100 / 180;
    const zosia = 100 / 360;
    let counter = 0
    let flag = true;

    while (flag) {
      if (Math.floor(basia * counter) + Math.floor(kasia * counter) + Math.floor(zosia * counter) >= ileZrobic) {
        flag = false;
        if (counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) setMinuta('minuty');
        setCzas(counter);
      }
      counter++;
    }
  }

  const addHandler = () => {
    setIleZrobic(ileZrobic + 10);
  }

  const minusHandler = () => {
    if (ileZrobic >= 10) setIleZrobic(ileZrobic - 10);
  }

  return (
    <div>
      <h1>
        <button style={styleButton} onClick={addHandler}>PIEROGI IN PLUS</button>
        <button style={styleButton} onClick={minusHandler}>PIEROGI IN MINUS</button>
      </h1>
      <h1>
        <button style={styleButton} onClick={zadanieDawidka}>
          OBLICZ!
        </button>
      </h1>
      <h1>
        Czas, aby dzieczyny zrobiły <span style={style}>{ileZrobic}</span> naleśników to: <span style={style}>{czas} {minuta}.</span>
      </h1>
    </div>
  )
}

export default Dawid

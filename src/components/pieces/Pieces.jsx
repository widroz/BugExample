import React, { useEffect, useState } from 'react'
import Bootstrap from '../Bootstrap'
import InputField from '../cut_sizes_chart/InputField';
import NavigationBar from '../navigation/NavigationBar'

export default function Pieces() {

  const [n, setN] = useState(9);
  const [cut, setCut] = useState();

  useEffect(() => {
    setCut(findCutBruteForce(n));
  }, [n]);

  function numberOfColumns(n) {
    if (n % 2 === 1) {
      return (parseInt(n) + 1) / 2
    }
    else return n / 2
  }
  function piecesCut(cutSize) {
    return 2 * cutSize - 1;
  }

  function findCutBruteForce(n) {


    if (n <= 2) return 0;

    if (n % 2 === 0) return 0;
    else {
      let initialColumns = numberOfColumns(n);

      for (let cutSize = 1; cutSize <= initialColumns - 2; cutSize++) {
        if ((piecesCut(cutSize) % (initialColumns - cutSize) === 0)) return cutSize;
      }
    }
    return 0;
  }

  //render n divs
  //each div contains a number from 1 to n
  //they are ordered in groups of two
  //in case n is odd, the last div is alone
  function renderInitialPiece() {
    const divs = [];
    for (let i = 1; i < n; i += 2) {
      divs.push(<div className="pieces-column" key={i}>
        <div className="piece">{ }</div>
        <div className="piece">{ }</div>
      </div>)
    }
    if (n % 2 === 1) divs.push(<div className="last-piece piece" key={n}>{ }</div>)
    return divs;
  }

  function renderInitialPieceAsSolved() {
    const divs = [];
    for (let i = 1; i < n; i += 2) {
      divs.push(<div className="pieces-column" key={i}>
        <div className="piece solved">{ }</div>
        <div className="piece solved">{ }</div>
      </div>)
    }
    if (n % 2 === 1) divs.push(<div className="last-piece piece solved" key={n}>{ }</div>)
    return divs;
  }

  function renderInitialPieceWithCut() {
    const columns = numberOfColumns(n);
    const divs = [];
    for (let i = 1; i < n; i += 2) {
      divs.push(<div className="pieces-column" key={i}>
        <div className="piece">{ }</div>
        <div className="piece">{ }</div>
      </div>)
      if ((i / 2) + (1 / 2) === numberOfColumns(n) - cut) divs.push(<div className="cut-line" key={i + 1}>
        <span className="cut-number">{cut}</span>
      </div>)
      console.log((i / 2) + (1 / 2) + " ");
    }
    if (n % 2 === 1) divs.push(<div className="last-piece piece" key={n}>{ }</div>)
    return divs;
  }

  function renderSolvedPiece() {

    let newColumns = numberOfColumns(n) - cut;
    let newHeight = n / (n / newColumns);
    newColumns = n / newHeight;

    if (cut !== 0) {

      const rows = [];
      for (let i = 0; i < newHeight; i++) {
        let row = [];
        for (let j = 0; j < newColumns; j++) {
          row.push(<div className="piece solved" key={i * newColumns + j}>{ }</div>)
        }
        rows.push(<div className="pieces-column" key={i}>{row}</div>)
      }
      return rows;
    }
    else {
      if(n%2===0 && n!==2)return renderInitialPieceAsSolved(); //TODO: Check why 2 appears as a solved piece
      else return renderInitialPiece();
    }
  }


  //render input for n
  function renderInput() {
    return <InputField title="Size: " inputValue={n} setInputValue={setN} />
  }



  return (
    <div>
      <Bootstrap></Bootstrap>
      <NavigationBar></NavigationBar>
      <div className="inputs-div">{renderInput()}</div>
      <div className="initial-vs-solved">
        <div className="full-piece-div">
          <span className="piece-label">Initial Piece</span>
          <div className="pieces-row">{renderInitialPiece()}</div>
        </div>
        <div className="full-piece-div">
          <span className="piece-label">Cut</span>
          <div className="pieces-row">{renderInitialPieceWithCut()}</div>
        </div>
        <div className="full-piece-div">
          <span className="piece-label">Solved Piece</span>
          <div className="pieces-row">{renderSolvedPiece()}</div>
        </div>
      </div>
    </div>
  )
}

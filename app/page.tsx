'use client';
import React, { ChangeEventHandler, useState } from 'react';
import { SketchPicker } from 'react-color';
import S from '@/app/style'

const createGrid = ( rows : number, cols: number ) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
};

const Home = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [grid, setGrid] = useState(createGrid(10, 10));
  const [selectedColor, setSelectedColor] = useState('#ffffff'); 

  const handleRowsChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    const newRows = parseInt(e.target.value, 10);
    setRows(newRows);
    setGrid(createGrid(newRows, cols));
  };

  const handleColsChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    const newCols = parseInt(e.target.value, 10);
    setCols(newCols);
    setGrid(createGrid(rows, newCols));
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGrid = grid.map((row, rIndex) =>
      row.map((col, cIndex) =>
        rowIndex === rIndex && colIndex === cIndex ? selectedColor : col
      )
    );
    setGrid(newGrid);
  };  

  return (
    <S.Container>
      <S.Controls>
        <label>
          가로 : 
          <input
            type='number'
            value={rows}
            onChange={handleRowsChange}
          />
        </label>
        <label>
          세로 :
          <input
            type='number'
            value={cols}
            onChange={handleColsChange}
          />
        </label>
      </S.Controls>
      <SketchPicker 
        color={selectedColor}
        onChange={handleColorChange}/>
      <S.Grid>
        {grid.map((row, rowIndex) => (
          <S.Row key={rowIndex} >
            {row.map((col, colIndex) => (
              <S.Cell key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{backgroundColor: col}}/>
            ))}
          </S.Row>
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default Home;

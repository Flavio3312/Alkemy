import React, { useState } from 'react';
import Group2Buttons from 'components/Group2Buttons';
import ResultsEditRemove from './ResultsEditRemove';
/**
 * AreSureRemove is a component to question user is sure about delete a record.
 * @name AreSureRemove
 * @component
 * @category Pages
 * @subcategory Remove
 * @param {Number} IDRecord - Number ID for find record.
 * @param {Function} handleIsRemove - Function for back to options.
 * @example
 * <AreSureRemove IDRecord={id} handleIsRemove={handleIsRemove} />;
 * @returns Return a component of React.
 */
const AreSureRemove = ({ IDRecord, handleIsRemove }) => {
  const [showResult, setShowResult] = useState(false);
  const handleREMOVE = () => setShowResult(!showResult);
  return (
    <>
      {showResult ? (
        <ResultsEditRemove type={false} IDRecord={IDRecord} />
      ) : (
        <Group2Buttons
          title='¿Estás segurx de eliminar este registro?'
          btn1Func={handleREMOVE}
          btn1Color='red'
          btn1Text='Seguro!'
          btn2Func={handleIsRemove}
          btn2Color='blue'
          btn2Text='Volver'
        />
      )}
    </>
  );
};

export default AreSureRemove;

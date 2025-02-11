import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import i18next from 'i18next';

const SelectRoot = styled('select')`
  border-radius: 4px;
  width: 100px;
  height: 30px;
  border: solid #adb7c4 1px;
`;

export function SelectLanguages({ t }) {
  i18next.init({
    fallbackLng: ['en', 'dev'],
  });
  const [select, setSelect] = useState(i18next.language || 'en');

  useEffect(() => {
    i18next.changeLanguage(select);
  }, [select]);

  const handleSelect = ev => {
    ev.preventDefault();

    setSelect(ev.target.value);
  };

  return (
    <SelectRoot name="languages" id="languages" value={select} onChange={handleSelect}>
      <option value="es">{t('languages.es')}</option>
      <option value="en">{t('languages.en')}</option>
    </SelectRoot>
  );
}

SelectLanguages.propTypes = {
  t: PropTypes.func,
};

export default SelectLanguages;

import React from 'react';
require('../icons/money.svg');
require('../icons/details.svg');
require('../icons/statistics.svg');

type Props = {
  name: string
}

const MyIcon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};

export default MyIcon;
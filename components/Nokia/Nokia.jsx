import React from 'react';
import PieChartIcon from '../icons/PieChartIcon';
import InfoText from '../common/InfoText/InfoText';

export const Nokia = () => {
  return (
    <InfoText
      icon={<PieChartIcon size={80} />}
      title="Spojují nás technologie"
      text="Máme společnou vášeň i úkol. Rozvíjet sebe a ostatní členy komunity tak, aby technologiím vládli a nenechali se
      jimi ovládat."
    />
  );
};

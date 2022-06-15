import React from "react";
import GraphContainer from "../../components/graphContainer/graphContainer.compoonent";

import PageButtonsContainer from "../../components/pageButtonsContainer/pageButtonsContainer.component";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";

const PerfomancesPage = () => {
  return (
    <div className='w-full h-full'>
      <SectionTitle title='Perfomances' />
      <div
        className='w-full '
        style={{ backgroundColor: "#E9E9E9", height: "85%" }}
      >
        <PageButtonsContainer />
        <GraphContainer />
      </div>
    </div>
  );
};

export default PerfomancesPage;

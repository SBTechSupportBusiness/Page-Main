import React from 'react';
import { whyChooseSBTechSupportBusiness } from '../constants';
import { styles } from '../styles';

const WhyChooseUs = () => (
  <div className={`p-6 ${styles.paddingY} text-center`}>
    <h2 className={styles.sectionHeadText}>Por que escolher a SBTechSupportBusiness?</h2>
    <ul className="list-disc pl-5 mt-4 space-y-2 inline-block text-left">
      {whyChooseSBTechSupportBusiness.map((reason, index) => (
        <li key={index} className="text-white text-lg">{reason}</li>
      ))}
    </ul>
  </div>
);

export default WhyChooseUs;
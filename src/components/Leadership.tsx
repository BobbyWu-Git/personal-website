'use client';

import { leadership } from '@/content';
import Section from './Section';
import Timeline from './Timeline';

export default function Leadership() {
  return (
    <Section 
      id="leadership" 
      heading="Leadership & Community" 
      subheading="Building inclusive communities and driving operational excellence in student organizations."
      className="bg-gray-50 dark:bg-gray-900"
    >
      <Timeline roles={leadership} />
    </Section>
  );
}

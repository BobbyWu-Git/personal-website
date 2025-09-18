'use client';

import { experience } from '@/content';
import Section from './Section';
import Timeline from './Timeline';

export default function Experience() {
  return (
    <Section 
      id="experience" 
      heading="Professional Experience" 
      subheading="My journey through different roles, building scalable solutions and leading teams."
    >
      <Timeline roles={experience} />
    </Section>
  );
}

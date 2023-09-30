'use client';

import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

export default function StepperTimeline() {
  return (
    <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Flowbite Library v1.0.0
          </Timeline.Title>
          <Timeline.Time>
            Released on December 2, 2021
          </Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Flowbite Library v1.2.0
          </Timeline.Title>
          <Timeline.Time>
            Released on December 23, 2021
          </Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Flowbite Library v1.3.0
          </Timeline.Title>
          <Timeline.Time>
            Released on January 5, 2022
          </Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}



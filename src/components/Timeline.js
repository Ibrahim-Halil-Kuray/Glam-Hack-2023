import React from 'react';

const Timeline = ({data}) => {
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">{item['from-date']} - {item['to_date']}</div>
          <div className="timeline-place">{item.place}</div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;

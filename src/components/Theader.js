import React from "react";
import dummyData from "../dummyData.json";

export default function Theader({data}) {

  
  let locations = [];

  data.forEach((book) => {
    book.journey.forEach((point) => {
      let place = point.place;
      if (!locations.includes(place)) {
        locations.push(place);
      }
    });
  });

  return (
    <tr>
        <th>Authors / / / Will be deleted</th>
      {locations.map((location) => (
        <th scope="col" className="px-6 py-3">
          {location}
        </th>
      ))}
    </tr>
  );
}

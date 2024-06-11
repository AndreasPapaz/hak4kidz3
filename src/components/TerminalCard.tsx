import React from "react";

export default function TerminalCard({
  title,
  when,
  where,
  registration,
  registrationEnds,
  note,
  keynote,
  activities,
  schedule,
}) {
  return (
    <div className="terminal">
      <div className="myblog-url">
        <ul className="up">
          <li className="red" id="traffic"></li>
          <li className="yellow" id="traffic">
            {" "}
          </li>
          <li className="green" id="traffic">
            {" "}
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="event-details">
          <p>
            <strong>{title}</strong>
          </p>
          <p>
            <strong>When:</strong> {when}
          </p>
          <p>
            <strong>Where:</strong> {where}
          </p>
          <p>
            <strong>Registration:</strong> {registration}
          </p>
          <p>
            <strong>Registration Ends:</strong> {registrationEnds}
          </p>
          <p>
            <strong>NOTE:</strong> {note}
          </p>
          <p>
            <strong>Keynote:</strong> {keynote}
          </p>
          <p>
            <strong>Activities:</strong> {activities}
          </p>
          <p>
            <strong>Schedule:</strong> {schedule}
          </p>
        </div>
      </div>
      <div className="last">
        <div className="first">
          $<span className="blink">🁢</span>
          <input type="text" id="picker" autoFocus />
        </div>
      </div>
    </div>
  );
}

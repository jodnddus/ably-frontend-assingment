import { useEffect, useState } from "react";
import styled from "styled-components";

import parseToDoubleDigits from "util/parseToDoubleDigits";

interface TimerPropTypes {
  second: number;
  isLessThanNSeconds: (seconds: number) => boolean;
  onTimeOver: () => void;
}

function Timer({ second, isLessThanNSeconds, onTimeOver }: TimerPropTypes) {
  const [seconds, setSeconds] = useState(second / 1000);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        onTimeOver();
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds, onTimeOver]);

  return (
    <TimerContainer isNotMuchLeft={isLessThanNSeconds(seconds)}>
      <TimeP isNotMuchLeft={isLessThanNSeconds(seconds)}>
        {parseToDoubleDigits(Math.floor(seconds / 60))}:
        {parseToDoubleDigits(seconds % 60)}
      </TimeP>
    </TimerContainer>
  );
}

const TimerContainer = styled.div<{ isNotMuchLeft: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${(props) => (props.isNotMuchLeft ? "#FFF2F2" : "#F2F4F8")};
  width: fit-content;
  border-radius: 4px;
`;
const TimeP = styled.p<{ isNotMuchLeft: boolean }>`
  color: ${(props) => (props.isNotMuchLeft ? "#E85440" : "#A2A9B0")};
  text-align: center;
  font-weight: 700;
`;

export default Timer;

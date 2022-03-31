import { useEffect } from "react";
import styled from "styled-components";

import parseToDoubleDigits from "util/parseToDoubleDigits";

interface TimerPropTypes {
  second: number;
  setSecond: (second: number) => void;
  isLessThanNSeconds: (seconds: number) => boolean;
  onTimeOver: () => void;
}

function Timer({
  second,
  setSecond,
  isLessThanNSeconds,
  onTimeOver,
}: TimerPropTypes) {
  useEffect(() => {
    const countdown = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
      if (second === 0) {
        onTimeOver();
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [onTimeOver, second, setSecond]);

  return (
    <TimerContainer isNotMuchLeft={isLessThanNSeconds(second)}>
      <TimeP isNotMuchLeft={isLessThanNSeconds(second)}>
        {parseToDoubleDigits(Math.floor(second / 60))}:
        {parseToDoubleDigits(second % 60)}
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

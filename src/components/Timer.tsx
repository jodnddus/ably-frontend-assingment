import { useEffect, useState } from "react";
import styled from "styled-components";

import parseToDoubleDigits from "util/parseToDoubleDigits";

interface TimerPropTypes {
  second: number;
}

function Timer({ second }: TimerPropTypes) {
  const [seconds, setSeconds] = useState(second / 1000);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <TimerContainer>
      <TimeP>
        {parseToDoubleDigits(Math.floor(seconds / 60))}:
        {parseToDoubleDigits(seconds % 60)}
      </TimeP>
    </TimerContainer>
  );
}

const TimerContainer = styled.div``;
const TimeP = styled.p``;

export default Timer;

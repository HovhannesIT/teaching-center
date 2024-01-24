import { useEffect, useRef, useState } from "react";
import { Container, PopUP } from "./styles";
import { CompT, StateI } from "./types";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import moment from "moment";
import { createPortal } from "react-dom";
import { Input } from "../Input";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export const DatePicker: CompT = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { value, onChange } = props;

  const [state, setState] = useState<StateI>({
    year: 2024,
    month: 1,
    day: 1,
  });

  const [selected, setSelected] = useState<"month" | "year">("month");

  useEffect(() => {
    const year = moment(value).format("YYYY");
    const month = moment(value).format("MM");
    const day = moment(value).format("DD");

    setState({
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });
  }, [value]);

  const selectControllerHandler = (controller: "month" | "year") =>
    setSelected(controller);

  const controllerActionHandler = (action: "minus" | "plus") => {
    switch (action) {
      case "plus":
        if (selected === "month" && state[selected] === 12) {
          setState({
            ...state,
            [selected]: 1,
          });
        } else {
          setState({
            ...state,
            [selected]: state[selected] + 1,
          });
        }

        break;
      case "minus":
        if (selected === "month" && state[selected] === 1) {
          setState({
            ...state,
            [selected]: 1,
          });
        } else {
          setState({
            ...state,
            [selected]: state[selected] - 1,
          });
        }

        break;
    }
  };

  const selectDayHandler = (day: number) =>
    setState({
      ...state,
      day,
    });

  const renderDaysInTheMonth = () => {
    const daysInTheMonth = getDaysInMonth(state.year, state.month);
    const daysJSX = [];

    for (let i = 1; i <= daysInTheMonth; i++) {
      daysJSX.push(
        <div
          className={state.day === i ? " selected" : ""}
          onClick={() => selectDayHandler(i)}
        >
          {i}
        </div>
      );
    }

    return daysJSX;
  };

  const PopUpComponent = (
    <PopUP>
      <div className="controller">
        <div
          onClick={() => controllerActionHandler("minus")}
          className="action back"
        >
          <FaChevronCircleLeft />
        </div>
        <div className="selection">
          <div
            onClick={() => selectControllerHandler("year")}
            className={`year${selected === "year" ? " selected" : ""}`}
          >
            YEAR {state.year}
          </div>
          <div
            onClick={() => selectControllerHandler("month")}
            className={`month${selected === "month" ? " selected" : ""}`}
          >
            MONTH {state.month}
          </div>
        </div>
        <div
          onClick={() => controllerActionHandler("plus")}
          className="action forward"
        >
          <FaChevronCircleRight />
        </div>
      </div>
      <div className="calendar">{renderDaysInTheMonth()}</div>
    </PopUP>
  );

  const PupUPortaled = createPortal(
    PopUpComponent,
    document.getElementById("root") as HTMLElement
  );

  return (
    <Container>
      <Input ref={inputRef} />
      {PupUPortaled}
    </Container>
  );
};

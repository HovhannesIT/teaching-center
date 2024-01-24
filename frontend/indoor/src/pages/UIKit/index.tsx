import { useState } from "react";
import { KITComponents } from "..";
import { Container } from "./styles";

export const UIKit = () => {
  const [datePickerValue, setDatePickerValue] = useState("2024-02-24");

  return (
    <Container>
      <h1>UI KIT</h1>
      <div className="section">
        <p>Button</p>
        <ul className="states">
          <KITComponents.Button>
            Button Default
          </KITComponents.Button>
          <KITComponents.Button theme="secondary">
            Button Secondary
          </KITComponents.Button>
          <KITComponents.Button loading>Button Loading</KITComponents.Button>
          <KITComponents.Button theme="secondary" loading>
            Button Secondary Loading
          </KITComponents.Button>
        </ul>
      </div>
      <div className="section">
        <p>Accordion</p>
        <div className="states">
          <KITComponents.Accordion
            header={"Header"}
            action="body"
            collapse={<div>This is collapse</div>}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              pulvinar nisi. Etiam eget velit tortor. Suspendisse blandit turpis
              in congue maximus. Vestibulum blandit mi eu turpis cursus, sit
              amet finibus metus dictum. Duis dapibus dui vel euismod tempor.
              Sed enim ante, accumsan tristique tincidunt at, suscipit nec nisi.
            </p>
          </KITComponents.Accordion>
          <KITComponents.Accordion
            collapseDefaultState={true}
            header={"Header"}
            action="header"
            collapse={<div>This is collapse</div>}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              pulvinar nisi. Etiam eget velit tortor. Suspendisse blandit turpis
              in congue maximus. Vestibulum blandit mi eu turpis cursus, sit
              amet finibus metus dictum. Duis dapibus dui vel euismod tempor.
              Sed enim ante, accumsan tristique tincidunt at, suscipit nec nisi.
            </p>
          </KITComponents.Accordion>
        </div>
      </div>
      <div className="section">
        <p>Cart</p>
        <div className="states">
          <KITComponents.Cart>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
            pulvinar nisi. Etiam eget velit tortor. Suspendisse blandit turpis
            in congue maximus. Vestibulum blandit mi eu turpis cursus, sit amet
            finibus metus dictum. Duis dapibus dui vel euismod tempor. Sed enim
            ante, accumsan tristique tincidunt at, suscipit nec nisi.
          </KITComponents.Cart>
        </div>
      </div>
      <div className="section">
        <p>Date Picker</p>
        <div className="states">
          <KITComponents.DatePicker
            value={datePickerValue}
            onChange={(value) => setDatePickerValue(value)}
          />
        </div>
      </div>
      <div className="section">
        <p>Input</p>
        <div className="states">
          <KITComponents.Input />
        </div>
      </div>
    </Container>
  );
};

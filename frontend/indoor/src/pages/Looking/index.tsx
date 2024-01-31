import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Layout } from "../../components";
import { Button } from "../UIKit/components";
import { Container } from "./styles";
import { seekingLookingList } from "../../rest-api/private";
import { KITComponents } from "..";

export const Looking = observer(() => {
  const navigate = useNavigate();
  const [list, setList] = useState<
    {
      name: string;
      description: string;
      communicationType: string;
      owner: {
        email: string;
        professionId: string;
        firstName: string;
        lastName: string;
        type: string;
        username: string;
        phoneNumber: string;
        primaryCommunicationType: string;
      };
    }[]
  >([]);

  useEffect(() => {
    seekingLookingList().then(({ data }) => setList(data));
  }, []);

  return (
    <Layout>
      <Container>
        <div className="actions">
          <p>Find Here</p>
          <Button onClick={() => navigate("/looking/open")}>Open</Button>
        </div>
        <div className="content">
          {list.map((i, key) => (
            <KITComponents.Accordion
              header={i.name}
              key={i.name + key}
              action="body"
              collapse={<p>{i.description}</p>}
            >
              <div className="acc-content">
                <div className="type">{i.owner.type}</div>
                <span>{i.owner.email}</span>
                <br />
                <span>
                  {i.owner.firstName}&nbsp;{i.owner.lastName}
                </span>
              </div>
            </KITComponents.Accordion>
          ))}
        </div>
      </Container>
    </Layout>
  );
});

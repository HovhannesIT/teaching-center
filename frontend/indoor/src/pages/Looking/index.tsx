import { useNavigate } from "react-router-dom";
import { Layout } from "../../components";
import { Button } from "../UIKit/components";
import { Container } from "./styles";
import { useEffect } from "react";

export const Looking = () => {
  useEffect(() => {
    
  }, []);

  const navigate = useNavigate();
  
  return (
    <Layout>
      <Container>
        <div className="actions">
          <p>Find Here</p>
          <Button onClick={() => navigate('/looking/open')}>Open</Button>
        </div>
        AS WE DONT HAVE CUSTOMERS RIGHT NOW, PAGE NOT AVAILABLE AT THIS MOMENT.
      </Container>
    </Layout>
  );
};

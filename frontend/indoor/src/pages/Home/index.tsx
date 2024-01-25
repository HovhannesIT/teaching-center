import { Layout } from "../../components";

import teacher from "../../images/teacher.png";
import student from "../../images/student.png";
import { Container } from "./style";

export const Home = () => {
  return (
    <Layout>
      <Container>
        <div>
          <section>
            <img src={teacher} alt="" />
            <p>
            <p className="title">DO WHAT YOU LOVE TO DO</p>
              <span>Hey! welcome</span> to platform where you can find people
              who are seriously interested in your profession, extend your
              experience with them and make this world much better. hope you
              will enjoy it. thanks!
            </p>
          </section>
          <section>
            <img src={student} alt="" />
            <p>
            <p className="title">TIME TO LEARN</p>
              <span>Hello.</span>Be sure, Knowledge(Profession) its last type of
              power in this century. find your friend (Teacher,Coach) in this
              platform and enjoy it. welcome!
            </p>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

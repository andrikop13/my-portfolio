import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { skills, URL_CONFIG } from "@config";
import { Wrapper } from "@components/dashboard";

const CustomCard = styled.div`
  margin-top: -7rem;
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: var(--lightest-slate);
  box-shadow: 1rem 2rem 4rem var(--navy-shadow);
  border-radius: 3px;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 999;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 1075px) {
    width: 200px;
    height: 200px;
    gap: 1.5rem;
  }

  @media only screen and (max-width: 675px) {
    margin-top: 0rem;
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 450px) {
    width: 150px;
    height: 150px;
    gap: 1rem;

    & .card-title {
      font-size: var(--fonts-lg);
      color: var(--logo-color);
    }

    & .card-number {
      font-size: var(--fonts-xxxl);
      color: var(--dark-slate);
    }
  }
`;

const MainDash = () => {
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.list);
  const jobs = useSelector((state) => state.jobs.list);

  return (
    <Wrapper>
      <div className="dash-container">
        <CustomCard onClick={() => navigate(URL_CONFIG.baseURLs.jobs)}>
          <div className="card-title">Experience</div>
          <div className="card-number">{jobs.length}</div>
        </CustomCard>

        <CustomCard onClick={() => navigate(URL_CONFIG.baseURLs.projects)}>
          {" "}
          <div className="card-title">Projects</div>
          <div className="card-number">{projects.length}</div>
        </CustomCard>
        <CustomCard>
          {" "}
          <div className="card-title">Skills</div>
          <div className="card-number">{skills.length}</div>
        </CustomCard>
      </div>
    </Wrapper>
  );
};

export default MainDash;

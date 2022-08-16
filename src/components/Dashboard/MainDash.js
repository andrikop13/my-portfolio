import { ConstructionOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL_CONFIG } from "../../config/config";
import { skills } from "../../config/content";
import Wrapper from "./Wrapper";
const CustomCard = styled.div`
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

  @media only screen and (max-width: 675px) {
    width: 200px;
    height: 200px;
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

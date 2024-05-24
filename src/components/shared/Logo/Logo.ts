import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  align-items: center;
  gap: 8px;
`;

export const LogoLink = styled(Link)`
  display: "flex";
  align-items: "center";
  gap: "8px";
`;

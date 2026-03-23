import styled from "styled-components";
import { Button, Typography } from "@mui/material";

//example of stules for the example form component. see index.tsx for more details.

export const ExampleWorkFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 400px;
  padding: 24px;

  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const ExampleWorkTitle = styled(Typography)`
  font-weight: 700;
`;

export const ExampleWorkSubmitButton = styled(Button)`
  align-self: flex-start;
`;

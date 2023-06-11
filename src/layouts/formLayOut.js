import React from "react";
import styled from "styled-components";

const FormLayOutWraper = styled.div`
  /* width: ${(props) => props.width ?? "577px"}; */
  /* height: ${(props) => props.width ?? "564px"}; */

`;
function FormLayOut({ children, ...props }) {
  return (
    <FormLayOutWraper className="border w-[577px] bg-white h-[564px] rounded-lg p-8 " {...props}>
      {children}
    </FormLayOutWraper>
  );
}

export default FormLayOut;

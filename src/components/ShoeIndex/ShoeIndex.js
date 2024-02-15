import React from "react";
import styled from "styled-components/macro";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

import { BREAKPOINTS } from "../../constants";

const { tablet } = BREAKPOINTS;

const ShoeBreadcrumbs = () => {
   return (
      <Breadcrumbs>
         <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
         <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
         <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
      </Breadcrumbs>
   );
};

const ShoeIndex = ({ sortId, setSortId }) => {
   return (
      <Wrapper>
         <MainColumn>
            <Header>
               <TitleWrapper>
                  <BreadcrumbWrapper>
                     <ShoeBreadcrumbs />
                  </BreadcrumbWrapper>
                  <Title>Running</Title>
               </TitleWrapper>
               <Select
                  label="Sort"
                  value={sortId}
                  onChange={(ev) => setSortId(ev.target.value)}
               >
                  <option value="newest">Newest Releases</option>
                  <option value="price">Price</option>
               </Select>
            </Header>
            <Spacer size={32} />
            <ShoeGrid />
         </MainColumn>
         <LeftColumn>
            <ShoeBreadcrumbs />
            <Spacer size={42} />
            <ShoeSidebar />
         </LeftColumn>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   flex-direction: row-reverse;
   align-items: baseline;
   gap: 32px;
`;

const TitleWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

const BreadcrumbWrapper = styled.div`
   display: none;

   @media (max-width: ${tablet}) {
      & {
         display: block;
      }
   }
`;

const LeftColumn = styled.div`
   flex-basis: 248px;

   @media (max-width: ${tablet}) {
      & {
         display: none;
      }
   }
`;

const MainColumn = styled.div`
   flex: 1;
`;

const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: baseline;

   @media (max-width: ${tablet}) {
      & {
         align-items: center;
      }
   }
`;

const Title = styled.h2`
   font-size: 1.5rem;
   font-weight: var(--weight-medium);
`;

export default ShoeIndex;

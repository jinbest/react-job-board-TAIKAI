import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mockCompanies from '../data/mockCompanies.json';
import { H1, H2 } from '../styles/Text';
import Size from '../styles/device';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CompanyWrapper = styled.li`
  padding: 1rem;
  border-radius: 3px;
  list-style: none;
  border: ${props => `1px solid ${props.theme.bg.gray}`};
  box-shadow: ${props => props.theme.shadow.light};
  width: 100%;
  margin: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease all;

  @media screen and (min-width: ${Size.md}) {
    width: 300px;
  }

  &:hover {
    background: ${props => props.theme.primary};
    border: ${props => `1px solid ${props.theme.primary}`};
    color: white;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const Location = styled.h4`
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Category = styled.h5`
  font-size: 0.85rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  color: inherit;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;
`;

const Heading = styled(H1)`
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const SubHeading = styled(H2)`
  font-weight: 600;
`;

function Company({ company }) {
  const {
    company_name: companyName,
    url,
    city,
    state,
    company_category: category,
    description_short: description,
  } = company;
  return (
    <CompanyWrapper as="a" href={url} target="_blank">
      <CompanyName>{companyName}</CompanyName>
      <Location>{`${city}, ${state}`}</Location>
      <Category>{category}</Category>
      <Description>{description}</Description>
    </CompanyWrapper>
  );
}

Company.propTypes = {
  company: PropTypes.shape({
    company_name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    company_category: PropTypes.string.isRequired,
    description_short: PropTypes.string.isRequired,
  }).isRequired,
};

function CompanyList() {
  return (
    <List>
      {mockCompanies.map(company => (
        <Company key={company.company_name_id} company={company} />
      ))}
    </List>
  );
}

export default function Companies() {
  return (
    <>
      <Banner>
        <Heading>Top Companies in the U.S</Heading>
        <SubHeading>Find developer jobs at over 1000 companies</SubHeading>
      </Banner>
      <CompanyList />
    </>
  );
}

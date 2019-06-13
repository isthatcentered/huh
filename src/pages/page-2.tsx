import { Link } from 'gatsby';
import * as React from 'react';
import Page from '../components/page';

const SecondPage = () => (
  <Page>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/about">Go to the About page</Link>
  </Page>
);

export default SecondPage;

import { RouterProps } from '@reach/router';
import * as React from 'react';
import { PostQueryData } from '../interfaces/PostQuery.interface';
import Page from './page';

type PostLayoutProps = PostQueryData & RouterProps;

const PostLayout: React.FunctionComponent<PostLayoutProps> = ({
  data,
  ...props
}) => {
  if (!data) {
    return null
  }

  const { title, date } = data.mdx.frontmatter;
  const { location, children } = props;

  return (
    <Page location={location}>
      <h1>{title}</h1>
      <em>{date}</em>
      {children}
    </Page>
  );
};

export default PostLayout;

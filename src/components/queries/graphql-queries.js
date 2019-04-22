import gql from 'graphql-tag';

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const LOGGED_IN_USER = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation SignupUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      token
    }
  }
`;

export const CREATE_DASHBOARD = gql`
  mutation CreateDashboard(
    $authorId: ID!
    $title: String!
    $description: String!
  ) {
    createDashboard(
      authorId: $authorId
      title: $title
      description: $description
    ) {
      author {
        id
        name
      }
      description
      id
    }
  }
`;

export const LIST_ALL_DASHBOARD = gql`
  query {
    allDashboards {
      user {
        name
        id
      }
      id
      description
      title
    }
  }
`;

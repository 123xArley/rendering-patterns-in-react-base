import React from 'react';

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const {isLoading, ...rest} = props;
    return isLoading ? <p>Loading...</p> : <Component {...rest as T} />;
  }
}

type UserProps = {
  name: string;
}

const userComponent: React.FC<UserProps> = ({name}) => {
  return <p>Hello, {name} !</p>;
}

const UserWithLoading = withLoading(userComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="John" />
      <UserWithLoading isLoading={false} name="TeffCode" />
    </div>
  );
};

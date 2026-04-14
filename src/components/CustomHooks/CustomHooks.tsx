import React, { useState } from "react";

function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);
  return { isLoading, setIsLoading };
}

type userProps = {
  name: string;
};

const UserComponent: React.FC<userProps> = ({name}) => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Hello, {name} !</p>
      <button onClick={() => setIsLoading(true)}>Simulate Loading...</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="TeffCode" />;
};

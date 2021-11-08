import { useCan } from '../hooks/useCan';

interface CanProps {
  children: React.ReactNode;
  permissions?: string[];
  roles?: string[];
}

export const Can = ({ children, permissions, roles}: CanProps) => {
  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}

import React from 'react';

interface Props {
  children: any;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <div className={`layout ${className || ``}`}>
      {children}

      <footer className="footer">
        &copy; 2020 by Karol Moroz / DW Taiwan.
      </footer>
    </div>
  );
};

export default Layout;

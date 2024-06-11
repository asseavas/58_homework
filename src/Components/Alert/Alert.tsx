import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: 'primary' | 'success'| 'danger' | 'warning';
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({show,type, onDismiss, children}) => {
  if (!show) return null;
  return (
    <div className={`alert alert-${type} d-flex justify-content-between`}>
      <span>{children}</span>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onDismiss}
        style={{display: !onDismiss ? 'none' : 'block'}}/>
    </div>
  );
};

export default Alert;
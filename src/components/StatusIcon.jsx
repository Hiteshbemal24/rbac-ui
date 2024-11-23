const StatusIcon = ({ status }) => {
    const isActive = status === 'Active';
    return (
      <div className="relative flex items-center justify-center w-4 h-4">
        <span
          className={`absolute w-4 h-4 rounded-full ${
            isActive ? 'bg-green-200' : 'bg-red-200'
          }`}
        ></span>
        <span
          className={`relative w-2 h-2 rounded-full ${
            isActive ? 'bg-green-400' : 'bg-red-400'
          }`}
        ></span>
      </div>
    );
  };
  
  export default StatusIcon;
  